import React, { useState,useEffect } from 'react'
import{Cryptostate} from '../Context'
import {HistoricalChart} from '../config/Api'
import { Line } from 'react-chartjs-2';
import axios from 'axios'
import {Chart as Chart} from 'chart.js/auto'
export default function Coinchart({coin}) {
    //console.log(data);
    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(1);
    const { currency } = Cryptostate();
  
   
  
  
    const fetchHistoricData = async () => {
      const { data } = await axios.get(HistoricalChart("solana", days, currency));
      
      setHistoricData(data.prices);
    };
  
    //console.warn(historicData);
  
    useEffect(() => {
      fetchHistoricData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [days]);
    const objdata=[

        {id:1,
        year:1992,
         gain:3000,
         loss:823
        },
        
        {id:2,
            year:1995,
             gain:3333,
             loss:44
            },

    ]  
  return (
<>
<Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
</>
  )
}

