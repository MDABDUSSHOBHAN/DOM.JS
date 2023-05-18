const sections=document.querySelectorAll('section');

console.log(sections);
for(const se of sections){


    se.style.border='3px solid blue'
    se.style.marginTop='5px'
    se.style.borderRadius='7px'
   se.style.paddingLeft='12px';
   se.style.backgroundColor='lightgray';
}
const d=document.getElementById('container');
// d.style.backgroundColor='yellow';
d.classList.add('yellow-bg');

d.classList.remove('large-text');



