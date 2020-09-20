function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();

  tl.to(".loading-screen", {
    duration: 1,
    height: "100vh",
    bottom: "0%",
    ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
    duration: 1,
    height: "100vh",
    bottom: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
  });
  tl.set(".loading-screen", { bottom: "-100%" });
}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
  barba.init({
    sync: true,

    transitions: [
      {
        //Before the transition, this goes
        async leave(data) {
          const done = this.async();

          pageTransition();
          await delay(1000);
          done();

          $(window).scrollTop(0);

        },

        //after the transition this goes
        async enter(data) {
          contentAnimation();
          //re-init code

          var rellax = new Rellax(".rellax", {
            center: false,
          });

          function bgChanger() {

            var docScroll = $(document).scrollTop(),
            sectionUno = $(".section-uno").offset().top - 300;
            sectionDos = $(".section-dos").offset().top - 300;
            sectionTres = $(".section-tres").offset().top - 300;
            //when rich top of boxex than fire

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

          $('.el-brand, .sbw-btn, .go-home').on('click', function () {
            $('.rem-on-trans-box').remove();
            $('.el-hero-section').css({
              "padding-bottom": "7em"
            });
            $('.el-main-header').fadeOut(500);
          });

          $('.go-home').on('click', function () {
            // $('.rem-on-trans-box').remove();
            // $('.el-hero-section').css({
            //   "padding-bottom": "7em"
            // });
            $('.el-main-header').fadeOut(500);

            $('.section-dos').css({
              "background": "#1f1f1f"
            });
          });

          $('.wrapper').fadeOut();

          $(".el-hero-section").delay(4400).velocity("transition.slideUpIn", 2000);

          $("#preloader")
            .delay(4500)
            .animate({ right: "-100em", opacity: "1" }, 3000, $.bez([0.67, 2, 0.8, 8]));

          $("#preloader-2")
            .delay(4570)
            .animate({ right: "-100em", opacity: "1" }, 3000, $.bez([0.67, 2, 0.8, 8]));

          $(".loading-item")
            .delay(500)
            .fadeIn(1000)
            .delay(1900)
            .animate({ top: "30%", opacity: "0" }, 2000, $.bez([0.19, 1, 0.22, 1]));

          $(".el-brand")
            .delay(4900)
            .animate({ left: "0", opacity: "1" }, 2000, $.bez([0.19, 1, 0.22, 1]));

          $(".burger")
            .delay(5000)
            .animate({ right: "0", opacity: "1" }, 2000, $.bez([0.19, 1, 0.22, 1]));

          $(".hsas-left-box")
            .delay(5200)
            .animate({ left: "0", opacity: "1" }, 2000, $.bez([0.19, 1, 0.22, 1]));

          $(".hsas-right-box")
            .delay(5300)
            .animate({ bottom: "0", opacity: "1" }, 2000, $.bez([0.19, 1, 0.22, 1]));

          $(".hsas-bottom-right-box")
            .delay(5400)
            .animate({ bottom: "-5em", opacity: "1" }, 2000, $.bez([0.19, 1, 0.22, 1]));

          $(".ehc-center-txt").delay(5500).velocity("transition.slideUpIn", 2000);

          // other stuff re-init

          $(".burger").click(function () {
            $(".hmt-blur-box").fadeIn(1000);

            $(".hmt-menu-box")
              .delay(500)
              .animate(
                {
                  right: "0",
                  opacity: "1",
                },
                1000,
                $.bez([0.19, 1, 0.22, 1])
              );

            $(".burger")
              .delay(100)
              .animate(
                {
                  right: "-10em",
                  opacity: "0",
                },
                2000,
                $.bez([0.19, 1, 0.22, 1])
              );

            $(".menu-closer")
              .delay(900)
              .animate(
                {
                  top: "2em",
                  opacity: "1",
                },
                600,
                $.bez([0.19, 1, 0.22, 1])
              );

            $(".el-brand")
              .delay(100)
              .animate(
                {
                  left: "-10em",
                  opacity: "0",
                },
                600,
                $.bez([0.19, 1, 0.22, 1])
              );
          });

          $(".stagger").velocity("transition.slideUpIn", { stagger: 15 });

          $(".burger").on("click", function () {
            $(".stag")
              .hide()
              .delay(1500)
              .velocity("transition.slideUpIn", { stagger: 20 });
          });

          $(".menu-closer").on("click", function () {
            $(".stag").velocity("transition.slideDownOut", { stagger: 20 });
          });

          $(".menu-closer").click(function () {
            $(".hmt-blur-box").delay(1200).fadeOut(2000);

            $(".hmt-menu-box")
              .delay(1000)
              .animate(
                {
                  right: "-100%",
                  opacity: "0",
                },
                2000,
                $.bez([0.19, 1, 0.22, 1])
              );

            $(".menu-closer")
              .delay(100)
              .animate(
                {
                  top: "-10em",
                  opacity: "0",
                },
                2000,
                $.bez([0.19, 1, 0.22, 1])
              );

            $(".burger")
              .delay(900)
              .animate(
                {
                  right: "",
                  opacity: "1",
                },
                600,
                $.bez([0.19, 1, 0.22, 1])
              );

            $(".el-brand")
              .delay(900)
              .animate(
                {
                  left: "",
                  opacity: "1",
                },
                600,
                $.bez([0.19, 1, 0.22, 1])
              );
          });

          $('.sirb-img-wrapper').addClass('siw-re-init');
          $('.tirb-img-wrapper').addClass('tiw-re-init');
          $('.el-divider').addClass('ed-re-init');

          $("#preloader")
            .delay(4500)
            .animate({ right: "-100em", opacity: "1" }, 3000, $.bez([0.67, 2, 0.8, 8]));

          $("#preloader-2")
            .delay(4570)
            .animate({ right: "-100em", opacity: "1" }, 3000, $.bez([0.67, 2, 0.8, 8]));

          $(".loading-item")
            .delay(500)
            .fadeIn(1000)
            .delay(1900)
            .animate({ top: "30%", opacity: "0" }, 2000, $.bez([0.19, 1, 0.22, 1]));
        },


        async once(data) {
          contentAnimation();

        },
      },
    ],
  });
});

