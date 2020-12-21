import React, { useState } from 'react';
import './App.css';
import data from './data/Data';
import Cart from './components/Cart';
import Product from './components/Product';


const App = () => {

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if(!exist){
        setCartItems(prevCartItems => [
          ...prevCartItems,{
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: 1
          }
        ])
      } else {
        setCartItems(
          cartItems.map((x) => 
            x.id == product.id ? {...exist, qty: exist.qty + 1}: x
          )
        )
      }
    }

    const onRemove = (id) => {
        const exist = cartItems.find((x) => x.id === id);
        if(exist){
            cartItems.map((item, key) => {
              if(id === item.id){
                  cartItems.splice(key, 1);
                  setCartItems(prevCartItems => [
                    ...prevCartItems
                  ])
              }
            });
        }
    }
    
    return(
      <React.Fragment>
        <div className="container">
          <Cart 
            onRemove={onRemove}
            items={cartItems} 
            />
          <Product 
            onAdd={onAdd} 
            products={data.products} 
          />
        </div>
      </React.Fragment>
    )
}

export default App;