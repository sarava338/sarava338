import { BRIGHT_COLOR, DARK_COLOR } from './constants.js'
import { sendMail, setTheme } from './utils.js'

const root = document.documentElement.style

const mailerName = document.getElementById('name')
const mail = document.getElementById('mail')
const message = document.getElementById('message')

export const errorHandler = (error) => {
  console.error(error)
  alert(error.message)
}

export const themeHandler = (theme) => {
  switch (theme) {
    case 'bright':
      localStorage.setItem('theme', theme)
      root.setProperty('--bg-color', BRIGHT_COLOR)
      root.setProperty('--text-color', DARK_COLOR)
      setTheme(DARK_COLOR)
      return

    default:
      localStorage.setItem('theme', 'dark')
      root.setProperty('--bg-color', DARK_COLOR)
      root.setProperty('--text-color', BRIGHT_COLOR)
      setTheme(BRIGHT_COLOR)
      return
  }
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
