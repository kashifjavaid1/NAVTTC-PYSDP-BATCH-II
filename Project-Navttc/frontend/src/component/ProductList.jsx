import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products,setProducts]=useState([]);
    
    const getProducts=async()=>{
        let result=await fetch("http://localhost:5000/getproduct");
        result = await result.json();
        setProducts(result.products);
    }
useEffect(()=>{
    getProducts()
},[])
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Product List</h1>
            <ul className='products_Container'>
                <li>Sr. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
            </ul>
            <div >
           {
                products.map((item)=>{
                   return(
                    <ul key={item.id} className='list_container'>
                    <li>{item.userId}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                   </ul>
                   )
                    
                })
                }
           </div>
        </div>
    );
}

export default ProductList;
