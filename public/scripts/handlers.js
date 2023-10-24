import { sendMail } from "./utils.js"

const mailerName = document.getElementById('name')
const mail = document.getElementById('mail')
const message = document.getElementById('message')

export const errorHandler = (error) => {
  console.error(error)
  alert(error.message)
}

export const formHandler = (e) => {
  e.preventDefault()
  if (mailerName.value && mail.value && message.value) {
    sendMail(mailerName.value, mail.value, message.value)
    mailerName.value = ''
    mail.value = ''
    message.value = ''
  } else errorHandler(new Error('type in all inputs'))
}
