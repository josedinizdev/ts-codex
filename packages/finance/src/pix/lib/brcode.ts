import { math } from "@ts-codex/utils";
import { BrCodeOptions } from "../../types/pix";
import {FIELD} from "../constants/field";
import { brCodeFieldValue } from "./brCodeFieldValue";
import { loadBrCodeCRC16 } from "./loadBrCodeCRC16";

export function brcode(options: BrCodeOptions) {
  let {
    chave,
    destinatario,
    cidade,
    valor,
    mcc = "0000",
    descricao,
    txid = "*",
    location,
    pagamentoUnico = false,
    cep
  } = options;

  let retorno = '';
  retorno += brCodeFieldValue(FIELD.ID_PAYLOAD_FORMAT_INDICATOR, "01", 2);
  if (pagamentoUnico)
    retorno += brCodeFieldValue(FIELD.ID_POINT_INITIATION_METHOD, "12", 2);

  let dest = "";
  dest += brCodeFieldValue(FIELD.ID_MERCHANT_ACCOUNT_INFORMATION_GUI, "BR.GOV.BCB.PIX", 11);
  if (location) {
    dest += brCodeFieldValue(FIELD.ID_MERCHANT_ACCOUNT_INFORMATION_PAYLOAD_LOCATION, location, 99)
  } else {
    dest += brCodeFieldValue(FIELD.ID_MERCHANT_ACCOUNT_INFORMATION_KEY, chave, 99);
  }
  if (descricao)
    dest += brCodeFieldValue(FIELD.ID_MERCHANT_ACCOUNT_INFORMATION_DESCRIPTION, descricao, 99);

  retorno += brCodeFieldValue(FIELD.ID_MERCHANT_ACCOUNT_INFORMATION, dest, 99);
  retorno += brCodeFieldValue(FIELD.ID_MERCHANT_CATEGORY_CODE, mcc, 4);
  retorno += brCodeFieldValue(FIELD.ID_TRANSACTION_CURRENCY, "986", 3);

  if (valor != null)
    retorno += brCodeFieldValue(FIELD.ID_TRANSACTION_AMOUNT, math.abnt(valor, 2).toFixed(2), 13);

  retorno += brCodeFieldValue(FIELD.ID_COUNTRY_CODE, "BR", 2);
  retorno += brCodeFieldValue(FIELD.ID_MERCHANT_NAME, destinatario, 25);
  retorno += brCodeFieldValue(FIELD.ID_MERCHANT_CITY, cidade, 15);
  if (cep)
    retorno += brCodeFieldValue(FIELD.ID_MERCHANT_CITY, cep, 99);

  let adicionais = brCodeFieldValue(FIELD.ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID, txid, 25);

  retorno += brCodeFieldValue(FIELD.ID_ADDITIONAL_DATA_FIELD_TEMPLATE, adicionais, 29);

  return retorno + loadBrCodeCRC16(retorno);
}