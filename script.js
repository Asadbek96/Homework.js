let startBtn = document.getElementById('startBtn')
let message = document.getElementById('message')
let san = 5
let interval = null
startBtn.addEventListener('click', () => {
  clearInterval(interval)
  san = 5
  message.style.visibility = 'visible'
  message.textContent = `Хабарлама аяқталуына ${san}`

  interval = setInterval(() => {
    message.style.visibility = 'visible'
    san--
    message.textContent = `Хабарлама аяқталуына ${san}`
    if (san <= 0) {
      clearInterval(interval)
      message.textContent = 'Хабарлама аяқталды!😊⌛'
    }
  }, 1000)
})
