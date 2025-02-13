const mainScreen = document.getElementById('main')
const yesMessage = document.getElementById('yes-message')
const btnContainer = document.getElementById('btn-container')

const yesBtn = document.getElementById('yes-btn')
const noBtn = document.getElementById('no-btn')
const goBack = document.getElementById('go-back')


mainScreen.classList.toggle('main-hidden')
btnContainer.classList.toggle('btn-reverse')


yesBtn.addEventListener('click', () => {
    mainScreen.classList.toggle('main-hidden')
    yesMessage.classList.toggle('yes-hidden')
})

noBtn.addEventListener('click', () => {
    btnContainer.classList.toggle('btn-reverse')
})

goBack.addEventListener('click', () => {
    mainScreen.classList.toggle('main-hidden')
    yesMessage.classList.toggle('yes-hidden')
})
