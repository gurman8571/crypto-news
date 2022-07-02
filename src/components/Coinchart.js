import React, { useState, useEffect } from 'react'
import { Cryptostate } from '../Context'
import { HistoricalChart } from '../config/Api'
import { Line } from 'react-chartjs-2';
import axios from 'axios'
import Loader from './Loader'
import { Chart as Chart } from 'chart.js/auto'
export default function Coinchart({ coin }) {

  //alert(coin.id);

  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
   const [loading, setloading] = useState(false);
  const { currency } = Cryptostate();
  //log





  const fetchHistoricData = async () => {
    setloading(true);
    const { data } = await axios.get(HistoricalChart(coin?.id.toLowerCase(), days, currency));
          
    setHistoricData(data.prices);
    setloading(false);
  };

  

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, currency,coin]);

  if (loading) {
    return(
      <Loader/>
    )
  }
  else{
  return (
    <div
      className="m-8 text-white">
      <Line

        data={{
          labels: historicData?.map((coin) => {
            //convert oth index date to actual date for
            let date = new Date(coin[0]);
            //convert time in am pm format 
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            // for days =1 display time format else we would go with dates
            return days === 1 ? time : date.toLocaleDateString();
          }),

          datasets: [
            {
              //map the prices
              data: historicData?.map((coin) => coin[1]),
              label: `Price ( Past ${days} Days ) in ${currency}`,
              borderColor: "gold",
              text:"white"
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 0.6,
            },
          },
        }}
      />
      <br />
      <div className="flex justify-center space-x-4 ">
        <button onClick={()=>setDays(7)} className=" btn bg-yellow-400  lg:py-2 lg:px-4 md:px-4 md:py-4 p-2 pointer-cursor border-2  hover:bg-transparent  text-white hover:  border-yellow-400">7 days</button>
        <button onClick={()=>setDays(15)} className=" btn bg-yellow-400  lg:py-2 lg:px-4 md:px-4 md:py-4 p-2 pointer-cursor border-2  hover:bg-transparent  text-white hover:  border-yellow-400"> 15 days</button>
        <button onClick={()=>setDays(30)} className=" btn bg-yellow-400  lg:py-2 lg:px-4 md:px-4 md:py-4 p-2 pointer-cursor border-2  hover:bg-transparent  text-white hover:  border-yellow-400">30 days</button>
        <button onClick={()=>setDays(45)} className=" btn bg-yellow-400  lg:py-2 lg:px-4 md:px-4 md:py-4 p-2 pointer-cursor border-2  hover:bg-transparent  text-white hover:  border-yellow-400">45 days</button>
      </div>
    </div>
  )
      }
}