console.log('Hello World!!!')

const messageCard = document.getElementById('messageCard')
const buttonMessage = document.getElementById('btnCard')
const messageSent = document.getElementById('messageSent')

  buttonMessage!.addEventListener('click', sendMessage)

//
function sendMessage() {
    if (messageCard!.style.display === 'none') {
      messageCard!.style.display = 'flex'
    } else {
      messageSent!.style.display = 'flex'
      messageCard!.style.display = 'none'
  }
}
