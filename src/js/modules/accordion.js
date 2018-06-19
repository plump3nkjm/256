
export default () => {

  const live = document.getElementById('live');
  const inner = live.getElementsByClassName('inner');
  const target = live.getElementsByClassName('target');


  const accordionAction = ()=> {
      let t = event.target.parentNode.querySelector('.inner');
      console.log(t);
      t.classList.toggle('active');
      console.log('call');
      setTimeout(()=>{
        t.classList.toggle('accordion');
      },10)
    }
    [].forEach.call(target, el => {
      el.addEventListener('click',accordionAction);
    });
  }
