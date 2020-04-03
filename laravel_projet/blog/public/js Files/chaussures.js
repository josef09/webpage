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

/* partie panier */

let carts = document.querySelectorAll('.add-cart');

let products =[
  {
    name:"Grey Tshirt" ,
    tag : "greytshirt" ,
    price : 40 ,
    inCart:0 

  },
  {
    name:"Black Tshirt",
    tag : "greytshirt",
    price : 70 ,
    inCart:0 

  },
  {
    name:"Black Tshirt",
    tag : "greytshirt",
    price : 80 ,
    inCart:0 

  }
];

for(let i=0 ;i< carts.length ;i++){
  carts[i].addEventListener('click' , () => {
    cartNumbers(products[i]) ;
    totalCost(products[i]) 
  })
}


function onloadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers') ;
  if(productNumbers ){
    document.querySelector('.cart span').textContent = productNumbers ;
  } 

}

function cartNumbers(product)
{
  let productNumbers = localStorage.getItem('cartNumbers') ;

  productNumbers=parseInt(productNumbers) ;
  
  if(productNumbers ){
    localStorage.setItem('cartNumbers' , productNumbers + 1 );
    document.querySelector('.cart span').textContent = productNumbers + 1;

  } else{
    localStorage.setItem('cartNumbers' , 1);
    document.querySelector('.cart span').textContent = 1;
  }
  setItems(product);
  
}

function setItems(product){
  let cartItems=localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null){
     if(typeof(cartItems[product.tag]) == undefined) {
      cartItems={
        ...cartItems, 
        [product.tag]:product
      }
    }
    cartItems[product.tag].inCart += 1 ;
   } else{
    product.incart= 1 ;
    cartItems = {
  [product.tag]:product 
    }
  }
 
  localStorage.setItem('productsInCart' , JSON.stringify
  (cartItems));

}
function displaycart() {
  let cartItems = localStorage.getItem("productsInCart") ;
  cartItems = JSON.parse(cartItems) ;
  let productContainer = document.querySelector (".products") ;
   if(cartItems && productContainer) {
  productContainer.innerHTML='';
  Object.values(cartItems).map( item=> {
    
productContainer.innerHTML += '
<div class="product"><ion-icon name="close-circle"></</ion-icon><img src="ImageAfro/${item.tag}.jpg"><span>${item.name}</span></div>'
});
   }
}

onloadCartNumbers() ;
displaycart() ;

