const buttonCart = document.querySelectorAll('.btn-primary')
const valueCart = document.querySelector('.valueCart')

buttonCart.forEach(el => { //el merupakan sebuah parameter yang berfungsi untuk menampung  nilai atau variabel yang didefinisikan sebagai input atau argumen pada sebuah fungsi. Saat fungsi dipanggil, kita dapat memberikan nilai atau variabel sebagai argumen ke parameter fungsi tersebut
    el.addEventListener('click', () => {
        let totalCart = Number(valueCart.innerText)  //menggunakan properti "innerText" dan mengkonversinya ke tipe data numerik menggunakan fungsi "Number()". Kemudian, nilai tersebut ditampung dalam variabel "totalCart
        totalCart++

        valueCart.innerText = totalCart

    })


})

const btnIcon = document.querySelector('.btnIcon')
btnIcon.addEventListener('click', () => {

    document.body.classList.toggle('darkMode')


})














