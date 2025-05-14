

let cart=[]
document.querySelectorAll(".add-to-cart-btn").forEach(item=>{
    item.addEventListener("click",()=>{
  const productCard = item.closest('.card-container');
        const productName = productCard.querySelector('.card-content').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        const productImage = productCard.querySelector('img').src;
         
        const existingProduct=cart.find((item)=>item.name===productName);
        if (existingProduct) {
            existingProduct.quantity+=1;
        }else{
            const prodcut={
                name:productName,
                price:productPrice,
                image:productImage,
                quantity:1
            }
            cart.push(prodcut);
            add()
        }

    showProducts();
    })
})
const add=()=>{
  const data=  document.getElementById("length")
  data.innerText =cart.length
}
const showProducts=()=>{
    const cardContiner=document.querySelector(".add-items-container");
    cardContiner.innerHTML="";
    cart.forEach((item)=>{
        console.log(item);
        
       const div=document.createElement("div");
       div.classList.add("add-container");
       div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width: 100px;">
      <div class="card-con">
        <h3>${item.name}</h3>
        <h1>${item.price}</h1>
        <p style="border: 1px solid black; width: 40px; padding: 10px;">${item.quantity}</p>
      </div>
      <div>
        <i class="fa-solid fa-trash icondel" style="cursor: pointer;" data-index="${item.quantity}"></i>
      </div>
    `;
    
        cardContiner.appendChild(div);

    })
}

document.getElementById("shopping-bag").addEventListener("click", () => {
    const isOpen = document.getElementById("box1");
    if (isOpen.style.display === "none") {
        isOpen.style.display = "block"; 
    } else {
        isOpen.style.display = "none"; 
    }
});
document.getElementById("remove").addEventListener("click", () => {
  const removeBox = document.getElementById("box1");
  removeBox.style.display = "none"; 
});
