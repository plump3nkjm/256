
//.effectが付いている要素の「opacity」をスクロールするたびに変化させる

export default () => {
	var effect = document.getElementsByClassName('effect');

	function hover() {
		for (var i = 0; i < effect.length; i++) {
			if (document.documentElement.scrollTop > effect[i].getBoundingClientRect().top) {
				effect[i].classList.add('active');
			} else {
				effect[i].classList.remove('active');
			}
		}
	}

	window.onscroll = function() {
		hover();
	}
}
