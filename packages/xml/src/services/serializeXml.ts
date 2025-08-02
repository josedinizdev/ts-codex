import { SeserializeXmlOptions } from "../types";


export function serializeXml(rootTag: string, obj: any, options?: SeserializeXmlOptions) {
  let xmlString = options?.xmlChild == true ? '' : `<?xml version="${options?.version ?? '1.0'}" encoding="${options?.encoding ?? 'utf-8'}"?>`;
  const indexSum = options?.firstIndexZero == false ? 1 : 0;

  switch (typeof obj) {

    case 'object':
      if (Array.isArray(obj)) {
        for (const data of obj) {
          if (typeof data == 'object') {
            xmlString += serializeXml(rootTag, data, { ...options, index: obj.indexOf(data) + indexSum });
          }
          else if (options) {
            xmlString += serializeXml(rootTag, data, options);
          }
        }
      }
      else if (obj == null) {
        xmlString += `<${rootTag}/>`
      }
      else {
        xmlString += `<${rootTag}`

        const entries = Object.entries(obj);

        if (entries.filter(e => e[0].includes('@')).length == entries.length && entries.find(e => e[0] == '@value') != null) {
          for (const [key, value] of entries.filter(e => e[0].includes('@') && e[0] != '@value')) {
            if (key == '@index' && typeof options?.index == 'number')
              xmlString += ` ${value}="${options?.index}"`;
            else if (key == '@indexName')
              continue;
            else
              xmlString += ` ${key.replace('@', '')}="${value}"`;
          }

          const [, value] = entries.find(e => e[0] == '@value') as [string, any];
          xmlString += `>${value}`;
          xmlString += `</${rootTag}>`;
        }
        else {
          for (const [key, value] of entries.filter(e => e[0].includes('@'))) {
            if (key == '@index' && typeof options?.index == 'number')
              xmlString += ` ${value}="${options?.index}"`;
            else if (key == '@indexName')
              continue;
            else
              xmlString += ` ${key.replace('@', '')}="${value}"`;
          }

          if (entries.filter(e => !e[0].includes('@')).length > 0) {
            xmlString += '>';

            for (const [key, value] of entries.filter(e => !e[0].includes('@'))) {
              if (Array.isArray(value)) {
                xmlString += serializeXml(key, value, { ...options, xmlChild: true });
              }
              else {
                xmlString += serializeXml(key, value, { ...options, xmlChild: true });
              }

            }

            xmlString += `</${rootTag}>`;
          }
          else {
            xmlString += '/>';
          }
        }
      }
      break;
    case 'number':
      xmlString += `<${rootTag}>${obj}</${rootTag}>`;
      break;
    case 'bigint':
      xmlString += `<${rootTag}>${obj}</${rootTag}>`;
      break;
    case 'string':
      xmlString += `<${rootTag}>${obj}</${rootTag}>`;
      break;
  }

  return xmlString;
}