/* config menu responsivo */

const menuHamburger = document.getElementById("menu-hamburger")
const menu = document.getElementById("menu")
const nav = document.querySelector('.nav')

const menuResponsive = () =>{
      nav.classList.toggle('active');
}

menuHamburger.addEventListener('click', () => menuResponsive())

document.addEventListener('click', (event) =>{
    const clickInMenu = nav.contains(event.target);
    const clickoutMenu = menuHamburger.contains(event.target)
    if(!clickInMenu && !clickoutMenu){
        nav.classList.remove("active")
    } 

});















