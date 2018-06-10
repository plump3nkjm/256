//スクロールトップ & ボタンの表示・非表示

export default () => {
  const target = document.getElementById('pagetop');
  const footer = document.getElementsByTagName('footer')[0];

  window.onscroll = event => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const footerTop = footer.offsetTop - window.innerHeight;

    if (scrollTop > 0) {
      btnTop.style.visibility = 'visible';
      btnTop.style.opacity = 1;

      if (scrollTop > footerTop) {
        btnTop.style.transform = 'translateY(' + (footerTop - scrollTop) + 'px)';
      }
      else {
        btnTop.style.transform = 'translateY(0)';
      }
    } else {
      btnTop.style.visibility = 'hidden';
      btnTop.style.opacity = 0;
    }

  };
};
