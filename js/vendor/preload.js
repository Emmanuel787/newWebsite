/********** Preload stuff **********/

// Preload images
const preloadImages = () => {
  return new Promise((resolve, reject) => {
    imagesLoaded(document.querySelectorAll('.pre__img'), { background: true }, resolve);
  });
};

// And then..
preloadImages().then(() => {
  //
});
