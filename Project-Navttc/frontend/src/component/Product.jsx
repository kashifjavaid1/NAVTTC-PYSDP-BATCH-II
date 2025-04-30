import React, { useState } from 'react';

const Products = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);

    const addProduct = async () => {
        if (!name || !price || !category || !company) {
            setError(true)
        }
        let result = await fetch("http://localhost:5000/product", {
            method: 'POST',
            body: JSON.stringify({
                name,
                price,
                category,
                company
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        console.log(result);

        if (result) {
            alert("Product added successfully!");
            setName("");
            setPrice("");
            setCategory("");
            setCompany("");
        } else {
            alert("Failed to add product");
        }
    };

    return (
        <div className='form-container'>
            <div className='main'>
                <input
                    type="text"
                    placeholder='Enter Product Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
             {error && <span>Please Enter a Name</span>}

                <input
                    type="text"
                    placeholder='Enter Product Price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
              
              {error && <span>Please Enter a Price</span>}
                <input
                    type="text"
                    placeholder='Enter Product Category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
             

                <input
                    type="text"
                    placeholder='Enter Company Name'
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                {error && <span>Please Enter a company</span>}

                <button className='btn' onClick={addProduct}>Add Product</button>
            </div>
        </div>
    );
};

export default Products;
