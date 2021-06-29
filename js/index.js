import data from './data.js';

const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const mainNavbar = document.querySelector('.main-navbar');
const memberlist = document.querySelector('.team-members');

menu.addEventListener('click', () => {
  mainNavbar.classList.add('open');
});

close.addEventListener('click', () => {
  mainNavbar.classList.remove('open');
});

data.forEach((member) => {
  memberlist.innerHTML += `<li class="member">
  <div class="member-profile">
    <div class="img-profile">
    <img class="img_1" src=${member.profile} alt="" />
    </div>
    <img class="img_2" src="/Images/grid.jpg" alt="" />
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