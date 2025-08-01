import React, {useState,useEffect} from "react";
import {Tooltip,Grow} from "@mui/material";
// import {watchlist} from '../data/data.js';
import WatchListItem from "./WatchListItem.jsx";
import { DoughnutChart } from "./DoughnutChart.jsx";
import axios from 'axios';

export default function WatchList() {
  const backendPort = import.meta.env.VITE_BACKEND_PORT;
  const [watchlist, setWatchlist] = useState([]);
  useEffect(()=>{
    axios.get(`${backendPort}/allwatchlist`).then((response) => {
      console.log(response.data);
      setWatchlist(response.data);
    })
  }, [])
  const data = {
  labels: watchlist.map((stock) => stock.name),
  datasets: [
    {
      label: 'Price',
      data: watchlist.map((stock) =>stock.price ),
      backgroundColor: [
        'rgba(255, 99, 132,0.6)',
        'rgba(54, 162, 235,0.6)',
        'rgba(255, 206, 86,0.6)',
        'rgba(75, 192, 192,0.6)',
        'rgba(153, 102, 255,0.6)',
        'rgba(255, 159, 64,0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return <WatchListItem stock={stock} key={index}/>
        })}
      </ul>
      <DoughnutChart data={data}/>
    </div>
  );
};

