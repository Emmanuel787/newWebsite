function onScrollAnim() {

  var docScroll = $(document).scrollTop(),

  firstSection = $(".first-section").offset().top - 5;
  secondSection = $(".second-section").offset().top - 5;
  elDivider = $(".el-divider").offset().top - 5;
  ssAnim = $(".ss-anim").offset().top;
  //when rich top of boxex than fire

  if (docScroll >= firstSection) {
    $('.sirb-img-wrapper').addClass('siw-anim');
    $('.siw-overlay-anim').addClass('soa-anim');
  } else {
  }

  if (docScroll >= secondSection) {
    $('.tirb-img-wrapper').addClass('tiw-anim');
    $('.tiw-overlay-anim').addClass('toa-anim');
  } else {
  }

  if (docScroll >= ssAnim) {
    $('.sirb-img-wrapper-phone').addClass('siw-bg-anim');
    $('.sirb-overlay-phone').addClass('sop-anim');
  } else {
  }


}
window.addEventListener("scroll", onScrollAnim);
