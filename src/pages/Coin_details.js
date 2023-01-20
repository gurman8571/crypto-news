import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/Api";
import { Predict } from '../config/Api'
import { Cryptostate } from "../Context";
import ReactHtmlParser from 'react-html-parser';
import Footer from '../components/Footer'
import Coinchart from '../components/Coinchart'
import { FacebookShareButton} from "react-share";
import {
  FacebookIcon} from "react-share";

  import {  WhatsappShareButton} from "react-share";
import {WhatsappIcon} from "react-share";


const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [readmore, setreadmore] = useState(false)
  const { currency, symbol } = Cryptostate();
  const [lowercurrency, setlowercurrency] = useState("")
const [open, setopen] = useState("")
const [low, setlow] = useState("")
const [volume, setvolume] = useState("")
const [high, sethigh] = useState("")
const [logo, setlogo] = useState("")



const [closeloading, setcloseloading] = useState(false);
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
 
  setopen(data?.market_data.current_price['usd']);
  sethigh(data?.market_data.high_24h['usd']);
  setlow(data?.market_data.low_24h['usd']);
  setvolume(data?.market_data.total_volume['usd']);
 

    //setlogo(data?.symbol)
    setlogo(data?.symbol.toUpperCase())
    setlowercurrency(currency.toLowerCase());
  };

  console.log(coin);
  useEffect(() => {
    fetchCoin();
  }, [currency]);

const PredictClose =async()=>{
  setcloseloading(true);
  const formdata=new FormData();
  formdata.append("Coin",logo);
  //formdata.append("Open",open);
  //formdata.append("Low",low);
  //formdata.append("High",high);
  //formdata.append("Volume",volume);



try{ 

   const val= await axios.post('https://boldly-frosty-pug-den.wayscript.cloud', formdata)
   setcloseloading(false); 
   alert(`closing price is $${val.data}`)  
     setcloseloading(false);    
}
      catch(error){
        setcloseloading(false); 
console.log(error.message)

      }
        
      }
  const seperate = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  }
 const  AddToFavourite=(coin,image)=>{
  if (localStorage.getItem("names")== null) {
    localStorage.setItem("names", '[]');
  }
  
  var old_data=JSON.parse(localStorage.getItem('names'));

  old_data.push(`${coin}:${image}`);

  localStorage.setItem("names",JSON.stringify(old_data));
 
  
 }



  return (
    <div className="h-full bg-gray-700">

      <div class="grid grid-cols-5 lg:grid-row gap-2">
        <div class="bg-transparent col-span-5">
          <div className="flex flex-row justify-center">
            <img className=" shadow-lg rounded-full p-4 m-4  flex justify-center" src={coin?.image.large} alt="" />

          </div>
          <div className="flex flex-col m-2 justify-center items-center">
            <p className="text-white font-extrabold text-3xl ">{coin?.name}</p>

            <p className=" text-yellow-400 text-lg">{coin?.symbol}</p>

          </div>
          <article className="  px-4 py-4  lg:px-6 text-center    text-white">
            {
              readmore || coin?.description.en.length <= 500 ?
                `${ReactHtmlParser(coin?.description.en)}`
                :
                `${ReactHtmlParser(coin?.description.en.split(". ")[0])}...`




            }
            {coin?.description.en.length > 400 ? <button className="p-1 text-blue-500 focus:outline-none outline-none" onClick={() => { setreadmore(!readmore) }}>{readmore ? " read less" : "read more"}</button>
              : <p></p>}
          </article>
          <br />
          <div className="flex flex-col   justify-center items-center text-white space-y-2 text-white">

            <p >  <span className="text-yellow-400"> Rank:</span>{coin?.market_cap_rank}</p>

            <a className="text-blue-500" href={coin?.links.blockchain_site[0]}>Official site!</a>

            <p > <span className="text-yellow-400"> current price:</span> {symbol}
              {coin?.market_data.current_price[`${lowercurrency}`]}</p>

            <p> <span className="text-yellow-400"> Market cap value:</span> {symbol}
              {coin?.market_data.market_cap[`${lowercurrency}`].toString().slice(0, -6)
              }M</p>

              <button className="btn bg-yellow-400  mb-1 lg:py-2 lg:px-4 md:px-4 md:py-4 p-2 pointer-cursor border-2 text-white" onClick={()=>AddToFavourite(coin?.name,coin?.image.small)} >Add to watchlist</button>

              <div className=" flex justify-evenly">

             { /*<button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style={{backgroundColor: '#25D366'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
          <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
            </button>*/} 
            
            <FacebookShareButton className="mx-1"  url={`https://spectacular-sunflower-8aea8d.netlify.app/Coin/${coin?.id}`} qoute={"Hey check this crypto  coin "}
            hashtag="#crypto stats"

            >

            <FacebookIcon size={46}  round={true} logoFillColor="white"></FacebookIcon>
            </FacebookShareButton>
            
            <WhatsappShareButton 
            title={coin?.name}
            url={`https://spectacular-sunflower-8aea8d.netlify.app/Coin/${coin?.id}`}>

              <WhatsappIcon size={46} round={true} logoFillColor="white"></WhatsappIcon>
            </WhatsappShareButton>
              </div>
<p className="text-yellow-400 font-extrabold">


       
</p>
<div><button className="btn bg-yellow-400 rounded  lg:py-2 lg:px-4 md:px-4 md:py-4 p-2 pointer-cursor border-2 text-white"
onClick={()=>{PredictClose()}}
> 
{closeloading?"Fetching...":"predict closing value"}
</button>
 </div>

          </div>

        </div>





        <br />

        <div class="bg-gray-700 col-span-5">
          <br />
          <hr className="p-8 m-8" />
          <Coinchart coin={coin} />
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default CoinPage;