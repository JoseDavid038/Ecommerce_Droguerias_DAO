

function changeImage(smallImage){
  let imageMain = document.querySelector('.js-image-main');
  let tempSrc = imageMain.src;
  imageMain.src = smallImage.src;
  smallImage.src = tempSrc;
}


let quantity = 0;
function addCart(){
  quantity +=1;
  console.log(quantity);
}


function removeCart(){
  
  if (quantity > 1){
    quantity-=1;
  }
  console.log(quantity);
  
}