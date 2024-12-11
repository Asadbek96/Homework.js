let taqyryp = document.querySelector('#title')
taqyryp.textContent = 'HW: Introduction to DOM'

let name = document.getElementById('name')
name.textContent = 'Asadbek'

let hobbies = document.getElementsByClassName('hobby')
hobbies[0].innerHTML = '<b>Codding</b>.'
hobbies[1].innerHTML = '<b>Drawing</b>.'
hobbies[2].innerHTML = '<b>Writing</b>.'
