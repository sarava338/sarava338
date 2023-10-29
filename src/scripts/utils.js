import { getSocialMediaData } from './data.js'

const socialMediaElement = document.getElementById('social_media_links')

const themeButton = document.getElementById('theme-handler').children[0]

export const setTheme = (color) => {
  color = color.slice(1)

  color === '333333'
    ? (themeButton.src = `https://img.icons8.com/${color}/ios-filled/25/crescent-moon.png`)
    : (themeButton.src = `https://img.icons8.com/${color}/ios-filled/25/sun.png`)

  socialMediaElement.innerHTML = ''
  getSocialMediaData(color).forEach((data) => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.href = data.url
    a.target = '_blank'
    let img = document.createElement('img')
    img.src = data.src
    a.append(img)
    li.append(a)
    socialMediaElement.append(li)
  })
}

export const sendMail = (name, mail, message) => {
  console.log(name, mail, message)
}
