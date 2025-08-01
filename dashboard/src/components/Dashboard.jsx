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
import Stock_Analyzer from "./Stock_Analyzer.jsx";

export default function Dashboard({userName}) {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/*" element={<Summary userName={userName} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/analyze" element={<Stock_Analyzer />} />
        </Routes>
      </div>
    </div>
  )
}

