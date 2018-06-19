import ModalAction from './modules/modalAction'
import ScrollAction from './modules/scrollButtonAction'
import ScrollHover from './modules/scrollHover'
import SentenceMove from './modules/sentenceMove'
import WindowOrientation from './modules/windowOrientation'
import accordion from './modules/accordion'
import validate from './modules/validate'



// 共通
ScrollHover();
WindowOrientation();
if(document.getElementById('live')){
  accordion();
}
if(document.getElementById('contact')){
  validate();
}
