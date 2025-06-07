import React from 'react'
import {Tooltip,Grow} from "@mui/material";
import {BarChartOutlined, MoreHoriz,} from "@mui/icons-material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DeleteIcon from '@mui/icons-material/Delete';
export default function WatchListAction({uid}){
  return (
    <span className='actions'>
        <span>
            <Tooltip title="buy (by)" placement='top' arrow TransitionComponent={Grow}>
                <button className='buy'>Buy</button>
            </Tooltip>
            <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
              <button className="sell">Sell</button>
            </Tooltip>
            <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
              <button className="action">
                <FormatListBulletedIcon className="icon" />
              </button>
            </Tooltip>
        <Tooltip title="BarChart" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="Delete" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <DeleteIcon className="icon" />
          </button>
        </Tooltip>
        </span>
    </span>
  )
}

