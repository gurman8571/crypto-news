import  axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';
import { SingleCoin } from "../config/Api";
import { Cryptostate } from "../Context";
import { Doughnut } from 'react-chartjs-2';
import  Coinchart from '../components/Coinchart'
const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = Cryptostate();
 const [lowercurrency, setlowercurrency] = useState("")
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
    setlowercurrency( currency.toLowerCase());
  };
  
//console.log(coin);
  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const seperate=(x)=>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

}
     



  return (
  <div className="h-full bg-gray-700">
  
<div class="grid grid-cols-5  gap-2">
  <div class="bg-transparent col-span-5">
   <div className="flex flex-row justify-center">
   <img  className="rounded-full p-3 flex justify-center"src={coin?.image.large} alt="" />
 
   </div>
      <div className="flex flex-row justify-center">
      <p className="text-white font-extrabold text-2xl ">{coin?.name}</p> 
      </div>
      <div className="flex flex-row justify-center">
      <p className="text-white">{coin?.symbol}</p> 

</div>
     <article className="flex justify-center p-5 text-white">
     {ReactHtmlParser(coin?.description.en.split(".")[0])}.
     </article>
    
  </div>
<div className="flex justify-center text-white">

  Rank:{coin?.market_cap_rank}
</div>
  <div className="flex flex-row justify-center  text-gray-300">
     <a href={coin?.links.blockchain_site[0]}>Official site!</a> 
  
  current price:{symbol}
  
  {(coin?.market_data.current_price[`${lowercurrency}`])
  

  }
</div>
  <br />
  <div class="bg-gray-700 col-span-5">
        <Coinchart coin={coin}/>
  </div>
</div>
  </div>
  );
};

export default CoinPage;