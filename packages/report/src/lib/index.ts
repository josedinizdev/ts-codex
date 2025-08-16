

import { PDFDocument, PDFFont, PDFPage, rgb, StandardFonts } from 'pdf-lib';
import { types } from '../types/index.js';
import QRCode from 'qrcode';
import bwipjs, { RenderOptions } from 'bwip-js';


function page(props: types.PageProps): types.BaseNode {
  return { type: 'page', props };
}

function row(props: types.RowProps): types.BaseNode {
  return { type: 'row', props };
}

function column(props: types.ColumnProps): types.BaseNode {
  return { type: 'column', props };
}

function rectangle(props: types.RectangleProps): types.BaseNode {
  return { type: 'rectangle', props };
}

function absolute(props: types.AbsoluteProps): types.BaseNode {
  return { type: 'absolute', props };
}

function label(props: types.LabelProps): types.BaseNode {
  return { type: 'label', props };
}

function image(props: types.ImageProps): types.BaseNode {
  return { type: 'image', props };
}

function qrcode(props: types.QrCodeProps): types.BaseNode {
  return { type: 'qrcode', props };
}

function barcode(props: types.BarcodeProps): types.BaseNode {
  return { type: 'barcode', props };
}

// Quebra texto em múltiplas linhas com base na largura máxima disponível
function splitTextIntoLines(text: string, font: any, fontSize: number, maxWidth: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? currentLine + ' ' + word : word;
    const testWidth = font.widthOfTextAtSize(testLine, fontSize);
    if (testWidth <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

export async function pdf(nodes: types.Node[], options: types.PdfOptions): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  for (const node of nodes) {
    if (node.type === 'page') {
      const { width, height } = getPageSize(options.pageFormat);
      let margin = node.props.margin ?? 0;
      if (margin === 0) margin = 1;
      const marginPx = margin * 5;
      const page = pdfDoc.addPage([width, height]);
      const maxWidth = width - marginPx * 2;
      let cursorY = height - marginPx * 2;

      for (const child of node.props.children) {
        const size = await measureNode(child, font, maxWidth);
        await renderNode(pdfDoc, page, font, child, marginPx, cursorY, maxWidth);
        cursorY -= size.height + 5;
      }
    }
  }

  return await pdfDoc.save();
}

async function measureNode(node: types.Node, font: PDFFont, maxWidth: number = 10000): Promise<types.Size> {
  switch (node.type) {
    case 'label': {
      const { value, fontSize = 12 } = node.props;
      const lines = splitTextIntoLines(value, font, fontSize, maxWidth);
      const width = Math.min(
        maxWidth,
        Math.max(...lines.map(line => font.widthOfTextAtSize(line, fontSize)))
      );
      const height = lines.length * fontSize * 1.2;
      return { width, height };
    }

    case 'qrcode': {
      const size = node.props.size ?? 100;
      return { width: size, height: size };
    }

    case 'barcode': {
      const w = node.props.width ?? 200;
      const h = node.props.height ?? 50;
      return { width: Math.min(w, maxWidth), height: h };
    }

    case 'row': {
      let width = 0;
      let height = 0;
      for (const child of node.props.children) {
        const size = await measureNode(child, font, maxWidth);
        width += size.width;
        height = Math.max(height, size.height);
      }
      if (width > maxWidth) width = maxWidth;
      return { width, height };
    }

    case 'column': {
      let width = 0;
      let height = 0;
      for (const child of node.props.children) {
        const size = await measureNode(child, font, maxWidth);
        height += size.height;
        width = Math.max(width, size.width);
      }
      if (width > maxWidth) width = maxWidth;
      return { width, height };
    }

    default:
      return { width: 0, height: 0 };
  }
}


async function renderNode(
  pdfDoc: PDFDocument,
  page: PDFPage,
  font: PDFFont,
  node: types.Node,
  x: number,
  y: number,
  maxWidth: number = 10000
) {
  switch (node.type) {
    case 'row':
      let cursorX = x;
      for (const child of node.props.children) {
        const size = await measureNode(child, font, maxWidth);
        await renderNode(pdfDoc, page, font, child, cursorX, y, maxWidth);
        cursorX += size.width;
      }
      break;
    case 'column':
      let cursorY = y;
      for (const child of node.props.children) {
        const size = await measureNode(child, font, maxWidth);
        await renderNode(pdfDoc, page, font, child, x, cursorY, maxWidth);
        cursorY -= size.height;
      }
      break;
    case 'label':
      var { value, fontSize = 12, color = '#000000' } = node.props;
      const rgbColor = hexToRgb(color);
      if (!rgbColor) break;

      const lines = splitTextIntoLines(value, font, fontSize, maxWidth);

      for (let i = 0; i < lines.length; i++) {
        page.drawText(lines[i], {
          x,
          y: y - i * fontSize * 1.2,
          size: fontSize,
          font,
          color: rgb(rgbColor.r / 255, rgbColor.g / 255, rgbColor.b / 255),
        });
      }
      break;
    case 'qrcode':
      var { value, size = 100 } = node.props;
      try {
        const pngBuffer = await QRCode.toBuffer(value, { width: size, margin: 0 });

        const pngImage = await pdfDoc.embedPng(pngBuffer);
        const pngDims = pngImage.scale(1);

        page.drawImage(pngImage, {
          x,
          y: y - size,
          width: size,
          height: size,
        });
      } catch (err) {
        console.error('Erro ao gerar QR Code:', err);
      }
      break;
    case 'barcode': 
      var { 
        value, 
        width = 200, 
        height = 50, 
        symbology = 'code128', 
        scale = 3,
        includetext = false,
        ...options
      } = node.props;

      try {
        const bwipOptions: RenderOptions = {
          ...options,
          bcid: symbology,
          text: value,
          scale: scale,
          includetext: includetext,
          width,
          height,
        };

        const pngBuffer = await bwipjs.toBuffer(bwipOptions);

        const pngImage = await pdfDoc.embedPng(pngBuffer);
        const imgSize = pngImage.scale(1);

        const drawWidth = width ?? imgSize.width;
        const drawHeight = height ?? imgSize.height;

        page.drawImage(pngImage, {
          x,
          y: y - drawHeight,
          width: drawWidth,
          height: drawHeight,
        });
      } catch (err) {
        console.error(`Erro ao gerar barcode ${symbology}:`, err);
      }

      break;
  }
}

function getPageSize(format: 'A4'): { width: number; height: number } {
  switch (format) {
    case "A4":
    default:
      return { width: 1024, height: 1425 };
  }
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const match = hex.replace('#', '').match(/.{1,2}/g);
  if (!match || match.length !== 3) return null;
  const [r, g, b] = match.map(x => parseInt(x, 16));
  return { r, g, b };
}

