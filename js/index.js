let menu = document.querySelector(".men");
let close = document.querySelector(".close img");
let ul = document.querySelector("nav .nav");
let bigimg = document.querySelector(".change");
let bigimg1 = document.querySelector(".row1 .change");
let box =document.querySelectorAll(" .thumb .box");
let box1 =document.querySelectorAll(" .shown .box img");
let smimg =document.querySelectorAll(" .thumb .box img");
let quantitys =document.querySelector(".plus-minus span");
let iconclose = document.querySelector(".x");
let p = document.querySelector(".row1");
let arr = [...smimg];
let arr1 = [...box1];
let count = 0 ;
let coun1 = 0 ; 
let imagess =["../images/image-product-1.jpg" , "images/image-product-2.jpg" , "../images/image-product-3.jpg" , "../images/image-product-4.jpg"]
let empty = document.querySelector(".empty");
let cartt = document.querySelector(".cartt");
let product=document.querySelector(".product");
let cartproducts = document.querySelector(".cart-products")
let delll = document.createElement("img");
delll.src = "../images/icon-delete.svg";
delll.className="del";
let sala = document.querySelector(".sala");
let number=0;
let old = 0 ; 

delll.onclick=function(){
    number = 0 ;
console.log(product.lastChild)
product.innerHTML="";
let empty = document.createElement("p");
empty.className="empty";
empty.innerHTML = "Your cart is empty";
product.appendChild(empty);
empty.style.display="flex";
sala.innerHTML=0 ; 
sala.style.display="none";
}


function showcart(){

cartproducts.classList.toggle("vanish");

}

cartt.onclick = function(){
   if(quantitys.innerHTML > 0 ){
    old = +quantitys.innerHTML ; 
    
    number = number + old ; 
    sala.innerHTML=number ; 
    sala.style.display="flex";
    product.lastChild.remove();
empty.style.display="none";
let choice = document.createElement("div");
choice.className = "choice";
innerchoice = document.createElement("div");
innerchoice.className="inner-choice";
let imge = document.createElement("img");
imge.src= "../images/image-product-1-thumbnail.jpg";
let right = document.createElement("div");
right.className="right";
let shoes = document.createElement("p");
shoes.className="shoes";
shoes.innerHTML = "Fall Limited Edition Sneakers";
let span = document.createElement("span");
span.innerHTML = "$125.00 ";
let quan = document.createElement("span");
quan.className="quan"
quan.innerHTML = `x ${number} `
let price = document.createElement("span");
price.className="price";
price.innerHTML= `$${ (number * 125.00).toFixed(2)}`;
right.appendChild(shoes);
right.appendChild(span);
right.appendChild(quan);
right.appendChild(price);
innerchoice.appendChild(imge);
innerchoice.appendChild(right);

innerchoice.appendChild(delll);
choice.appendChild(innerchoice);
let checko = document.createElement("div");
checko.className="checkout";
checko.innerHTML="checkout";
choice.appendChild(checko);
product.appendChild(choice);
quantitys.innerHTML = 0 ; 
   }
}



function showrow1(){
    if(window.innerWidth > 991){
        p.style.display="flex";
    }

bigimg1.src = bigimg.src;
box1.forEach(function(e){
    e.classList.remove("active");
    })
    arr.forEach(function(e) {


        if(e.classList.contains("active")){
let needed = arr.indexOf(e) ;
box1[needed].classList.add("active");
console.log(needed); 
        }

    } )
}



iconclose.onclick= function (){
    p.style.display="none";
}




function show(){

bigimg.src = event.target.getAttribute("data-img");
// show1(bigimg);
box.forEach(function(e){
e.classList.remove("active");
})
smimg.forEach(function(e){
e.classList.remove("active");
})
event.target.classList.add("active");
event.target.parentElement.classList.add("active");
}


function show22(a){
arr1.forEach(function(e){
    if(e.classList.contains("active")){
        count=(arr1.indexOf(e)) + a;
        if(count > 3)count=0;
        if(count < 0 )count=3;
    }
})
box1.forEach(function(e){
    e.classList.remove("active");
    })
    bigimg1.src = box1[count].getAttribute("data-img");
    box1[count].classList.add("active");

}

function show23(n){
    console.log(n);
coun1 += n ; 
if(coun1 > imagess.length -1)coun1=0;
if(coun1 < 0)coun1=imagess.length -1;
bigimg.src = imagess[coun1];


}




function show1(n){


bigimg1.src = event.target.getAttribute("data-img");
box1.forEach(function(e){
e.classList.remove("active");
})

box1[n].classList.add("active");

}



function quantity(n){
// console.log(typeof quantitys.innerHTML);
quantitys.innerHTML = +quantitys.innerHTML + n ;
if(quantitys.innerHTML < 0){
quantitys.innerHTML = 0 ; 
}

}




menu.onclick = function(){
    document.querySelector("nav").style.display="flex";

}

close.onclick=function(){


    document.querySelector("nav").style.display="none";
}