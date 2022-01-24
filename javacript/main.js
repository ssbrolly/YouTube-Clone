// Side Menu Toggle //
const menuBars = document.querySelector('.menu-bars');
const sideMenu = document.querySelector('.side-menu');

// Categories //
const categories = document.querySelector('.categories');

// Videos //
const videoSelect = document.querySelector('.videos');

// Horizontal scrolling //
const categoriesUl = document.querySelector('.categories-ul');

// Video //
const videoList = document.querySelector('.videos-list');

//////////////////////// Functions ////////////////////////////

// Side Menu Onclick event //
menuBars.addEventListener('click', () => {
	sideMenu.classList.toggle('active');
	categories.classList.toggle('active');
});

// Categories side scrolling event //
categoriesUl.addEventListener('wheel', e => {
	e.preventDefault();
	categoriesUl.scrollLeft += e.deltaY;
});

// Categories position: relative when mouseover event//
categories.addEventListener('mouseover', e => {
	console.log(e);
	categories.classList.add('relative');
	videoSelect.style.marginTop = '.5rem';
});

// Video object and insertAdjacentHTML //
const videos = [
	{
		user: 'U',
		title: 'Launching of Rockets',
		name: 'Rockets Tube',
		src: 'video/Launching Of Rocket.mp4',
		views: '136k views',
		dot: '.',
		time: '5 weeks ago',
		href: 'city.html',
	},

	{
		user: 'D',
		title: 'Coral Reefs',
		name: 'Reef Tube',
		src: 'video/Pexels Videos 1151269.mp4',
		views: '100k views',
		dot: '.',
		time: '10 weeks ago',
		href: 'city.html',
	},

	{
		user: 'S',
		title: 'Green Fish',
		name: 'Green Fish Tube',
		src: 'video/Pexels Videos 1151329.mp4',
		views: '80k views',
		dot: '.',
		time: '1 weeks ago',
		href: 'city.html',
	},

	{
		user: 'S',
		title: 'Whale Shark',
		name: 'Whale Shark Tube',
		src: 'video/Pexels Videos 1669815.mp4',
		views: '11k views',
		dot: '.',
		time: '3 weeks ago',
		href: 'city.html',
	},

	{
		user: 'E',
		title: 'City',
		name: 'City Tube',
		src: 'video/pexels-kelly-lacy-9722139.mp4',
		views: '12k views',
		dot: '.',
		time: '1 weeks ago',
		href: 'city.html',
	},
];

const videoHTML = videos => {
	const html = `
        <li class="video-li">
            <a href="${videos.href}" class="video-info">
                <video muted="muted" class="video" src="${videos.src}"></video>
                <div class="channel-text">
                    <span class="user">${videos.user}</span>
                    <div class="channel-info">
                        <span class="title">${videos.title}</span>
                        <span class="name">${videos.name}</span>
                        <div class="views-days">
                            <span class="views">${videos.views}</span>
                            <span class="dot">·</span>
                            <span class="time">${videos.time}</span>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    `;
	videoList.insertAdjacentHTML('beforeend', html);
};

const videoDisplay = number => {
	for (let i = 1; i <= number; i++) {
		const int = Math.round(Math.random() * 4);
		videoHTML(videos[int]);
	}
};

videoDisplay(20);

// Video hover event //
const videoLi = document.querySelectorAll('.video-li');

videoLi.forEach(el => {
	el.addEventListener('mouseover', e => {
		el.classList.add('hover');
		const elVideo = el.children[0].children[0];

		setTimeout(() => {
			if (el.classList.contains('hover')) {
				elVideo.setAttribute('controls', true);
				elVideo.play();
			}
		}, 1200);
	});
});

videoLi.forEach(el => {
	el.addEventListener('mouseout', e => {
		el.classList.remove('hover');
		const elVideo = el.children[0].children[0];
		elVideo.removeAttribute('controls', false);
		elVideo.pause();
		elVideo.currentTime = 0;
	});
});
