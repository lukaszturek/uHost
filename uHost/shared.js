var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.main-header__toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

selectPlanButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		modal.classList.add('open');
		backdrop.classList.add('open');
	})
});


modalNoButton.addEventListener('click', () => { 
	modal.classList.remove('open');
	backdrop.classList.remove('open');

});

backdrop.addEventListener('click', () => { 
	modal.classList.remove('open');
	mobileNav.classList.remove('open');
	backdrop.classList.remove('open');

});

toggleButton.addEventListener('click', () => {
	mobileNav.classList.add('open');
	backdrop.classList.add('open');
});