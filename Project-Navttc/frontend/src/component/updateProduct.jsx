import React, { useEffect } from 'react';
const UpdateProduct = () => {
    const useId=useParm();
    const getProduct=()=>{
const restlt=fetch("http://localhost:5000/getproduc")
    }
    useEffect(()=>{
        getProduct()
    },[])
    return (
        <div>
            <h1>Update Products</h1>
        </div>
    );
}

export default UpdateProduct;
