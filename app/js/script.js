const radioButtons = document.querySelectorAll('.toggle__wrapper input')
console.log(radioButtons);

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('click', () => {
    document.querySelector('#dark').checked
      ? (document.querySelector('body').classList = 'dark')
      : (document.querySelector('body').classList = 'light')
  })

}
