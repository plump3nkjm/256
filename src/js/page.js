import ModalAction from './modules/modalAction'
import ScrollAction from './modules/scrollButtonAction'
import ScrollHover from './modules/scrollHover'
import SentenceMove from './modules/sentenceMove'
import WindowOrientation from './modules/windowOrientation'
import accordion from './modules/accordion'
import validate from './modules/validate'
import schedule from './modules/schedule'
import humberger from './modules/humberger'





// 共通
humberger();
ScrollHover();
WindowOrientation();
if(document.getElementById('live')){
  schedule();
  window.onload = () => {
    accordion();
  }
}
if(document.getElementById('contact')){
  validate();
}
