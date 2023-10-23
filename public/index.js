const themeHandler = document.getElementById('theme-handler')
const root = document.documentElement.style

const DARK_THEME_COLOR = '#333333'
const BRIGHT_THEME_COLOR = '#fffff1'

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

document.body.onload = () => {
  setTheme(localStorage.getItem('theme'))
}

themeHandler.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'dark') setTheme('bright')
  else setTheme('dark')
})
