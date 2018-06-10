// モーダルの開閉

export const modalAction = function() {

	const main = document.getElementById('main');
	const activator = document.getElementsByClassName('on');
	const btnOpen = document.getElementsByClassName('modal-open');
	const btnClose = document.getElementsByClassName('modal-close');
	const content = document.getElementsByClassName('container');
	var scrollY;

	function modalOpen() {
		scrollY = window.pageYOffset;
		main.style.position = 'fixed';
		activator[0].classList.add('active');
		main.style.height = '100%';
		main.style.left = '0';
	}

	function modalClose() {
		activator[0].classList.remove('active');
		main.style.position = '';
		main.style.height = '';
		main.style.left = '';
		window.scrollTo(0, scrollY);
	}
	btnOpen[0].addEventListener('click', function() {
		modalOpen();
	});
	btnClose[0].addEventListener('click', modalClose);
};
