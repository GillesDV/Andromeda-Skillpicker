function roundUp(number, howManyDecimalsAfterComma) {
  const precision = Math.pow(10, howManyDecimalsAfterComma)
  return Math.ceil(number * precision) / precision
}

export {roundUp};
