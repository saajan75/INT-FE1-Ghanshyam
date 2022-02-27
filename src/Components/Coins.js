import React, { useState, useEffect } from "react";
import "./Coin.css";
import Dialog from "./Dialog";

const Coins = () => {
 
  const [coins, setCoins] = useState([
    { id: 0, image: "./images/bitcoin.png", name: "Bitcoin", number: 5 },
    { id: 1, image: "./images/cardano.png", name: "Cardano", number: 0 },
    { id: 2, image: "./images/dash.png", name: "Dash", number: 10 },
    { id: 3, image: "./images/dogecoin.jpg", name: "Dogecoin", number: 5 },
    { id: 4, image: "./images/ethereum.png", name: "Ethereum", number: 10 },
    { id: 5, image: "./images/litecoin.png", name: "Litecoin", number: 0 },
    { id: 6, image: "./images/monero.png", name: "Monero", number: 5 },
    { id: 7, image: "./images/neo.png", name: "NEO", number: 10 },
    { id: 8, image: "./images/terra.jpg", name: "Terra", number: 0 },
    { id: 9, image: "./images/tether.png", name: "Tether", number: 5 }
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [wallet, setWallet] = useState(50);
  const [obj, setObj] = useState("");
  const [coinList, setCoinList] = useState([]);

  const buyCoin = (noOfCoins, coinName) => {
    setWallet((prevState) => parseInt(prevState) + parseInt(noOfCoins));
    const coinValueToincrement = coins.filter((c) => c.name === coinName);
    coinValueToincrement[0].number =
      parseInt(coinValueToincrement[0].number) + parseInt(noOfCoins);
    setIsOpen(false);
  };
  const initiateBuying = (thisCoin) => {
    setObj(thisCoin);
    setIsOpen(true);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const showCoins = () => {
    setCoinList(coins);
  };
  useEffect(() => {
    showCoins();
  }, [coins, showCoins]);
  return (
    <div>
      <h3>Number of Unique Crypto You Own <p>{wallet}</p> </h3>
      <h2>Cryptocurrencies</h2>
      <div>
        {coinList.map((c, pos) => {
          return (
            <span className="List" key={pos}>
              <img className="Image" src={c.image} alt="pics" />
              <span className="Name">{c.name}</span>
              <span> {c.number} {" "} </span>
              <button className="btn" onClick={() =>
              initiateBuying(c.name)}>
                Buy
              </button>
            </span>
          );
        })}
        <Dialog 
        title={obj}
        isOpen={isOpen}
        buyCoin={buyCoin}
        />
      </div>
    </div>
  );
};

export default Coins;
