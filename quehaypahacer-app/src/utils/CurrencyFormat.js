
export const currencyFormat = (value, locale = "es-CO", currency = "COP") =>{
  if(isNaN(value)) {
    return "0"
  }

  const converFormat = new Intl.NumberFormat(locale, {
      style:"currency",
      currency,
      minimumFractionDigits:0
    })
    return converFormat.format(value)
}
