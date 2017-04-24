function roundUp(number, howManyDecimalsAfterComma) {
  const = Math.pow(10, howManyDecimalsAfterComma)
  return Math.ceil(number * precision) / precision
}

export {roundUp};
