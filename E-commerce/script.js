


document.querySelectorAll(".add-to-cart-btn").forEach(item=>{
    item.addEventListener("click",()=>{
  const productCard = button.closest('.card-container');
        const productName = productCard.querySelector('.card-content').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        const productImage = productCard.querySelector('img').src;
    })
})