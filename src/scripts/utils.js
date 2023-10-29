import { DARK_COLOR, BRIGHT_COLOR } from './constants.js'

const socialMediaElements =
  document.getElementsByClassName('social_media_links')

const themeButton = document.getElementById('theme-handler').children[0]

export const setTheme = (color) => {
  color = color.slice(1)
  const size = '50'
  //https://icons8.com/
  const socialMediaIcons = [
    `https://img.icons8.com/${color}/ios-filled/${size}/telegram.png`,
    `https://img.icons8.com/${color}/ios-filled/${size}/instagram-new--v1.png`,
    `https://img.icons8.com/${color}/ios-filled/${size}/linkedin.png`,
    `https://img.icons8.com/${color}/external-tal-revivo-bold-tal-revivo/${size}/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo.png`,
    `https://img.icons8.com/color/${size}/GeeksforGeeks.png`,
    `https://img.icons8.com/${color}/ios-filled/${size}/github.png`,
    `https://img.icons8.com/${color}/ios-filled/${size}/facebook-new.png`,
    `https://img.icons8.com/${color}/ios-filled/${size}/youtube-play.png`,
    `https://img.icons8.com/${color}/ios-filled/${size}/coffee-to-go.png`,
  ]

  color === '333333'
    ? (themeButton.src = `https://img.icons8.com/${color}/ios-filled/25/crescent-moon.png`)
    : (themeButton.src = `https://img.icons8.com/${color}/ios-filled/25/sun.png`)

  for (let i = 0; i < socialMediaIcons.length; i++) {
    socialMediaElements[i].src = socialMediaIcons[i]
  }
}

export const sendMail = (name, mail, message) => {
  console.log(name, mail, message)
}
