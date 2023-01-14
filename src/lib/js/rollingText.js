// @ts-nocheck

export function rollingText(){

    let elements=document.querySelectorAll(".rolling-text");
    elements.forEach(e=>{let l=e.innerText;e.innerHTML="";
    let t=document.createElement("div");
    for(let a of(t.classList.add("block"),l)){let n=document.createElement("span");
    n.innerText=""===a.trim()?"\xa0":a,n.classList.add("letter"),t.appendChild(n)}
    e.appendChild(t),e.appendChild(t.cloneNode(!0))}),
    setTimeout(()=>{elements.forEach(e=>{e.classList.add("play")})},600),
    elements.forEach(e=>{e.addEventListener("mouseover",()=>{e.classList.remove("play")})});

}