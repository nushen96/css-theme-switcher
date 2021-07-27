const themeButton = document.querySelector(".theme-icon")
themeButton.addEventListener('click', function(e) {
    e.preventDefault()
    switchTheme()
})

function switchTheme() {
    const containerElement = document.querySelector(".container")
    if(containerElement.classList.contains('container-dark')) {
        containerElement.classList.remove('container-dark')
        themeButton.classList.remove('uil-sun')
        themeButton.classList.add('uil-moon')
    } else {
        containerElement.classList.add('container-dark')
        themeButton.classList.remove('uil-moon')
        themeButton.classList.add('uil-sun')
    }
}