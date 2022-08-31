const toggle = document.querySelector('#toggle');
const navbarLeft = document.querySelector('.navbar-left');

toggle.onclick = function(openNavbar){
    navbarLeft.classList.toggle('active');
    toggle.classList.toggle('icon-left');
    
}
// function(openNavbar)