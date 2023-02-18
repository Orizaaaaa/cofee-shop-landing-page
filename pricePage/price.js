const buttonCart = document.querySelectorAll('.btn-primary')
const valueCart = document.querySelector('.valueCart')

buttonCart.forEach(el => {
    el.addEventListener('click', () => {
        let totalCart = Number(valueCart.innerText)
        totalCart++

        valueCart.innerText = totalCart

    })


})


const btnIcon = document.querySelector('.btnIcon')
btnIcon.addEventListener('click', () => {

    document.body.classList.toggle('darkMode')


})














