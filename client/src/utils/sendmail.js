import emailjs from '@emailjs/browser'
export const sendemail = (emaildata) => {
  emailjs
    .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emaildata, {
      publicKey: 'YOUR_PUBLIC_KEY',
    })
    .then(
      () => {
        console.log('SUCCESS!')
      },
      (error) => {
        console.log('FAILED...', error.text)
      },
    )
}
