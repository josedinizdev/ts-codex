import { unMask } from "./unMask.js";

const DIGIT = '0';
const ALPHA = 'A';
const ALPHANUM = 'S';
const HOURS = 'H';
const MINUTES = 'm';
const SECONDS = 's';

type OptionPattern = {
  pattern: string
  placeholder: string
}

export function mask(
  value: string | number,
  pattern: string | string[] = '',
  type: 'custom' | 'currency' | 'date' | 'time' = 'custom',
  options?: any,
  autoCapitalize?: 'characters' | 'words' | 'sentences' | 'none'
): string {

  if (type === 'date') {
    return dateMasker(String(value), options)
  }

  if (type === 'time') {
    return timeMasker(String(value), options)
  }

  if (typeof pattern === 'string') {
    return masker(String(value), pattern || '', {
      autoCapitalize: autoCapitalize,
    })
  }

  return multimasker(String(value), pattern, {})
}

function multimasker(value: string, patterns: string[], options: any) {
  return masker(
    value,
    patterns.reduce(
      (memo: string, pattern: string) =>
        value.length <= unMask(memo).length ? memo : pattern,
      patterns[0]
    ),
    options
  )
}

function masker(value: string, pattern: string, options: any) {
  const { autoCapitalize } = options

  const sentence = toPattern(value, { pattern, ...options })

  switch (autoCapitalize) {
    case 'characters':
      sentence.toUpperCase()
      break
    case 'words':
      sentence.replace(/(?:^|\s)\S/g, (text: string) => text.toUpperCase())
      break
    case 'sentences': {
      const lower = sentence.toLowerCase()
      lower.charAt(0).toUpperCase() + lower.substring(1)
      break
    }
  }

  return sentence
}

function dateMasker(value = '', options: any) {
  const { dateFormat = 'yyyy/mm/dd' } = options

  const regex = /[a-zA-Z]/gi
  const pattern = dateFormat.replaceAll(regex, '9')
  return masker(value, pattern, {})
}

function timeMasker(value = '', options: any) {
  const { timeFormat = 'HH:mm:ss' } = options

  const pattern = timeFormat
  return masker(value, pattern, {})
}

function toPattern(
  value: number | string,
  optionPattern: string | OptionPattern
): string {
  const pattern =
    typeof optionPattern === 'object' ? optionPattern.pattern : optionPattern
  const patternChars = pattern.replace(/\W/g, '')
  const output = pattern.split('')
  const values = value.toString().replace(/\W/g, '')
  const charsValues = values.replace(/\W/g, '')
  const placeholder =
    typeof optionPattern === 'object' ? optionPattern.placeholder : undefined
  let charCounter = 0
  let index

  const outputLength = output.length
  for (index = 0; index < outputLength; index++) {
    if (charCounter >= values.length) {
      if (patternChars.length === charsValues.length) {
        return output.join('')
      }
      if (
        placeholder !== undefined &&
        patternChars.length > charsValues.length
      ) {
        return addPlaceholder(output, index, placeholder).join('')
      }
      break
    } else if (
      (output[index] === DIGIT && values[charCounter].match(/[0-9]/)) ||
      (output[index] === ALPHA && values[charCounter].match(/[a-zA-Z]/)) ||
      (output[index] === ALPHANUM &&
        values[charCounter].match(/[0-9a-zA-Z]/)) ||
      (output[index] === HOURS && values[charCounter].match(/[0-23]/)) ||
      (output[index] === MINUTES && values[charCounter].match(/[0-59]/)) ||
      (output[index] === SECONDS && values[charCounter].match(/[0-59]/))
    ) {
      output[index] = values[charCounter++]
    } else if (
      output[index] === DIGIT ||
      output[index] === ALPHA ||
      output[index] === ALPHANUM ||
      output[index] === HOURS ||
      output[index] === MINUTES ||
      output[index] === SECONDS
    ) {
      if (placeholder !== undefined) {
        return addPlaceholder(output, index, placeholder).join('')
      }
      return output.slice(0, index).join('')

    } else if (output[index] === values[charCounter]) {
      charCounter++
    }
  }
  return output.join('').substr(0, index)
}

function addPlaceholder(
  output: string[],
  index: number,
  placeholder: string
): string[] {
  for (let newIndex = index; newIndex < output.length; newIndex++) {
    if (
      output[newIndex] === DIGIT ||
      output[newIndex] === ALPHA ||
      output[newIndex] === ALPHANUM
    ) {
      output[newIndex] = placeholder
    }
  }
  return output
}