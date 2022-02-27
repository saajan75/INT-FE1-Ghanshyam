import React, {useState} from 'react'
import './Dialog.css'

const Dialog = (props) => {

  const {title, isOpen, buyCoin} = props;
  const [noOfCoins, setNoOfCoins] = useState(0);
  const processBuying = (coins) => {
    buyCoin(coins, title);
    setNoOfCoins(0);
  }
  return (
    <>
    {isOpen ?
  <form
  className='Dialog'>
  Buy {title}<br/>
  Amount of {title} <br/>
  <input type= 'number' value ={noOfCoins} onChange ={(e)=>setNoOfCoins(e.target.value)}
  className='In'/> <br/>
 <button
 onClick={()=> processBuying(noOfCoins)}
 className='Btn'>Buy</button>
</form>: null  
  }
   
  </>
  )
}

export default Dialog