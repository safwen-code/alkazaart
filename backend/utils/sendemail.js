import nodemailer from 'nodemailer'
// Function to send email using nodemailer
export const sendEmailToSupplier = async (to, subject, text) => {
  // Configure the email transporter (you need to replace the placeholders with your actual email details)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'safwendjebbi1234@gmail.com',
      pass: 'qwaj tpjl bpcy rdls',
    },
  })

  // Configure the email options
  const mailOptions = {
    from: 'safwendjebbi1234@gmail.com',
    to,
    subject,
    text,
  }

  // Send the email
  await transporter.sendMail(mailOptions)
}
