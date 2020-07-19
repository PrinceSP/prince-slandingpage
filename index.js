// let burger = document.querySelector('.burger');
// let navigation = document.querySelector('.menus');
//
// burger.addEventListener('click', () => {
//   navigation.classList.toggle('nav-on');
//   console.log(navigation);
// });


let btnTop = document.querySelector('.to-top');

window.addEventListener('scroll',() => {
  if (window.scrollY > 300) {
    btnTop.style.display = "block";
    btnTop.style.transition = "display 500ms linear";
  }
  else{
    btnTop.style.display = "none";
    btnTop.style.transition = "all 500ms ease-out";
  }
})

btnTop.addEventListener('click', () => {
  window.scrollTo(0,0);
});
