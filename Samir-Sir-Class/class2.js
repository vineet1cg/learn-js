var heading = document.querySelector('#changeThroughJs');
const cssStylingJs = {
    color:'red',
    fontSize:'21px',
    backgroundColor:'yellow',
};
Object.assign(heading.style ,cssStylingJs);

var paragraph = document.createElement('p');
paragraph.textContent = "Hello Bhai";
// now the question is how do we define it's lcation in HTML ?
// document.body it access the body

// newley created elements -> append to the body of HTML
document.body.append(paragraph);
// we can also use .appendChild() to do the same

var changeInDiv = document.createElement('h1');
changeInDiv.textContent = "This is A H1 added through javaSctipt";
// append to a targeted element in body->div
document.querySelector('div').appendChild(changeInDiv);
// when there are multiple elemets we must use appendChild

