let  btn = document.querySelector("button");
let div = document.querySelector("div");
let h1 = document.querySelector("h1");
btn.addEventListener("click",function(){
    let r =Math.floor(Math.random()*255);
    let g =Math.floor(Math.random()*255);
    let b =Math.floor(Math.random()*255);
    let rgb = `rgb(${r},${g},${b})`;
    console.log(rgb)
    h1.innerText=rgb;
    div.style.backgroundColor=rgb;
})