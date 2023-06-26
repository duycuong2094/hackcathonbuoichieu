import React, { useState } from 'react'
import ListProduct from './ListProduct';
import Cart from './Cart';

function Parrent() {
    const [check,setCheck]=useState(true);
  const handleCart=()=>{
    setCheck(false);
  };
  const handleHome=()=>{
    setCheck(true)
  }
  return (
    <div><div className="App">
    <h2 onClick={handleHome} style={{color:"yellow"}}>Home</h2>
    <h2 onClick={handleCart}>Cart</h2>
{check?<ListProduct></ListProduct>:<Cart></Cart>}
</div></div>
  )
}

export default Parrent