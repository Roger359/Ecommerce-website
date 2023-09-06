// toggle menu variables
const menuButton = document.querySelector('.trigger'),
closeButton = document.querySelector('.t-close'),
addclass = document.querySelector('.site')

// copy menu for mobile

function copyMenu() {
  //copy inside .dpt-cat class to department class
  let dptCategory = document.querySelector(".dpt-cat");
  let dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  //copy inside nav to nav

  let mainNav = document.querySelector(".header-nav nav");
  let navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  //copy .header-top .wrapper to .thetop-nav
  let topNav = document.querySelector(".header-top .wrapper");
  let topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();


// show mobile menu
menuButton.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
})

closeButton.addEventListener('click', function(){
    addclass.classList.remove('showmenu')
})

//show sub menu on mobile
const submenu = document.querySelectorAll(".has-child .icon-small");

submenu.forEach((menu) => menu.addEventListener("click", toggle));

// Why the function dont execute like a expresive function
function toggle(e){
  e.preventDefault();

  // TODO need help to understand this 
  submenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  
  if (this.closest(".has-child").classList != "expand");
  this.closest(".has-child").classList.toggle("expand");
};

