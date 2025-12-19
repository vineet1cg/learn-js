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

function checkName(fname){
	fname = fname.split('');
	let specialChar = ['@','#','$','%','!','+','-'];
	let isNormal = false;
	for(let i = 0 ; i<fname.length ; i++){
		if(fname[i]!='@' && fname[i]!='#' && fname[i]!='+' && fname[i]!='-' && fname[i]!='$' && fname[i]!='%' && fname[i]!='!'){
			isNormal = true;
		} else {
			alert("Abey Naam Sahi Se Likh Na");
			return false;
		}
	}
	return true;
};
function checkData(uemail){
	let checkMailArray = uemail.split("");
	let compareEmail = "@gmail.com".split("");
	let isSame = false;
	let j = 9;
	for(let i = checkMailArray.length - 1 ;i>=(checkMailArray.length - compareEmail.length) ; --i){
		if(checkMailArray[i]==compareEmail[j]){
			isSame = true;
			--j;
		} else {
			console.log("No No No");
			j = 9;
		}
	}
	if(isSame){
		showDiv.style.backgroundColor = "red";
	}
	return true;
}
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
	// add a function here to check data :-|
	;
	if(checkData(email) && checkName(fname)){
		showData();
	}
};

form.addEventListener('submit', getdata);