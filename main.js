const userEmail= document.querySelector('.navbar-email')
const profileMenu= document.querySelector('.desktop-menu')

userEmail.addEventListener('click', toogleProfileMenu)

function toogleProfileMenu(){
    profileMenu.classList.toggle('inactive')
}