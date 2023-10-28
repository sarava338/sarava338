import { formHandler } from './scripts/handlers.js'
import { setTheme } from './scripts/utils.js'
import './styles/main.sass'

const themeButton = document.getElementById('theme-handler')
const form = document.getElementById('form')

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
