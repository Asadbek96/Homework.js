let num = +prompt('San engiz: ')
let i = 1
let kishisan = 0
let ulkensan = 0

while (num <= 0) {
  alert('on san engiz')
  break
}

while (i <= num) {
  if (i % 5 == 0) {
    if (kishisan == 0) {
      kishisan = i
    }
    ulkensan = i
  }
  i++
}
alert(`En kishi 5-ke bolinetin san: ${kishisan}`)
alert(`En ulken 5-ke bolinetin san: ${ulkensan}`)




