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