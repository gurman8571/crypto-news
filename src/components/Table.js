import React, { useState,useEffect } from 'react'
import {CoinList} from'../config/Api'
import {Cryptostate} from '../Context'
import axios from'axios'
import '../css/paginator.css'
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate';
export default function Table() {
  const [coins, setcoins] = useState([]);
const {currency,symbol}=Cryptostate();
//const [loading, setloading] = useState(false)
//fetch data
  const getcoins=async () => {
    const data=await axios.get(CoinList(currency));
         setcoins(data.data);           
  }
//to seperate number with commas
  const seperate=(x)=>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

}
  //console.log(coins);
useEffect(() => {
  
getcoins();
 
}, [currency])




const [Pagenumber, setPagenumber] = useState(0);
const [postperpage, setpostperpage] = useState(10);

const  number=coins.length/postperpage
const pages= Math.ceil(number);



//get currpost 
const pagevisited=Pagenumber*postperpage;

const currents=coins.slice(pagevisited, pagevisited+postperpage);
const changePage=({selected})=>{

setPagenumber(selected);

}
  return (
    <>
    <div className="flex justify-center ">
      <p className="font-bold text-yellow-400 pt-8 pb-4 text-3xl font-extrabold">      Crypto Currency prices 
</p>
    </div>
    <div className="search flex justify-center ">

      <input type="search" name="" id="" className="  w-1/2  rounded-md p-2 m-4 bg-transparent border border-solid border-yellow-400 " placeholder="Search for a crypto currency " />
    </div>
   <div className="flex justify-center items-center">
   <table className="  w-3/4 bg-transparent  p-4 border border-solid" border="1">
      
            <tr>
              <th className="px-2  font-extrabold text-white py-3 text-md uppercase  font-semibold bg-yellow-500 text-white border-yellow-700">Coin details</th>
              <th className="px-2  font-extrabold text-white py-3 text-md uppercase font-semibold  bg-yellow-500 text-white border-yellow-700">Price</th>
              <th className="px-2  font-extrabold text-white py-3 text-md uppercase font-semibold  bg-yellow-500 text-white border-yellow-700">24h rise</th>
              <th className="px-2  font-extrabold text-white py-3 text-md uppercase font-semibold  bg-yellow-500 text-white border-yellow-700">market cap value</th>
            </tr>
          
          <tbody>
           { 
           currents.map((coin)=>{
            let pricechange=coin.price_change_percentage_24h;
            let profit=true;
            if(pricechange > 0){
                profit=true;
            }
            else{
                profit=false;
            }

       
return(
 <>

  
 <tr className="border border-solid  border-gray-500 p-4">
 

   
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4  lg:flex items-center">
                <img src={coin.image} className="h-12 w-12 bg-white rounded-full border" alt="..." />
                
                  <span className="m-2 lg:ml-16  text-middle font-bold text-white"> <Link to={`/Coin/${coin.id}`} >{coin.name} </Link></span></td>
              <td className="  m-2 lg:pl-20 whitespace-nowrap ">{symbol}{seperate(coin.current_price)}</td>
   
              {profit?<td className="text-green-400 px-2">+{`${coin.price_change_percentage_24h.toFixed(3) }%`}</td> :<td className="text-red-600 px-2">{`${coin.price_change_percentage_24h.toFixed(2) }%`}</td>}
              <td className="lg:pl-16">
                   {symbol}{seperate(coin.market_cap.toString().slice(0,-6))}M        
              </td>
              
            
 
            </tr>
            
 </>

  
)

           })

           }
            
          
          </tbody>
        </table>

   </div>

  <div className="flex justify-center pt-8">
  <ReactPaginate 
       nextLabel={"Next >"}
       previousLabel={"< previous"}
       pageCount={pages}
       onPageChange={changePage}
       activeClassName={"active"}
       containerClassName={"maincontainer"}
       previousLinkClassName={"previousBttn"}
       nextLinkClassName={"nextBttn"}
       disabledClassName={"PaginationDisabled"}



       
       
       /> </div>  
    </>
  )
}
