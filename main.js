const moreBtn = document.querySelector('.moreBtn');
const infoTitle = document.querySelector('.info-title');
const menuBars = document.querySelector('.menu-bars');
const sideMenu = document.querySelector('.side-menu');
const categories = document.querySelector('.categories');

menuBars.addEventListener('click', () => {
	sideMenu.classList.toggle('active');
	categories.classList.toggle('active');
});

moreBtn.addEventListener('click', () => {
	infoTitle.classList.toggle('line-clamp');
});
