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
      setTheme(DARK_COLOR)
      root.setProperty('--bg-color', BRIGHT_COLOR)
      root.setProperty('--text-color', DARK_COLOR)
      localStorage.setItem('theme', theme)
      return

    default:
      setTheme(BRIGHT_COLOR)
      root.setProperty('--bg-color', DARK_COLOR)
      root.setProperty('--text-color', BRIGHT_COLOR)
      localStorage.setItem('theme', 'dark')
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
