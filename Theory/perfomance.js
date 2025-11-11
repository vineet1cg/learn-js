// code 1 speed

// const t1 = performance.now();
// for(let i = 1 ; i<=100 ; i++){
//     let para = document.createElement('p');
//     para.textContent = "This Is Para No ." + i;
//     document.body.appendChild(para);
// }
// const t2 = performance.now();

// console.log("time taken by first code = "+(t2-t1));

// for code 2
// const t3 = performance.now();
// let mydiv = document.createElement('div');
// for(let i = 1 ; i<=100 ; i++){
//     let para = document.createElement('p');
//     para.textContent = "This Is Para No"+i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);
// const t4 = performance.now();
// console.log("time taken by first code = "+(t4-t3));


// code 2 is faster 
// reflow and repaint is the reason behind This


// reflow -> process of calculating position/dimentions of element 
// computationally heavy task

//repaint -> process of displaying content / element pixel by pixel
// faster than the reflow 


// to write a faster code we must reduce the number of reflow and increase the number of repaint


// for first code it had to render on the ui everytime it made a new element  
// so it had done 100 reflow and 100 repaints in the first code


// for the second code we created a div
// inserted a paragraph
// inserted text inside it
// loop ran for 100 time
// at last we had to append the div to the body
// 1 reflow and 1 repaint
// therefor second code is faster


// document fragment 
// light weight doc object
// additons when done it does not reflow and it does not repaint
// smol copy of the main dom

// how to code that ?

// best code for this is below this

let fragement = document.createDocumentFragment();

for(let i = 0 ; i<100 ; i++){
    let para = document.createElement('p');
    para.textContent = "This Is Para" + i;
    // no reflow or repaint below this line 
    fragement.appendChild(para);
}
document.body.appendChild(fragement);
// it is considered a good practice to do this 
