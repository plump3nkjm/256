
export default () => {

  const live = document.getElementById('live');
  const inner = live.getElementsByClassName('inner');
  const target = live.getElementsByClassName('target');


  const accordionAction = ()=> {
    let t = event.target.parentNode.parentNode.querySelector('.inner');
    //parentNodeでlivesが取れてしまうのを制御するためのif
    if(event.target.parentNode.parentNode.classList.contains('lives')){
      t = event.target.parentNode.querySelector('.inner');
    }
      if(t.classList.contains('active')){
        console.log('contain');
        t.classList.remove('accordion');
        t.parentNode.querySelector('.header').classList.remove('active')
        setTimeout(()=>{
          t.classList.remove('active');
        },500)
      }
      else {
        console.log('no-contain');
        t.classList.add('active');
        t.parentNode.querySelector('.header').classList.add('active')
        setTimeout(()=>{
          t.classList.add('accordion');
        },10)
      }
    }
    [].forEach.call(target, el => {
      el.addEventListener('click',accordionAction);
    });
  }
