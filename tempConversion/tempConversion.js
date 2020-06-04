const ftoc = function(fah) {
  let cel =  Math.round(((fah - 32) * 5/9) * 10) / 10;
  return cel;
}

const ctof = function(cel) {
  let fah = Math.round(((cel * 9/5) + 32) * 10) / 10;
  return fah;
}

module.exports = {
  ftoc,
  ctof
}
