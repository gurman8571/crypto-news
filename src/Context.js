import React, { useContext,useState,useEffect } from 'react'
import {createContext} from 'react'


const crypto=createContext();

export default function Context({children}) {
const [currency, setcurrency] = useState("INR");
const [symbol, setsymbol] = useState("₹")

useEffect(() => {
  if(currency === "INR"){
      setsymbol("₹");
  }
  else{
      setsymbol("$");
  }

 
}, [currency])

  return (
    <crypto.Provider value={{currency,symbol,setcurrency}}>

              {children}        
    </crypto.Provider>
  )
 
}
export const Cryptostate=()=>{
 return useContext(crypto)     
}
