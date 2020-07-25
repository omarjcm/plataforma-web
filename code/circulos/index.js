'use strict';

var circles_form = document.getElementById('circles_form');
var circles = document.getElementById('circles');

var colors = ['#fcd748', '#56dec5', '#FF6F54', '#20CE41', '#6689DD', '#e0d091'];


circles_form.onsubmit = function(event){
	event.preventDefault();
	let index_list = [];
	let circles_number = Number(document.getElementById('circles_number').value);
	circles.innerHTML = '';
	for (var i = 1; i <= circles_number; i++) {
		let random = Math.floor(Math.random() * 6);
		while(index_list.some((element) => element == random)){
			random = Math.floor(Math.random() * 6);
		}
		index_list.push(random);
		circles.innerHTML += `
			<div class="circulo" style="background-color: ${ colors[random] }">
      		</div>
		`;
	}
};


function validate(event){
	let character = String.fromCharCode(event.keyCode);
	let pattern = /[1-5]/;
	return pattern.test(character);
}