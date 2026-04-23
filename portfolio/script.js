// ハンバーガーメニュー
const span = document.querySelector(".left");
const el = document.querySelectorAll(".left span");
const slideMenu = document.querySelector("header nav ul");
const left = document.querySelectorAll("nav ul li");

span.addEventListener("click", () => {
  span.classList.toggle("open");
  if (span.classList.contains("open")) {
    slideMenu.animate({
      transform: "translateX(0)",
      opacity: 1,
    }, {
      duration: 300,
      fill: "forwards",
    });
    left.forEach((element, index) => {
      element.animate(
        [{
            transform: "translateX(-100vw)",
            opacity: 0,
          },
          {
            transform: "translateX(0)",
            opacity: 1,
          },
        ], {
          duration: 600,
          delay: index * 50,
          fill: "both",
        }
      );
    });
  } else {
    slideMenu.animate({
      transform: "translateX(-100vw)",
    }, {
      duration: 300,
      fill: "forwards",
    });
  }
});

// 画像GALLERY
// const ue = document.querySelector(".topimg img");
// const imgs = document.querySelectorAll(".gallaycontent img");
// // const defaultSrc = top[0].src;

// imgs.forEach(img => {
//     img.addEventListener('click', e => {
//       ue.src = e.target.src
//       ue.animate(
//         [{ opacity: 0 }, { opacity: 1 }],
//         { duration: 500 }
//       )
//     });
//   });


// $('.mein').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });


$('.gallaycontent').slick({
  dots: true,
  arrows: true,

  // 矢印のカスタマイズ
  prevArrow: '<button class="prev"></button>',
  nextArrow: '<button class="next"></button>',

  // サムネイルのカスタマイズ
  customPaging: function (slider, i) {
    return '<img src="./img/room0' + i + '.jpg">';
  }
});
$('.gallaycontentBath').slick({
  dots: true,
  arrows: true,

  // 矢印のカスタマイズ
  prevArrow: '<button class="prev"></button>',
  nextArrow: '<button class="next"></button>',

  // サムネイルのカスタマイズ
  customPaging: function (slider, i) {
    return '<img src="./img/onsen0' + i + '.jpg">';
  }
});



//部屋紹介
$(".room").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
});

// ヘッダー
const header = document.querySelector('header')
const getscroll = () => {
  if (window.scrollY > 1300) {
    header.classList.add('color')
  } else {
    header.classList.remove('color')
  }
};
window.addEventListener('scroll', getscroll)

// スクロールしたらふわっと現れる

const huwas = document.querySelectorAll('.huwa')

const visible = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translateY: ['200px', 0]
  };
  const time = {
    duration: 600,
    delay: 500,
    fill: 'both'
  }
  entries.forEach((entry) => {
    // ↓復習する
    if (!entry.isIntersecting) return;

    entry.target.animate(keyframes, time);
    observer.unobserve(entry.target);
  });
};

const observer = new IntersectionObserver(visible);
huwas.forEach((element) => {
  observer.observe(element)
});