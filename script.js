document.querySelector('.menu-img').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
})

const icons = document.querySelectorAll('.heading-icons img')
let i = 1

setInterval(() => {
    i++

    const icon = document.querySelector('.heading-icons .change')

    icon.classList.remove('change')

    if(i > icons.length) {
        icons[0].classList.add('change')
        i = 1
    }else {
        icon.nextElementSibling.classList.add('change')
    }
},3000)