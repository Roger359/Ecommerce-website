// copy menu for mobile

function copyMenu(){
    //copy inside .dpt-cat class to department class
    let dptCategory = document.querySelector('.dpt-cat')
    let dptPlace = document.querySelector('.departments')
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav

    let mainNav = document.querySelector('.header-nav nav');
    let navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    let topNav = document.querySelector('.header-top')
    let topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML;



}

copyMenu()