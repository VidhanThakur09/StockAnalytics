import React,{useContext} from 'react'
import {Tooltip,Grow} from "@mui/material";
import {BarChartOutlined, MoreHoriz,} from "@mui/icons-material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DeleteIcon from '@mui/icons-material/Delete';
import {GeneralContext} from "./GeneralContext.jsx";

export default function WatchListAction({uid=1}){
  const generalContext = useContext(GeneralContext);
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return (
    <span className='actions'>
        <span>
            <Tooltip title="buy (by)" placement='top' arrow TransitionComponent={Grow} onClick={handleBuyClick}>
                <button className='buy'>Buy</button>
            </Tooltip>
            <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
              <button className="sell">Sell</button>
            </Tooltip>
            <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
              <button className="action">
                <i class="fa fa-list" aria-hidden="true"></i>
              </button>
            </Tooltip>
        <Tooltip title="BarChart" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
          </button>
        </Tooltip>
        <Tooltip title="Delete" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </Tooltip>
        </span>
    </span>
  )
}

