export function unMask(value: string, type: 'custom' | 'currency' = 'custom') {
  if (type === 'currency') {
    if (!value) return '0'

    const unMaskedValue = value.replace(/\D/g, '')
    const number = parseInt(unMaskedValue.trim())

    return number.toString()
  }

  return value.replace(/\W/g, '')
}