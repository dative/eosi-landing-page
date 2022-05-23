const leadForm = (() => {

  let _form: HTMLFormElement|null = null

  const _handleSuccess = () => {

    _form?.addEventListener('transitionend', () => {
      _form?.previousElementSibling?.classList.replace('max-h-0', 'max-h-[600px]')
      // _form?.remove()
    })

    _form?.previousElementSibling?.addEventListener('transitionend', () => {
      _form?.remove()
    })

    _form?.classList.replace('max-h-[600px]', 'max-h-0')

  }

  const _handleSubmit = (e: Event) => {

    e.preventDefault()

    _handleSuccess()

  }

  const init = ( selector: string ) => {
    const el = document.querySelectorAll( selector );

    if (el?.length > 0) {
      _form = el[0] as HTMLFormElement
      _form.addEventListener('submit', _handleSubmit)
    }
  }

  init('form')

})();

export default leadForm
