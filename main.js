var button = document.querySelector('#name-change-button');
var nameInput = document.getElementById('dog-name-box');


button.addEventListener('click', function() {
  dogName.innerText = ` ${nameInput.value}`;
  nameInput.value = '';
});
