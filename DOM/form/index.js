let fnameInput = document.getElementById('fname');
let emailInput = document.getElementById('email');
let ageInput = document.getElementById('age');
let addressInput = document.getElementById('address');
// attach to the form submit event instead of button click
const form = document.querySelector('form');
let fnameDisplay = document.getElementById('show-fname');
let emailDisplay = document.getElementById('show-email');
let ageDisplay = document.getElementById('show-age');
let addDisplay = document.getElementById('show-add');
let showDiv = document.getElementById('show-data');
// variables 
let fname;
let email;
let age;
let address;

function showData(){
	alert("tumhara data aagya mere pass ab chale ja");
	showDiv.style.display = "block";
	fnameDisplay.innerText = fname;
	emailDisplay.innerText = email;
	ageDisplay.innerText = age;
	addDisplay.innerText = address;
};

function getdata(e){
	// called on form submit — prevent the browser from reloading
	if(e && typeof e.preventDefault === 'function') e.preventDefault();

	// 
	fname = fnameInput.value.trim();
	email = emailInput.value.trim();
	age = ageInput.value.trim();
	address = addressInput.value.trim();
	showData();
};

form.addEventListener('submit', getdata);