import { DeserializeXmlOptions } from "../types";

const rgxTag = /\<[A-Za-z|0-9]+(( [A-Za-z|0-9]+\=\"[A-Za-z|0-9| |\.|\-|\:|\/|\#]+\")+)?( \/)?\>/;
const rgxAtt = /[A-Za-z|0-9]+\=\"[A-Za-z|0-9| |\.|\-|\:|\/|\#]+\"/;

export function deserializeXml<T>(xml: string, masterKey?: string, options: DeserializeXmlOptions = {}): T | undefined {
  try {
    if (masterKey)
      xml = xml.slice(xml.indexOf(masterKey) - 1, xml.length);

    var match = rgxTag.exec(xml);
    if (match) {
      let obj: any = {};
      let tag = match[0];
      let propriedade = tag.split(' ')[0].replace(/\<|\>/g, '');
      let atributos = tag.slice(propriedade.length + 1, tag.length).replace(/\<|\>/g, '').trim();
      let lstAtributos = [];
      xml = xml.slice(match.index + tag.length, xml.length);
      let conteudo = xml.slice(0, xml.indexOf(`</${propriedade}>`));

      while (rgxAtt.exec(atributos)) {
        let matchAtt = rgxAtt.exec(atributos) as RegExpExecArray;
        let dadosAtributos = matchAtt[0].split('=');

        obj["@" + dadosAtributos[0].trim()] = dadosAtributos[1].replace(/\"/g, '').trim();

        lstAtributos.push(matchAtt[0]);
        atributos = atributos.slice(matchAtt[0].length, atributos.length).trim();
      }

      if (rgxTag.test(conteudo)) {
        while (rgxTag.test(conteudo)) {
          let matchTag = rgxTag.exec(conteudo) as RegExpExecArray;
          let tagChild = matchTag[0];
          let propriedadeChild = tagChild.split(' ')[0].replace(/\<|\>/g, '');

          while (rgxAtt.exec(atributos)) {
            let matchAtt = rgxAtt.exec(atributos) as RegExpExecArray;
            lstAtributos.push(matchAtt[0]);
            atributos = atributos.slice(matchAtt[0].length, atributos.length).trim();
          }

          if (obj[propriedadeChild] && Array.isArray(obj[propriedadeChild]) == false) {
            obj[propriedadeChild] = [obj[propriedadeChild]];
            obj[propriedadeChild].push(deserializeXml(conteudo.slice(0, conteudo.indexOf(`</${propriedadeChild}>`) + `</${propriedadeChild}>`.length), propriedadeChild, options));
          }
          else if (options.arrayTags?.includes(propriedadeChild) && Array.isArray(obj[propriedadeChild]) == false) {
            obj[propriedadeChild] = [];
            obj[propriedadeChild].push(deserializeXml(conteudo.slice(0, conteudo.indexOf(`</${propriedadeChild}>`) + `</${propriedadeChild}>`.length), propriedadeChild, options));
          }
          else if (obj[propriedadeChild] && Array.isArray(obj[propriedadeChild]) == true) {
            obj[propriedadeChild].push(deserializeXml(conteudo.slice(0, conteudo.indexOf(`</${propriedadeChild}>`) + `</${propriedadeChild}>`.length), propriedadeChild, options));
          }
          else {
            obj[propriedadeChild] = deserializeXml(conteudo.slice(0, conteudo.indexOf(`</${propriedadeChild}>`) + `</${propriedadeChild}>`.length), propriedadeChild, options);
          }

          conteudo = conteudo.slice(conteudo.indexOf(`</${propriedadeChild}>`) + `</${propriedadeChild}>`.length, conteudo.length);
        }

        return obj as T;
      }
      else {
        return conteudo as T;
      }
    }
  }
  catch {
    return undefined
  }
}