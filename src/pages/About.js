import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function About() {
  const [loading, setloading] = useState(true);

  const loader = () => {
    setTimeout(() => {
      setloading(false);
    }, 400);
  };

  useEffect(() => {
    loader();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {" "}
      <body className="min-h-screen bg-gray-700 text-white p-3">
        <h1 className="text-yellow-200 text-4xl font-bold flex justify-center items-center m-2">
          About Us
        </h1>
        <br />

        <p className="flex font-light text-md m-8 justify-center ">
          Our web application "Crypto Stats" helps users and investors by
          providing information pertaining to various cryptocurrencies and their
          prices at real time. Additionally, the project can predict the
          cryptocurrency prices using a Machine Learning model. The objective of
          our project is to create a highly responsive and interactive web
          application which will provide useful information ex- Bitcoin,
          Ethereum and Dogecoin. The data set includes the price, rising value
          and market cap value in order. Additionally users will be able to
          compare these prices in a chosen time period with the help of a coin
          chart available to them. The application is able to visualize the
          dataset and predict the cryptocurrency price in the future using a
          machine-learning algorithm set, called ARIMA. A cryptocurrency,
          crypto-currency, or crypto is a digital currency designed to work as a
          medium of exchange through a computer network that is not reliant on
          any central authority, such as a government or bank, to uphold or
          maintain it. It is a decentralized system for verifying that the
          parties to a transaction have the money they claim to have,
          eliminating the need for traditional intermediaries, such as banks,
          when funds are being transferred between two entities. Individual coin
          ownership records are stored in a digital ledger, which is a
          computerized database using strong cryptography to secure transaction
          records, control the creation of additional coins, and verify the
          transfer of coin ownership. Despite their name, cryptocurrencies are
          not considered to be currencies in the traditional sense, and while
          varying treatments have been applied to them, including classification
          as commodities, securities, and currencies, cryptocurrencies are
          generally viewed as a distinct asset class in practice. Some crypto
          schemes use validators to maintain the cryptocurrency. In a
          proof-of-stake model, owners put up their tokens as collateral. In
          return, they get authority over the token in proportion to the amount
          they stake. Generally, these token stakers get additional ownership in
          the token over time via network fees, newly minted tokens, or other
          such reward mechanisms. Cryptocurrency does not exist in physical form
          (like paper money) and is typically not issued by a central authority.
          Cryptocurrencies typically use decentralized control as opposed to a
          central bank digital currency (CBDC). When a cryptocurrency is minted,
          or created prior to issuance, or issued by a single issuer, it is
          generally considered centralized. When implemented with decentralized
          control, each cryptocurrency works through distributed ledger
          technology, typically a blockchain, that serves as a public financial
          transaction database. Traditional asset classes like currencies,
          commodities, and stocks, as well as macroeconomic factors, have modest
          exposures to cryptocurrency returns. Autoregressive Integrated Moving
          Average (ARIMA) models have many uses in many industries. It is widely
          used in demand forecasting, such as in determining future demand in
          food manufacturing. That is because the model provides managers with
          reliable guidelines in making decisions related to supply chains.
          ARIMA models can also be used to predict the future price of your
          stocks based on the past prices. Do note, that although they might
          help you predict changes to the S&P 500 Index’s price over time, I am
          so sorry to say, it won’t help you earn quick money by predicting when
          viral stocks like Gamestop (GME) will shoot up next time. That’s
          because ARIMA models are a general class of models used for
          forecasting time series data. ARIMA models are generally denoted as
          ARIMA (p,d,q) where p is the order of autoregressive model, d is the
          degree of differencing, and q is the order of moving-average model.
          ARIMA models use differencing to convert a non-stationary time series
          into a stationary one, and then predict future values from historical
          data. These models use “auto” correlations and moving averages over
          residual errors in the data to forecast future values. The main aim of
          this project was to identify the prediction methods where it is used
          to investigate whether one can predict the price fluctuations
          accurately. By this project, analyzing the data using multiple Machine
          Learning algorithms such as supervised learning, the random forest
          along with sentiment analysis can be possible in the determination of
          predictive analysis of cryptocurrency markets. The machine learning
          algorithms applied for the trading information, data results and
          historic price data can be helped for the predictive analysis of
          cryptocurrencies. The Blockchain technologies are helping to secure
          the data and more securely and with the use of machine learning
          techniques derives the prediction of cryptocurrencies in the future.
        </p>
      </body>
    </>
  );
}
