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
const [searchterm, setsearchterm] = useState("");
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

}, [currency,searchterm])


const search=()=>{

const filtered= coins.filter((value)=>
 value.name.toLowerCase().includes(searchterm.toLowerCase())||
 value.symbol.toLowerCase().includes(searchterm.toLowerCase())
);

setcoins(filtered)
}
const [Pagenumber, setPagenumber] = useState(0);
const [postperpage, setpostperpage] = useState(10);



const  number=coins.length/postperpage
const pages= Math.ceil(number);



//get currpost 
const pagevisited=Pagenumber*postperpage;

const currents=coins.slice(pagevisited, pagevisited+postperpage)
const changePage=({selected})=>{

setPagenumber(selected);

}
  return (
    <>
    <div className="flex justify-center  ">
      <p className="font-bold text-yellow-400 pt-8 pb-4 text-3xl font-extrabold">      Crypto Currency prices 
</p>
    </div>
    
    <div className="search flex justify-center">


<input type="search" name="" id="" 
onChange={(e)=>setsearchterm(e.target.value)}
value={searchterm} className="  w-1/2  rounded-md p-2 m-4 bg-transparent border border-solid border-yellow-400 " placeholder="Search for a crypto currency " />

    </div>
    <div className="flex justify-center">    
    
    <button type="submit" onClick={search} className="bg-yellow-400 p-3 shrink rounded-md">search</button>
    
</div>
{currents?
<>
<div className="flex justify-center items-center">
   <table className="  table-auto bg-gray-700 w-1/2 lg:w-3/4 m-8  lg:p-8 border border-solid" border="1">
      
            <tr>
              <th className="px-0 lg:px-2 lg:m-2 font-extrabold text-white py-3  text-sm md:text-md lg:text-xl uppercase  font-semibold bg-yellow-500 text-white border-yellow-700">Coin details</th>
              <th className="px-0 lg:px-2 lg:m-2 font-extrabold text-white py-3  text-sm md:text-md lg:text-xl uppercase font-semibold  bg-yellow-500 text-white border-yellow-700">Price</th>
              <th className="px-0 lg:px-2 lg:m-2 font-extrabold text-white py-3  text-sm md:text-md lg:text-xl uppercase font-semibold  bg-yellow-500 text-white border-yellow-700">24h rise</th>
              <th className="hidden  md:table-cell lg:table-cell   px-0 lg:px-2 lg:m-2 font-extrabold text-white py-3  text-xs md:text-md lg:text-xl uppercase font-semibold  bg-yellow-500 text-white border-yellow-700">market cap value</th>
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
 

   
 <td className="border-t-0 px-6 ml-4 align-middle border-l-0 border-r-0  whitespace-nowrap p-4 m-2 lg:text-xl text-sm lg:flex items-center">
   <img src={coin.image} className="h-12 w-12  bg-white rounded-full border" alt="..." />
   
     <span className="m-2 lg:ml-16 lg:text-xl text-sm text-middle font-bold text-white"> <Link to={`/Coin/${coin.id}`} >{coin.name} </Link></span></td>
 <td className="  m-2 lg:pl-20 whitespace-nowrap ">{symbol}{seperate(coin.current_price)}</td>

 {profit?<td className="text-green-400 lg:text-xl text-sm px-2">+{`${coin.price_change_percentage_24h.toFixed(3) }%`}</td> :<td className=" lg:text-xl text-sm text-red-500 px-2">{`${coin.price_change_percentage_24h.toFixed(2) }%`}</td>}

 

 <td className="hidden  md:table-cell lg:table-cell lg:pl-16">
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

  <div className="flex  bg-gray-700 justify-center pt-8 w-screen">
  <ReactPaginate 
       nextLabel={" >"}
       previousLabel={"< "}
       pageCount={pages}
       onPageChange={changePage}
       activeClassName={"active"}
       containerClassName={"maincontainer"}
       previousLinkClassName={"previousBttn"}
       nextLinkClassName={"nextBttn"}
       disabledClassName={"PaginationDisabled"}



       
       
       /> </div>  
</>


:

<p>No coins to display </p>
}
  
    </>
  )
}
