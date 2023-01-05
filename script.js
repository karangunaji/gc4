let searchCont = document.querySelector('.search-cont');

document.querySelector('#search-btn').onclick = () =>{
    searchCont.classList.toggle('active')
    navBar.classList.remove('show-nav')
    shooPing.classList.remove('active-2')
    user.classList.remove('active-3')

}



let shooPing = document.querySelector('.shooping');

document.querySelector('#cart-btn').onclick = () =>{
    shooPing.classList.toggle('active-2')
    searchCont.classList.remove('active')
    user.classList.remove('active-3')
    navBar.classList.remove('show-nav')
}


let user = document.querySelector('.user');

document.querySelector('#login-btn').onclick = () =>{
    user.classList.toggle('active-3')
    searchCont.classList.remove('active')
    shooPing.classList.remove('active-2')
    navBar.classList.remove('show-nav')
  
}

window.onscroll = () => {
    searchCont.classList.remove('active')
    shooPing.classList.remove('active-2')
    user.classList.remove('active-3')
    navBar.classList.remove('show-nav')

}

let navBar = document.querySelector('.navlinks ');

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('show-nav')
    searchCont.classList.remove('active')
    shooPing.classList.remove('active-2')
    user.classList.remove('active-3')

}

