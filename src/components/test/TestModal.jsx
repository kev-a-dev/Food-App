import React, {useContext, useState} from 'react'
import './Test.css'
import TestContext from './TestContext';

export default function TestModal({item, closeModal}) {

    const { addToCart } = useContext(TestContext);
    

      // ---------- item amount
      const [amount, setAmount] = useState(1);

    function handleMinus(item){
      item.amount -= 1;
      setAmount(amount - 1);
    }
    
    function handleAdd(item){
      // item.amount += 1;
      setAmount(amount + 1);
    }

    function addCustom(topping){
      item.sugar = topping
    }

    function toppingChange(event){
      const topping = event.target.value;
      const isChecked = event.target.checked;
      
      if (isChecked) {
        item.custom.push(topping)
      } else {
        for (let i in item.custom) {
          if (item.custom[i] === topping){
            item.custom.splice(item.custom[i])
          }
        }
      }
    }
    
  return (
      <div id="test-modal">
        
        <button onClick={closeModal}>close</button>  
        <h3>{item.name}</h3>
        <h3>${item.price}</h3>

        <div className="button-wrapper" onClick={closeModal}>
          <button onClick={()=>addToCart(item)}>add to cart</button>
        </div>

        <div className="sugar-level">
          <label htmlFor="" onClick={()=>addCustom('100%')}>100%</label>
          <label htmlFor="" onClick={()=>addCustom('50%')}>50%</label>
        </div>

        <div className="toppings">
          <label> <input type="checkbox" value='boba' onChange={toppingChange}/> boba</label>
          <label> <input type="checkbox" value='taro' onChange={toppingChange}/> taro</label>
          <label> <input type="checkbox" value='pudding' onChange={toppingChange}/> pudding</label>
               
        </div>
        
        <div className="amount-wrapper">
          <button onClick={()=>handleMinus(item)}>-</button>
          <div>{item.amount}</div>
          <button onClick={()=>handleAdd(item)}>+</button>
        </div>

    </div>
  )
}
