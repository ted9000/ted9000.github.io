const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

document.querySelectorAll('.image__container img').forEach(image =>{ 
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block'; 
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    } 
});
    
document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}