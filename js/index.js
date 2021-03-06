import data from './data.js';

const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const mainNavbar = document.querySelector('.main-navbar');
const memberlist = document.querySelector('.team-members');
const navLink = document.querySelectorAll('.nav-list .nav-link a');
Array.from(navLink).forEach((item) => {
  item.addEventListener('click', () => {
    mainNavbar.classList.remove('open');
    mainNavbar.classList.add('backg');
  });
});

menu.addEventListener('click', () => {
  mainNavbar.classList.add('open');
  mainNavbar.classList.remove('backg');
});

close.addEventListener('click', () => {
  mainNavbar.classList.remove('open');
  mainNavbar.classList.add('backg');
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    mainNavbar.classList.add('backg');
  } else {
    mainNavbar.classList.remove('backg');
  }
});

data.forEach((member) => {
  memberlist.innerHTML += `<li class="member">
  <div class="member-profile">
    <div class="img-profile">
    <img class="img_1" src=${member.profile} alt="" />
    </div>
    <img class="img_2" src="images/grid.jpg" alt="" />
  </div>
  <div class="about-member">
    <h2 class="name">${member.memberName}</h2>
    <i
      >${member.about}</i
    >
    <p class="member-detail">${member.work}</p>
  </div>
</li>`;
});

const memberList = document.querySelectorAll('.member');
const btn = document.querySelector('.see-more .btn');
let state = true;

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (state) {
    Array.from(memberList).forEach((member) => {
      member.classList.add('show');
      btn.innerHTML = '<span>Hide</span><span><i class="fa fa-chevron-up"></i></span>';
    });
    state = false;
  } else {
    state = false;
    Array.from(memberList).forEach((member) => {
      member.classList.remove('show');
      btn.innerHTML = '<span>More</span><span><i class="fa fa-chevron-down"></i></span>';
    });
    state = true;
  }
});
