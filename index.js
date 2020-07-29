let btnTop = document.querySelector('.to-top');
let imagesBTN = document.querySelector('.social-icons').children;

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

let imgClicked = ()=>{
  for (var i = 0; i < imagesBTN.length; i++) {
    imagesBTN[0].addEventListener('click',()=>{
      window.location.href = "https://prince-studio.slack.com/ssb/redirect";
    });
    imagesBTN[1].addEventListener('click',(item)=>{
      window.location.href = "https://www.linkedin.com/in/prince-siachin-pasombaran-380426175/";
    });
    imagesBTN[2].addEventListener('click',(item)=>{
      window.location.href = "https://github.com/PrinceSP";
    });
  }
};
imgClicked();
