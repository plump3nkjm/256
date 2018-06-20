export default () => {

 const lives =  document.getElementsByClassName('lives');
 var data;


  fetch('json/schedule.json')
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{
      data = json;
      var schedule = data.schedule;
      console.log(schedule.length);
      console.log(schedule);
      for (let i = 0; i < data.schedule.length; i ++){

        //create element
        const live = document.createElement('div');
        live.classList.add('live');
        //header
        const header = document.createElement('div');
        header.classList.add('header');
        header.classList.add('target');
        const date = document.createElement('h3');
        date.innerText = schedule[i].date;
        const btn = document.createElement('img');
        btn.src = "../img/live/btn_open.svg";
        header.appendChild(date);
        header.appendChild(btn);
        //inner
        const inner = document.createElement('div');
        inner.classList.add('inner');

        const title = document.createElement('h4');
        title.innerText = schedule[i].title;

        const sub = document.createElement('h5');
        sub.innerText = schedule[i].sub;

        const act = document.createElement('p');
        act.classList.add('act');
        act.innerHTML = schedule[i].act;


        const time = document.createElement('p');
        time.classList.add('time');
        time.innerText = 'OP/ST' + schedule[i].time;

        const price = document.createElement('p');
        price.classList.add('price');
        price.innerText = 'ADV/D' + schedule[i].price;

        inner.appendChild(title);
        inner.appendChild(sub);
        inner.appendChild(act);
        inner.appendChild(time);
        inner.appendChild(price);
        //end

       //add item
       live.appendChild(header);
       live.appendChild(inner);
       lives[0].appendChild(live);
       //end
      }
    })
}
