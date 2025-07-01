import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext.jsx";
import '/public/css/BuyActionWindow.css';
// import axios from 'axios';

const BuyActionWindow = ({ uid }) => {
  const backendPort = import.meta.env.VITE_BACKEND_PORT;
  const [stockData, setStockData] = useState([]);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  useEffect(()=>{
    axios.post(`${backendPort}/stock/${uid}`).then((response) => {
      console.log(response.data);
      setStockData(response.data);
      setStockPrice(response.data.price || 0.0);
    })
  }, [])

  const handleSellClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: stockData.name,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });

    GeneralContext.closeSellWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Name</legend>
            <p>{stockData.name}</p>
          </fieldset>
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min={"0"}
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required {stockQuantity * stockPrice * 0.1}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;