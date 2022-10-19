// header 앱 다움로드 드롭다운
const dropBtn = document.querySelector('.dropdown');
const dropdownConEl = document.querySelector('.dropdown .dropdown-sub');

let isHideDropdown = true;
dropdownConEl.classList.add('hide');

dropBtn.addEventListener('click', function () {
  isHideDropdown = !isHideDropdown;
  if (isHideDropdown) {
    dropdownConEl.classList.add('hide');
  } else {
    dropdownConEl.classList.remove('hide');
  }
});

// header menu hover 지우기
const blurContents = document.querySelectorAll('.item__contents');
const blurName = document.querySelectorAll('.no__hover');

for (let a = 0; a < blurName.length; a++) {
  blurContents[a].addEventListener('mouseover', function () {
    blurName[a].classList.add('hide');
  });
  blurContents[a].addEventListener('mouseout', function () {
    blurName[a].classList.remove('hide');
  });
}

// card ranking swiper
const swiper = new Swiper('.ranking-bg .swiper', {
  direction: 'vertical',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: false
});

const cardRank = document.querySelector('.ranking-bg .swiper-wrapper');
const cardRankAll = document.querySelector('.ranking-bg .swiper');

cardRank.addEventListener('mouseover', function () {
  swiper.slideTo(0, 0, false);
  cardRankAll.classList.add('focus');
  swiper.autoplay.stop();
});
cardRank.addEventListener('mouseout', function () {
  cardRankAll.classList.remove('focus');
  swiper.autoplay.start();
});

// visual swiper
new Swiper('.visual .swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: false,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.visual .swiper-pagination',
    clickable: true
  }
});

// pick swiper
const swiperContents = document.querySelectorAll('.pick--contents .swiper');
const swiperBtnPrev = document.querySelectorAll('.pick--contents .swiper-prev');
const swiperBtnNext = document.querySelectorAll('.pick--contents .swiper-next');

for (let i = 0; i < swiperContents.length; i++) {
  if (i !== 0 && i !== 3) {
    new Swiper(swiperContents[i], {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      navigation: {
        prevEl: swiperBtnPrev[i],
        nextEl: swiperBtnNext[i]
      }
    });
  }
}

// review tab
const reviewsTab = document.getElementsByName('reviews');
const reviewClick = document.querySelectorAll('.bank--review .tabs--btn');
const reviewContents = document.getElementsByName('review--tab');


for (let p = 0; p < reviewsTab.length; p++) {
  reviewClick[p].addEventListener('click', function () {
    reviewsTab[p].checked = true;
    reviewContents[p].checked = true;
  });
}

// tip tab
const tipsTab = document.getElementsByName('tips');
const tipClick = document.querySelectorAll('.bank--tip .tabs--btn');
const tipContents = document.getElementsByName('tips--tab');


for (let n = 0; n < tipsTab.length; n++) {
  tipClick[n].addEventListener('click', function () {
    tipsTab[n].checked = true;
    tipContents[n].checked = true;
  });
}
