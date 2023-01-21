import React,{useState,useEffect} from 'react'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import {Link} from 'react-router-dom'

export default function Favourite() {

  
    const [names, setnames] = useState(JSON.parse(localStorage.getItem('names')))
    const [loading, setloading] = useState(true)


    const removefav=(index)=>{


        let newnames=[...names];
        newnames.splice(index,1)
        setnames(newnames);

      localStorage.setItem('names',JSON.stringify(newnames));

    }

    const loader=()=>{
       setTimeout(() => {
        setloading(false);
       }, 400);
    }

    useEffect(() => {
         loader();
    }, [])
 
    if (loading) {
     return <Loader/>   
    }


    if (localStorage.getItem("names") == null) {
      return(
        <>
         <body className="min-h-screen bg-gray-700">

          <p className="flex justify-center text-white text-3xl py-10 text-capitalize "> No items added to favourites </p>
        </body>
        </>
      )
    }
  return (
    <>
    <body className="min-h-screen bg-gray-700">

   
    
   

<div className="flex justify-center items-center">
   <table className="  table-auto bg-gray-700 w-1/2 lg:w-3/4 m-8   border border-solid" border="1">
      
            <tr>
              <th className="px-0  font-extrabold text-white py-3  text-sm md:text-md lg:text-xl uppercase  font-semibold bg-yellow-500 text-white border-yellow-700">Symbol</th>
              <th className="px-0  font-extrabold text-white py-3  text-sm md:text-md lg:text-xl uppercase font-semibold  bg-yellow-500 text-white border-yellow-700">Name</th>
               <th className="hidden  md:table-cell lg:table-cell   px-0 lg:px-2 lg:m-2 font-extrabold text-white py-3  text-xs md:text-md lg:text-xl uppercase font-semibold  bg-yellow-500 text-white border-yellow-700">Actions</th>
            </tr>
          
          <tbody>
         
  
{

names.map((coin,i)=>{
    return(
        <>
        <tr className="border border-solid  border-gray-500 p-4">

         <td className="border-t-0  ml-4 align-middle border-l-0 border-r-0  whitespace-nowrap p-4 m-2 lg:text-xl text-sm lg:flex items-center">
   <img src={coin.substring(coin.indexOf(":")+1)} className="h-12 w-12  bg-white rounded-full border" alt="..." />
   </td>
     <td className="m-2 lg:ml-16 lg:text-xl text-sm text-middle font-bold text-white">  {coin.substring(0, coin.indexOf(":"))}</td>
      
      <td className="flex px-4">
<button onClick={()=>removefav(i)}><svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5 text-red-600"
  viewBox="0 0 20 20"
  fill="currentColor"
>
  <path
    fillRule="evenodd"
    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
    clipRule="evenodd"
  />
</svg></button>

<span>


<Link to={`/Coin/${coin.substring(0, coin.indexOf(":")).toLowerCase()} `}>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5 text-yellow-300"
  viewBox="0 0 20 20"
  fill="currentColor"
>
  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
  <path
    fillRule="evenodd"
    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
    clipRule="evenodd"
  />
</svg>
    </Link>

</span>

      </td>
      
     </tr>
        </>
     
    )
})
}
 

   

 



           
            
          
          </tbody>
        </table>

   </div>


     </body>
     </>
  
  )
}
