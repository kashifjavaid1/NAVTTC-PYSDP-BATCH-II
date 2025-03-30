let hr=document.querySelector('#hr');
let sec=document.querySelector('#sec');
let min=document.querySelector('#min');
let start=document.querySelector('#start');
let stop=document.querySelector('#stop');
let reset=document.querySelector('#reset');

let second=0;
let minutes=0;
let hours=0
let count=0;

start.addEventListener('click',()=>{
   time=true;
   f1();
})


let f1=()=>{
    if (time) {
        count++;
        if (second===60) {
            second++
            count=0
        }
        sec.innerText = `Sec: ${second}`;
    }
}