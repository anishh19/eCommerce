import React, {useEffect, useState} from 'react';
import './MainContent.css';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import Sidenav from '../Sidenav/Sidenav';

function MainContent() {
  const [path,setPath] = useState(`products`);
  const [data, setData] = useState([]);
  const [inCart, addInCart] = useState([]);
  useEffect(()=>{console.log(`Cart: ${inCart}`)},[inCart])
  useEffect(()=>{
    axios.get(`https://dummyjson.com/${path}`)
    .then(
      (res)=>
      {setData(res.data.products);
      console.log(res.data.products);})
  },[path]);
  return (
    <div className='contentContainer'>
         <Sidenav pathChanger = {setPath}/>
         <div className='mainContent'>
         {data.map((each)=>
              <ProductCard key={each.id} addToCart = {addInCart}  properties = {{...each}}/>)}
          </div>
    </div>
    
  )
}

export default MainContent