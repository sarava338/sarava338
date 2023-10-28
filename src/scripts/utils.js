import { DARK_COLOR, BRIGHT_COLOR } from './constants.js'

const root = document.documentElement.style
const socialMediaElements =
  document.getElementsByClassName('social_media_links')

const setSocialMediaIconColor = (color) => {
  color = color.slice(1)
  const size = '50'
  //https://icons8.com/
  const socialMediaIcons = [
    `https://img.icons8.com/${color}/ios-filled/${size}/telegram.png`,
    `https://img.icons8.com/${color}/ios-filled/${size}/instagram-new--v1.png`,
    `https://img.icons8.com/${color}/ios-filled/${size}/linkedin.png`,
    `https://img.icons8.com/${color}/ios-filled/${size}/github.png`,
    `https://img.icons8.com/${color}/ios-filled/${size}/facebook-new.png`,
    `https://img.icons8.com/${color}/ios-filled/${size}/youtube-play.png`,
    `https://img.icons8.com/${color}/ios-filled/${size}/coffee-to-go.png`,
  ]

  for (let i = 0; i < socialMediaIcons.length; i++) {
    socialMediaElements[i].src = socialMediaIcons[i]
  }
}

export const setTheme = (theme) => {
  switch (theme) {
    case 'bright':
      localStorage.setItem('theme', theme)
      root.setProperty('--bg-color', BRIGHT_COLOR)
      root.setProperty('--text-color', DARK_COLOR)
      setSocialMediaIconColor(DARK_COLOR)
      return

    default:
      localStorage.setItem('theme', 'dark')
      root.setProperty('--bg-color', DARK_COLOR)
      root.setProperty('--text-color', BRIGHT_COLOR)
      setSocialMediaIconColor(BRIGHT_COLOR)
      return
  }
}

export const sendMail = (name, mail, message) => {
  console.log(name, mail, message)
}
