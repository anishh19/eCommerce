import React from 'react';
import './ProductCard.css';

function ProductCard(props) {

  return (
    
    <div className='productCard'>
      <div id='contentInCard'>
      <img src= {props.properties.thumbnail} alt= {props.properties.title}/>
      <h3> {props.properties.title}</h3>
      <h2>${props.properties.price}</h2>
      <button onClick={()=>{props.addToCart(current=> [...current, props.properties.id]);
      console.log(`Added ${props.properties.title}to cart`)}}>
        Add To Cart
      </button>
      
      </div>
    </div>
  )
}

export default ProductCard