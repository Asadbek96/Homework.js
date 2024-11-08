// let num = prompt('0 мен 99 арасындағы санды енгізіңіз:')

// if (num >= 0 && num <= 9) {
//   alert('Сан:' + num)
// }
// else if (num >= 10 && num <= 99) {
//   let firstNum = Math.floor(num / 10);
//   let secondNum = (num % 10)
//   alert('Бірінші сан:' + firstNum + '\n' + 'Екінші сан:' + secondNum);
// }
// else {
//   alert('Тек 0 мен 99 арасындағы санды енгізіңіз.');
// }






// let burger = prompt('Бургер турын жаз:')
// let shtuk = +prompt('Канша штук')
// let sum = 0
// switch (burger) {
//   case 'Гамбургер':
//     sum += 1090
//     break
//   case 'Чизбургер':
//     sum += 1290
//     break
//   case 'Даблчизбургер':
//     sum += 1390
//     break
//   default:
//     alert('Сыз бургерды тандамадынныз кaйта тандауынызды сураймын')
// }
// alert(
//   'Сыздын заказ кабылданды' +
//     '\n' +
//     'Бургер туры:' +
//     burger +
//     '\n' +
//     'Суммасы:' +
//     sum * shtuk
// )




let susyn = prompt('Cусын түрін таңдаңыз: кофе/чай/су')

switch (susyn) {
  case 'кофе':
    alert('Қандай кофе түрін таңдайсыз: карамель/шоколодный')
    break;
  case 'карамель':
    prompt('Cіз кофе таңдадыңыз' + '\n' + 'Түрі:карамель')
    break;
  case 'шоколодный':
    prompt('Cіз кофе таңдадыңыз' + '\n' + 'Түрі:шоколодный')
    break

  default:
    alert('Бізде бұндай кофе түрі жоқ')
}
switch (susyn) {
  case 'чай':
    alert('Қандай чай түрін таңдайсыз: сүт/көк')
    break;
  case 'карамель':
    prompt('Cіз көк таңдадыңыз' + '\n' + 'Түрі:карамель')
    break;
  case 'шоколодный':
    prompt('Cіз сүт таңдадыңыз' + '\n' + 'Түрі:шоколодный')
    break

  default:
    alert('Бізде бұндай кофе түрі жоқ')
}







// let san = +prompt('San engiz:')

// if(san>=10 && san<=90){
//   let birinshi = parseInt(san/10)
//   let ekinshi = san % 10
//   alert('first number:' + birinshi +
//     '\n' + 'Second:' + ekinshi)
// }
// else if(san>=0 && san<=9){
//   alert('Engizgen san' + san)
// }
// else{
//   alert('Sandy gate engiz 0-99')
// }







// let burger = prompt("Бургер турын жаз:" )
// let shtuk = +prompt("Канша штук")
// let sum = 0;
// if (burger == "Гамбургер"  burger == "гамбургер") {
//     sum += 1090
// }
// else if (burger == "Чизбургер"  burger == "чизбургер") {
//     sum += 1190
// }
// else if (burger == "Двойной бургер" || burger == "двойной бургер") {
//     sum += 1990
// }
// else {
//     alert("Сыз бургерды тандамадынныз кaйта тандауынызды сураймын")
// }
// alert("Сыздын заказ кабылданды" + '\n' + "Бургер туры: " + burger + '\n' + "Суммасы: " + sum * shtuk)


