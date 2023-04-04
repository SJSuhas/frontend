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

const location=[
  {
    name:'town square',
    "button text":["go to store","go to cave", "fight dragon"],
    "button functons":[goStore,goCave,fightDragon],
    text:"You are in the town square.You see a sign that says \"store\.";
  },{
    name:"store";
    "button text":["buy 10 health(10 gold)","buy wepon (30 gold)", "fight dragon"],
      "button functons":[buyHealth,buyWepon,goTown],
      text:"You enterd the store"
      
    
  }
]

button1.onclick=goStore;
button2.onclick=goCave;
button3.onclick=fightDragon;

function update(location){
  button1.innerText=location["button text"][0];
  button2.innerText=location["button text"][1];
  button3.innerText=location["button text"][2];
  button1.onclick=location["button functions"][0];
  button2.onclick=location["button functions"][1];
  button3.onclick=location["button functions"][2];
  text.innerText="You are in the town square.You see a sign that says \"store\.";
}
function goTown()
{
  update(location[0]);
}
function goStore()
{
 
  
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

