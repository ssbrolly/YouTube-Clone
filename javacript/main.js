// Side Menu Toggle //
const menuBars = document.querySelector('.menu-bars');
const sideMenu = document.querySelector('.side-menu');
const categories = document.querySelector('.categories');

// Horizontal scrolling //
const categoriesUl = document.querySelector('.categories-ul');

// Video //
const videos = document.querySelector('.videos');

menuBars.addEventListener('click', () => {
	sideMenu.classList.toggle('active');
	categories.classList.toggle('active');
});

// categories.addEventListener('mouseover', e => {
// 	e.preventDefault();
// 	categories.style.position = 'inherit';
// 	videos.style.marginTop = '0rem';
// });

// categories.addEventListener('mouseleave', e => {
// 	e.preventDefault();
// 	categories.style.position = 'fixed';
// 	// video.style.marginTop = '5.6rem';
// });

categoriesUl.addEventListener('wheel', e => {
	e.preventDefault();
	categoriesUl.scrollLeft += e.deltaY;
	// if (e) {
	// 	categories.style.position = 'fixed';
	// }
	// categories.style.position = 'inherit';
});
