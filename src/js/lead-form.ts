const leadForm = (() => {

  const RECAPTCHA_CLASS = 'g-recaptcha'

  let _form: HTMLFormElement | null = null

  const _handleSuccess = () => {

    _form?.addEventListener('transitionend', () => {
      _form?.previousElementSibling?.classList.replace('max-h-0', 'max-h-[600px]')
      _form?.previousElementSibling?.classList.replace('opacity-0', 'opacity-100')
    })

    _form?.previousElementSibling?.addEventListener('transitionend', () => {
      _form?.remove()
    })

    _form?.classList.replace('max-h-[600px]', 'max-h-0')
    _form?.classList.replace('opacity-100', 'opacity-0')

  }

  const _renderReCaptchaError = (error?: Error) => {
    const recaptcha = document.querySelector(`.${RECAPTCHA_CLASS}:first-child > div`)

    if (recaptcha && error !== undefined) return recaptcha?.classList.add('border','border-emphasis', 'rounded')
    return recaptcha?.classList.remove('border','border-emphasis', 'rounded')
  }

  const _handleError = (error: Error) => {
    switch (error.message) {
      case "grecaptcha is not defined":
        _renderReCaptchaError(error)
        break;
      case "grecaptcha is not completed":
        _renderReCaptchaError(error)
        break;

      default:
        console.error(error);

        break;
    }
  }

  const _handleSubmit = async (e: Event) => {

    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)

    if (_form && _form?.action.length > 0) {
      try {

        if (grecaptcha === undefined) {
          throw new Error('grecaptcha is not defined')
        }

        if (grecaptcha.getResponse() == "") {
          throw new Error('grecaptcha is not completed')
        }

        _renderReCaptchaError()

        const response = await fetch(_form?.action, {
          method: 'POST',
          body: formData,
        })

        if (response.ok) {
          _handleSuccess()
        }
      } catch (error) {
        _handleError(error as Error)
      }
    }

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
