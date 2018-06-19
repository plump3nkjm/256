export default () => {
const validate = document.getElementsByClassName('validate');
const form = document.getElementsByTagName('form');
var flag = 0;

const validation = ()=> {
    if(document.form.name.value === ""||null){
      flag = 1;
      document.form.name.parentNode.querySelector('div').classList.add('active');
    console.log(flag);
    }
    if(document.form.mail.value === ""||null){
      flag = 1;
      document.form.mail.parentNode.querySelector('div').classList.add('active');
      console.log(flag);
    }
  if(flag == 1){
    return false;
  }
  else {
    return true;
  }
}

form[0].addEventListener('submit',validation);

console.log(document.form.mail.parentNode.querySelector('div'));

}
