var button = document.querySelector('#name-change-button');
var nameInput = document.getElementById('dog-name-box');


button.addEventListener('click', function() {
  dogName.innerText = ` ${nameInput.value}`;
  nameInput.value = '';
});

var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var paraHow = document.querySelector('#para-how');
var paraWhat = document.querySelector('#para-what');
var paraFacts = document.querySelector('#para-facts');

button1.addEventListener('click', function() {
   if (paraHow.hidden === false) {
     paraHow.hidden = true;
   } else {
     paraHow.hidden = false;
   }
});

button2.addEventListener('click', function() {
   if (paraWhat.hidden === false) {
     paraWhat.hidden = true;
   } else {
     paraWhat.hidden = false;
   }
});

button3.addEventListener('click', function() {
   if (paraFacts.hidden === false) {
     paraFacts.hidden = true;
   } else {
     paraFacts.hidden = false;
   }
});
