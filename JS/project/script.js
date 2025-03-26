let db=[{
    q:"Q1: What does HTML stand for?",
    a:"Hyper text Transfer language",
    b:"Hyper text Script language",
    c:"Hyper text Markup language",
    d:'Hyper text Managment language ',
    correct:'option3'
},
{
    q:"Q2: Choose the correct HTML element for the largest heading",
    a:"<head>",
    b:"<heading>",
    c:"<h1>",
    d:'<h6>',
    correct:'option3'
},
{
    q:"Q3: What is the correct HTML element for inserting a line break?",
    a:"<br>",
    b:"<break>",
    c:"<lb>",
    d:'<b>',
    correct:'option1'
},
{
    q:"Q4: How can you make a bulleted list?",
    a:"<list>",
    b:"<dl>",
    c:"<ol>",
    d:'<ul>',
     correct:'option4'
},
{
    q:"Q5: What is the correct HTML for making a checkbox?",
    a:"<input type=check>",
    b:"<check>",
    c:"<checkbox>",
    d:'<text>',
     correct:'option1'
},
{
    q:"Q6: What does CSS stand for?",
    a:"Computer Style Sheets",
    b:"Colorful Style Sheets",
    c:"Creative Style Sheets",
    d:'Cascading Style Sheets',
     correct:'option4'
},
{
    q:"Q7: Which HTML tag is used to define an internal style sheet?",
    a:"<style>",
    b:"<script>",
    c:"<css>",
    d:'<html>',
     correct:'option1'
},
];

//  ===============   Fetcher ========================================
let heading=document.querySelector('.heading');
let op1=document.querySelector('#op1');
let op2=document.querySelector('#op2');
let op3=document.querySelector('#op3');
let op4=document.querySelector('#op4');
let selectedoption=document.querySelectorAll('.selectedoption')
let btn=document.querySelector('#btn');
let box=document.querySelector('#emety_container');
// =============== Setter =============================================
let count=0;
let marks=0;

// Array first index Fetch
let f1=()=>{
    heading.innerText=db[count].q;
    op1.innerText=db[count].a;
    op2.innerText=db[count].b;
    op3.innerText=db[count].c;
    op4.innerText=db[count].d;
}
f1() 

// Selection the options
let f2=()=>{
    let selected;
    selectedoption.forEach((e)=>{
       if (e.checked) {
        selected=e.id;
       }
    });
    return selected;
}

// Button click and move next option and show the result
btn.addEventListener("click",()=>{
   let fetchId=f2();
   if(!fetchId){
     return alert('Please the Select the One Option')
   }
       if (fetchId==db[count].correct) {
          marks++;
       }
       let f6=()=>{
        selectedoption.forEach((e)=>{
            e.checked=false
        })
       }
       f6()
       count++;
       if (count<db.length) {
        f1()
       }
       else{
        box.innerHTML=`<h3>Your Scores marks ${marks}/ ${count}</h3>`
        btn.remove()
       }
})
