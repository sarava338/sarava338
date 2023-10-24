const themeButton = document.getElementById('theme-handler')
const form = document.getElementById('form')
const mailerName = document.getElementById('name')
const mail = document.getElementById('mail')
const message = document.getElementById('message')

const root = document.documentElement.style

const DARK_THEME_COLOR = '#333333'
const BRIGHT_THEME_COLOR = '#fffff1'

const errorHandler = (error) => {
  console.error(error)
  alert(error.message)
}

const setTheme = (theme) => {
  switch (theme) {
    case 'bright':
      localStorage.setItem('theme', theme)
      root.setProperty('--bg-color', BRIGHT_THEME_COLOR)
      root.setProperty('--text-color', DARK_THEME_COLOR)
      return

    default:
      localStorage.setItem('theme', 'dark')
      root.setProperty('--bg-color', DARK_THEME_COLOR)
      root.setProperty('--text-color', BRIGHT_THEME_COLOR)
      return
  }
}

const sendMail = (name, mail, message) => {
  console.log(name, mail, message)
}

const formHandler = (e) => {
  e.preventDefault()
  if (mailerName.value && mail.value && message.value) {
    sendMail(mailerName.value, mail.value, message.value)
    mailerName.value = ''
    mail.value = ''
    message.value = ''
  } else errorHandler(new Error('type in all inputs'))
}

document.body.onload = () => {
  setTheme(localStorage.getItem('theme'))
}

themeButton.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'dark') setTheme('bright')
  else setTheme('dark')
})

form.addEventListener('submit', (e) => {
  formHandler(e)
})
