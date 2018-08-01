export default ()=> {
  const trigger = document.getElementsByClassName('menu-btn');
  const list = trigger[0].nextElementSibling;
  const handler = ()=> {
  if(trigger[0].classList.contains('active')){
      trigger[0].classList.remove('active');
      list.classList.remove('accordion');
      setTimeout(()=>{
          list.classList.remove('active');
       },200);
  }
  else {
    trigger[0].classList.add('active');
    list.classList.add('active');
    setTimeout(()=>{
        list.classList.add('accordion');
     },10);
  }
}

trigger[0].addEventListener('click',handler);


}
