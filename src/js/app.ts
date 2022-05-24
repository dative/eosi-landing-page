console.log('Hello World!!!')

const buttonMessage = document.getElementById('messageCard')
const messageSent = document.getElementById('messageSent')

if (buttonMessage != null) {
  buttonMessage.addEventListener('click', sendMessage)
}

function sendMessage() {
  if (buttonMessage != null && messageSent != null) {
    if (buttonMessage.style.display === 'none') {
      buttonMessage.style.display = 'flex'
    } else {
      messageSent.style.display = 'flex'
      buttonMessage.style.display = 'none'
    }
  }
}
