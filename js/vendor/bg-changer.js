function bgChanger() {

  var docScroll = $(document).scrollTop(),

  //about.html
  sectionUno = $(".section-uno").offset().top - 300;
  sectionDos = $(".section-dos").offset().top - 300;
  sectionTres = $(".section-tres").offset().top - 300;
  //when rich top of boxex than fire

  //about.html
  if (docScroll >= sectionUno) {
    document.body.classList.add("bg-active");
  } else {
    document.body.classList.remove("bg-active");
  }

  if (docScroll >= sectionDos) {
    document.body.classList.add("bg-active-dos");
  } else {
    document.body.classList.remove("bg-active-dos");
  }

  if (docScroll >= sectionTres) {
    document.body.classList.add("bg-active-tres");
  } else {
    document.body.classList.remove("bg-active-tres");
  }
}
window.addEventListener("scroll", bgChanger);
