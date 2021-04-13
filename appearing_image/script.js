const main_tl = gsap.timeline();
const bg_tl = gsap.timeline();

const textElement = document.querySelector('.title');
let textElement_split = textElement.innerText.split(" ");
console.log({textElement_split});
let newText = "";


for(let i=0; i<textElement_split.length; i++){
    newText += `<div>${textElement_split[i]}</div>`;
    newText += '&nbsp;';
}

textElement.innerHTML = newText;
const targetsDiv = document.querySelectorAll('.title div');
console.log({targetsDiv});
TweenMax.staggerFromTo(
    targetsDiv, 
    2,
    {yPercent: 110, ease: 'power2.out'},
    {yPercent:0, ease: 'power2.out'},
    .5
);

bg_tl.to('.image_wrapper', 3.5, {yPercent: 110, ease: "power2.out"}, '+=3');
bg_tl.to('.image', 3.5, {yPercent: -110, ease: "power2.out"}, "-=3.5");

bg_tl.to('.title', 1, {xPercent: 110, ease: "power2.inout"}, '-=.5');
