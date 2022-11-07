import React from 'react';
import './Sidenav.css'

function SideNav({pathChanger}) {
  const Categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"];
  return (
    <div className="sidenav">
    <ul>
        <h2>Categories</h2>
        <li onClick={()=>pathChanger(`products`)}>
            All
        </li>
        {Categories.map((each)=>
              <li  key={each} onClick={()=>pathChanger(`products/category/${each}`)}>{each}</li>)}
    </ul>
    </div>
  )
}

export default SideNav