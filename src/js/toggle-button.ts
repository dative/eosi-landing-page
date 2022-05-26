const button = document.querySelector('[data-button]')
const closeForm = document.getElementById('close-form')
let formContainer = document.getElementById('form-container')

const formValidate = () => {
  //@ts-ignore
  let form = document.forms["form"];
    if (form['name']['value'] == '') {
      form['name'].classList.remove('border-gray-300')
      form['name'].classList.add('border-emphasis', 'focus:ring', 'focus:ring-emphasis', 'focus:ring-opacity-30')
      alert("the name field is empty")
      return false
    }
    if (form['email']['value'] == '') {
      form['email'].classList.remove('border-gray-300')
      form['email'].classList.add('border-emphasis', 'focus:ring', 'focus:ring-emphasis', 'focus:ring-opacity-30')
      alert("the e-mail field is empty")
      return false
    }
    if (form['phone']['value'] == '') {
      form['phone'].classList.remove('border-gray-300')
      form['phone'].classList.add('border-emphasis', 'focus:ring', 'focus:ring-emphasis', 'focus:ring-opacity-30')
      alert("the phone field is empty")
      return false
    }
    return true
}

const creatMessage = () => {
  let div: HTMLDivElement = document.createElement('div')
  let h2 = document.createElement('h2')
  let p = document.createElement('p')
  h2.innerHTML = "Thank You"
  p.innerHTML = "Your message has been sent. Our team will follow up with you."

  div.classList.add('h-[609px]', 'flex', 'flex-col', 'justify-center', 'items-center')
  h2.classList.add('font-extrabold', 'text-[40px]', 'leading-[45px]', 'text-center', 'mb-[8px]')
  p.classList.add('font-normal', 'text-[22px]', 'leading-[36px]', 'text-gray-700', 'text-center')
  
  div.appendChild(h2)
  div.appendChild(p)

  formContainer?.appendChild(div)
}


const completmodal = () => {
  const isValidate = formValidate()
  if (isValidate == true) {
    closeForm?.classList.add('hidden')
    creatMessage()
  }
}

button?.addEventListener('click',  completmodal)