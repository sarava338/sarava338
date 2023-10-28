import { DARK_THEME_COLOR, BRIGHT_THEME_COLOR } from './constants.js'

const root = document.documentElement.style

export const setTheme = (theme) => {
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

export const sendMail = (name, mail, message) => {
  console.log(name, mail, message)
}
