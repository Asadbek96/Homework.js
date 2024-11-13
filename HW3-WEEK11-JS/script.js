let san = +prompt('Studentter sanyn engiziniz:')
let i = 1
let sum = 0

while (i <= san) {
  let bagalary = +prompt(i + ' - studenttin bagasyn engyziniz')
  sum = sum + bagalary
  i++
}
let mani = sum / san
alert('Studentterdin bagalarynyn ortasha mani: ' + mani)
