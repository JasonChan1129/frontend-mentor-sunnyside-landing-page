const setHeaderImageHeight = () => {
	const header = document.querySelector('header');
	let headerImageHeight;
	if (window.innerWidth < 550) {
		headerImageHeight = (1076 * window.innerWidth) / 756;
	} else {
		headerImageHeight = (1600 * window.innerWidth) / 2880;
	}
	header.style.height = `${headerImageHeight}px`;
};

const setHeaderContentPosition = () => {
	const header = document.querySelector('header');
	const headerHeight = header.clientHeight;
	const heading = document.querySelector('.H1-text');
	const arrowDown = document.querySelector('.arrow-down');
	const marginTopHeading = `${+headerHeight * 0.2}px`;
	const marginTopArrow = `${+headerHeight * 0.47}px`;
	heading.style.top = marginTopHeading;
	arrowDown.style.top = marginTopArrow;
};

const showModal = () => {
	const humburger = document.querySelector('.nav-hamburger');
	const modal = document.querySelector('.nav-modal');
	const backdrop = document.querySelector('.backdrop');
	humburger.onclick = () => {
		modal.style.display = 'block';
		backdrop.style.display = 'block';
	};
};

const hideModal = () => {
	const modal = document.querySelector('.nav-modal');
	const backdrop = document.querySelector('.backdrop');
	backdrop.onclick = () => {
		modal.style.display = 'none';
		backdrop.style.display = 'none';
	};
};

document.addEventListener('DOMContentLoaded', setHeaderImageHeight);
document.addEventListener('DOMContentLoaded', setHeaderContentPosition);
document.addEventListener('DOMContentLoaded', showModal);
document.addEventListener('DOMContentLoaded', hideModal);

window.addEventListener('resize', setHeaderImageHeight);
window.addEventListener('resize', setHeaderContentPosition);
