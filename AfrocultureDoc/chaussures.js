const galleryElement= document.querySelector(".container").children ;
const pre = document.querySelector(".prev") ;
const next = document.querySelector(".next") ;
const page = document.querySelector(".page") ;
const maxItem = 9 ;
let index = 1;
const pagination = Math.ceil(galleryElement.length/maxItem);
console.log(pagination)

pre.addEventListener("click" , function() {
index--;

showItems() ;
})
next.addEventListener("click" , function(){
    index++ ;
    
    showItems() ;
})


function showItems()
{
  for(let i = 0 ; i < galleryElement.length ; i++)
  {
      galleryElement[i].classList.remove("show") ;
    galleryElement[i].classList.add("hide") ;

if(i>= (index* maxItem) - maxItem && i < index*maxItem ){
//means (1*8)-8 =0 if index = 2 then(2*8)-8 =8
 galleryElement[i].classList.add("show") ;
 galleryElement[i].classList.remove("hide") ;

        }
        page.innerHTML = index ;
   }
}
   
window.onload=showItems();

