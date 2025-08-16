import { RenderOptions } from "bwip-js";

export namespace types {
  export interface PageProps {
    margin?: number;
    children: Node[];
  }

  export interface PdfOptions {
    pageFormat: 'A4'
  }

  export interface RowProps {
    height?: number | `${number}%`
    width: number | `${number}%`
    padding?: number;
    children: Node[];
  }

  export interface ColumnProps {
    height?: number | `${number}%`
    width: number | `${number}%`
    padding?: number;
    children: Node[];
  }

  export interface RectangleProps {
    height: number | `${number}%`
    width: number | `${number}%`
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    padding?: number;
    children: Node[];
  }

  export interface AbsoluteProps {
    x: number;
    y: number;
    children: Node[];
  }

  export interface BaseNode {
    type: string;
    props: any;
  }

  export interface LabelProps {
    value: string;
    color?: string;
    fontSize?: number;
  }

  export interface ImageProps {
    src: string; // base64 ou URL
    width?: number;
    height?: number;
  }

  export interface QrCodeProps {
    value: string;
    size?: number;
  }

  export interface BarcodeProps extends Omit<RenderOptions, 'bcid' |'text'> {
    value: string;
    includetext?: boolean;
    scale?: number
    symbology: 
    | "datamatrix"
    | "datamatrixrectangular"
    | "pdf417"
    | "micropdf417"
    | "maxicode"
    | "azteccode"
    | "azteccodecompact"
    | "ultracode"
    | "code16k"
    | "code49"
    | "code128"
    | "gs1datamatrix"
    | "gs1qrcode";
    width?: number;
    height?: number;
  }

  export interface Size {
    width: number;
    height: number;
  }

  export type Node =
    | ReturnType<(props: types.PageProps) => types.BaseNode>
    | ReturnType<(props: types.RowProps) => types.BaseNode>
    | ReturnType<(props: types.ColumnProps) => types.BaseNode>
    | ReturnType<(props: types.RectangleProps) => types.BaseNode>
    | ReturnType<(props: types.AbsoluteProps) => types.BaseNode>
    | ReturnType<(props: types.LabelProps) => types.BaseNode>
    | ReturnType<(props: types.ImageProps) => types.BaseNode>
    | ReturnType<(props: types.QrCodeProps) => types.BaseNode>
    | ReturnType<(props: types.BarcodeProps) => types.BaseNode>;
}