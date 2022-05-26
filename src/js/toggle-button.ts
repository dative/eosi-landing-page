const button = document.querySelector('[data-button]')
const closeForm = document.getElementById('close-form')
let formContainer = document.getElementById('form-container')

const completmodal = () => {
  closeForm?.classList.add('hidden')
  creatMessage()
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


button?.addEventListener('click',  completmodal)