const moreBtn = document.querySelector('.moreBtn');
const infoTitle = document.querySelector('.info-title');

moreBtn.addEventListener('click', e => {
	infoTitle.classList.toggle('line-clamp');
});
