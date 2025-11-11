// let anchorElement = document.getElementById('anchor');
// anchorElement.addEventListener('click',function(event){
//     event.preventDefault();
//     anchorElement.textContent = "nhi jane dunga";
// });

function alertPara(event){
    alert("you have clicked on the para"+ event.target.textContent);
}

// let paras = document.querySelectorAll('p');
// for(let i = 0 ; i<paras.length ; i++){
//     let para = paras[i];
//     para.addEventListener('click',alertPara);
// }


let mydiv = document.getElementById('mydiv');
console.log(mydiv.textContent) ;
mydiv.addEventListener('click',alertPara);