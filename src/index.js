import { formHandler, themeHandler } from './scripts/handlers.js'
import './styles/main.sass'

const themeButton = document.getElementById('theme-handler')
const form = document.getElementById('form')

document.body.onload = () => {
  themeHandler(localStorage.getItem('theme'))
}

themeButton.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'dark') themeHandler('bright')
  else themeHandler('dark')
})

form.addEventListener('submit', (e) => {
  formHandler(e)
})
