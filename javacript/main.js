// Side Menu Toggle //
const menuBars = document.querySelector('.menu-bars');
const sideMenu = document.querySelector('.side-menu');
const categories = document.querySelector('.categories');

// Horizontal scrolling //
const categoriesUl = document.querySelector('.categories-ul');

menuBars.addEventListener('click', () => {
	sideMenu.classList.toggle('active');
	categories.classList.toggle('active');
});

categoriesUl.addEventListener('wheel', e => {
	e.preventDefault();
	categoriesUl.scrollLeft += e.deltaY;
});
