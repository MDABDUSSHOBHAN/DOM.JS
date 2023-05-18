
// Which Element Can add on The List

 const placesList=document.getElementById('places-list');
console.log(placesList);


// Create a New Element......

const li = document.createElement('li');
li.innerText='Dhaka'

placesList.appendChild(li);




// //  Main section add on html document page..
 const mainContainer= document.getElementById('main-container');
 const section=document.createElement('section');
 const h1= document.createElement('h1');
 h1.innerText = 'My Food List';
 section.appendChild(h1);
 mainContainer.appendChild(section);
// add ul and li element in section.....


 const ul = document.createElement('ul');
 const li1=document.createElement('li');
 li1.innerText='birayni';
 ul.appendChild(li1);

 const li2=document.createElement('li');
 li2.innerText='salad';
 ul.appendChild(li2);

 const li3=document.createElement('li');
 li3.innerText='maton';
 ul.appendChild(li3);

 section.appendChild(ul);
 
 


 

 
 

 




 











// inner text
// const li=document.createElement('li');

// li.innertext='rangamati';

// placesList.appendChild(li);

