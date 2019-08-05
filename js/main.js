var sum;

let displayVal = document.querySelector('h1 span');
let inputVal = document.getElementById('input');

let subtract = document.getElementById('subtract');

parseInt((inputVal.value = 1));

document.getElementById('add').addEventListener('click', function() {
	sum += parseInt(inputVal.value);

	render();
});

document.getElementById('subtract').addEventListener('click', function() {
	sum -= parseInt(inputVal.value);
	render();
});

function init() {
	sum = parseInt(0);

	render();
}

function render() {
	displayVal.innerHTML = sum;
	displayVal.style.color = sum >= 0 ? 'black' : 'red';
}
init();
