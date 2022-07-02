import {useState,useEffect} from 'react'
import axios from 'axios'
import {TrendingCoins} from '../config/Api'
import {Cryptostate} from '../Context'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import Loader from './Loader'


export default function Craousel() {
    const [trendy, settrendy] = useState([])
    const {currency,symbol}=Cryptostate();
    const [loader, setloader] = useState(false)



    const seperate=(x)=>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    }
    const fetchtrendingcoins= async()=>{
      setloader(true);
      const data=  await axios.get(TrendingCoins(currency));
      settrendy(data.data);
      setloader(false);
    }
    useEffect(() => {
     fetchtrendingcoins();
   
  
    }, [currency])
    const responsive={
        0: {
            items: 2,
        },
        1024: {
            items: 3
        }
      }

//itmes
const items=trendy.map((coin) => {
    let pricechange=coin.price_change_percentage_24h;
    let profit=true;
    if(pricechange > 0){
        profit=true;
    }
    else{
        profit=false;
    }



   
return(
<div className="items-center flex justify-center pb-20">
<Link to={`/Coin/${coin.id}`} className="items-center">
<img  src={coin.image} className="object-fill rounded-full h-36 " alt="" /> 
<div>
<div className="px-4">
<span className="text-yellow-300">{coin.name}</span>
    {profit ?<span className="text-green-400 px-2">+{`${coin.price_change_percentage_24h.toFixed(3) }%`}</span> :<span className="text-red-400 px-2">{`${coin.price_change_percentage_24h.toFixed(3) }%`}</span>}
</div>
<p className="px-6 font-extrabold">{ `${symbol} ${seperate(coin.current_price)}`}</p>

</div>
 </Link> 
</div>  
)

})
if (loader) {
  return(
    <>
    <Loader/>
    </>
  )      
 }
 else{
  return (
    <div>
        <br /><br />

          <AliceCarousel
      mouseTracking
      infinite
      animationDuration={1500}
      autoPlayInterval={1000}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      autoPlay
      items={items}
      />
    </div>
  )
 }
  
}
