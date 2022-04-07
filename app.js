let line1 = document.querySelector('.line-1')
let line2 = document.querySelector('.line-2')

window.onscroll = () => {
    let position = window.scrollY -800
    line1.style.left = `${position}px`
    line2.style.right = `${position}px`
}