function fetchData(silteme) {
  return new Promise((resolve, reject) => {
    fetch(silteme)
      .then(natizhe => {
        if (natizhe.ok) {
          resolve(natizhe.json())
        } else {
          reject(new Error('Қате орын алды!'))
        }
      })
      .catch(qate => reject(qate))
  })
}

fetchData('https://jsonplaceholder.typicode.com/users')
  .then(users => {
    showData(users)
  })
  .catch(qate => {
    console.log('Қате орын алды!', qate)
  })

function showData(users) {
  let container = document.createElement('div')
  container.classList.add('user-container')

  users.forEach(user => {
    let userDiv = document.createElement('div')
    let name = document.createElement('h1')
    let email = document.createElement('h2')

    userDiv.classList.add('user')
    name.textContent = 'Name:' + user.name
    email.textContent = 'Email:' + user.email

    userDiv.appendChild(name)
    userDiv.appendChild(email)
    container.appendChild(userDiv)
  })
  document.body.appendChild(container)
  console.log(users)
}
