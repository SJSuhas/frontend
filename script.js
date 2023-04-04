let xp=0;
let helth=100;
let gold=50;
let currentWepon=0;
let fighting;
let inventory=["stick"];

const button1=document.querySelector('#button1');
const button2=document.querySelector('#button2');
const button3=document.querySelector('#button3');
const text=document.querySelector('#text');
const xpText=document.querySelector('#xpText');
const healthText=document.querySelector('#healthText');
const goldText=document.querySelector('#goldText');
const monsterStats=document.querySelector('#monsterStats');
const monsterName=document.querySelector('#monsterName');
const monsterHealth=document.querySelector('#monsterHealth');

button1.onclick=goStore;
button2.onclick=goCave;
button3.onclick=fightDragon;


function goTown()
{
  button1.innerText="go to store";
  button2.innerText="go to cave";
  button3.innerText="fight dragon";
  button1.onclick=goStore;
  button2.onclick=goCave;
  button3.onclick=fightDragon;
  text.innerText="You are in the town square.You see a sign that says \"store\.";
}
function goStore()
{
  button1.innerText="buy 10 health(10 gold)";
  button2.innerText="buy wepon (30 gold)";
  button3.innerText="go to town square";
  button1.onclick=buyHealth;
  button2.onclick=buyWepon;
  button3.onclick=goTown;
  text.innerText="You enterd the store";
  
}

function goCave()
{
  console.log("going to cave.")
}

function fightDragon()
{
  console.log("fight the dragon.")
}
function buyHealth()
{
  
}

function buyWepon()
{
  
}

