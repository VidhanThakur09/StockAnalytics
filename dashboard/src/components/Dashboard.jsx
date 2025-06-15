import React from "react";
import { Route, Routes} from "react-router-dom";

import Analyze from "./Analyze.jsx";
import Funds from "./Funds.jsx";
import Holdings from "./Holdings.jsx";

import Orders from "./Orders.jsx";
import Positions from "./Positions.jsx";
import Summary from "./Summary.jsx";
import WatchList from "./WatchList.jsx";
import  GeneralContextProvider from "./GeneralContext.jsx";

export default function Dashboard(){
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/*" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/analyze" element={<Analyze />} />
        </Routes>
      </div>
    </div>
  )
}

