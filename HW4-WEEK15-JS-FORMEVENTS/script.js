let form = document.getElementById('forma')
let group = document.getElementById('top')
let inputRange = document.getElementById('inputRange')
let san = document.getElementById('san')
let button = document.getElementById('knopka')

group.addEventListener('change', function () {
  console.log(`Tantalgan top: ${group.value}`)
})

form.addEventListener('submit', function (event) {
  event.preventDefault()

  let comment = document.getElementById('pikir').value
  let paragraph = document.getElementById('errorComment')

  if (comment.length > 15) {
    paragraph.textContent = 'Pikiriniz max 15 sozden quraluy kerek'
  } else {
    paragraph.style.color = 'green'
    paragraph.textContent = 'Sizdin pikiriniz qabyldandy'
  }
})

inputRange.addEventListener('input', function () {
  san.textContent = inputRange.value
})

button.addEventListener('submit', function () {
  console.log(`Top: ${group.value},Pikir ${comment.value}, San ${san.value}`)
})
