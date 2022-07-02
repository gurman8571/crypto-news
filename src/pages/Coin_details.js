import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/Api";
import { Cryptostate } from "../Context";
import ReactHtmlParser from 'react-html-parser';
import Footer from '../components/Footer'
import Coinchart from '../components/Coinchart'
const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [readmore, setreadmore] = useState(false)
  const { currency, symbol } = Cryptostate();
  const [lowercurrency, setlowercurrency] = useState("")
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);

    setlowercurrency(currency.toLowerCase());
  };

  console.log(coin);
  useEffect(() => {
    fetchCoin();
  }, [currency]);

  const seperate = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

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
                ReactHtmlParser(coin?.description.en)
                :
                ReactHtmlParser(coin?.description.en.split(". ")[0])




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