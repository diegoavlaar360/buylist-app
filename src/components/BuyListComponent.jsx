import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';

export const BuyListComponent = () => {

    const [products, setProducts] = useState([]);
    const [values, handleChange] = useForm({
        name:'',
        price:0
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        let newValues = [...products, values] 
        console.log(newValues)
        setProducts(newValues);
    }

  return (
    <>        
        <form
        onSubmit={onSubmit}
        >
            <div>
                <input 
                    type="text" 
                    name="name"
                    id="name"
                    placeholder='Enter a new product'
                    value={values.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input 
                    type="number" 
                    name="price"
                    id="price"
                    placeholder='Enter the price'
                    value={values.price}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
        <h3>PRODUCTS:</h3>
        <div>
            <ul>
                {products.map((element, i) => 
                <li key={i}>{element.name} - {element.price}</li> 
                )}
            </ul>
        </div>
    </>
  )
}