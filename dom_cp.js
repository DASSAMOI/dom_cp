let btnInc = document.querySelector('.addQty');
let btnDec = document.querySelector('.decQty');

btnInc.addEventListener('click', increaseQuantity);
btnDec.addEventListener('click',decreaseQuantity);

let elem = document.getElementById('title');
elem.style.color ='blue';



 function increaseQuantity() {
    document.querySelector('.quantite').innerText = parseInt(document.querySelector('.quantite').innerText) +1;
    calculTotal();
 }
 function decreaseQuantity(){
    if (document.querySelector('.quantite').innerText>0) {
        document.querySelector('.quantite').innerText= parseInt(document.querySelector('.quantite').innerText) -1;
        
    }   
 }

function calculTotal(){

    let quantity = parseInt(document.querySelector('.quantite').innerText);
    let total1 =parseInt(document.querySelector('.unit-price').innerText);

    let sousTotal= quantity * total1;

}   document.querySelector('.total-price').innerText = sousTotal;