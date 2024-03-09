const darkButton = document.querySelector('#dark')
const lightButton = document.querySelector('#light')

const setColorMode = () => {
  if (localStorage.getItem('colorMode') === 'dark') {
    setDarkMode()
  } else {
    setLightMode()
  }
}

const setDarkMode = () => {
  document.querySelector('body').classList = 'dark'
  localStorage.setItem('colorMode', 'dark')
}

const setLightMode = () => {
  document.querySelector('body').classList = 'light'
  localStorage.setItem('colorMode', 'light')
}

const colorModeFormLocalStorage = () => {
  return localStorage.getItem('colorMode')
}

const colorModeFromPreference = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const loadAndUpdateColor = () => {
  const color = colorModeFormLocalStorage() || colorModeFromPreference()
  color === 'dark' ? setDarkMode() : setLightMode()
}

const radioButtons = document.querySelectorAll('.toggle__wrapper input')
radioButtons.forEach(radio => {
  radio.addEventListener('click', () => darkButton.checked ? setDarkMode() : setLightMode())
})


window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', e => {
    e.matches ? setDarkMode() : setLightMode()
  })
