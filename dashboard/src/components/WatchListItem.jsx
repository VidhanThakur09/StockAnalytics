import React from 'react'
import {KeyboardArrowDown, KeyboardArrowUp} from '@mui/icons-material';
import WatchListAction from './WatchListAction.jsx';
export default function WatchListItem ({stock}){
    const [showWatchListActions, setShowWatchListActions] = React.useState(false);
    const handleMouseEnter = () => {
        setShowWatchListActions(true);
    }
    const handleMouseLeave = () => {
        setShowWatchListActions(false);
    }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="item">
            <p className={stock.isDown?"down":"up"}>{stock.name}</p>
            <div className="item-info">
                <span className='percent'>{stock.percent}</span>
                {stock.isDown ?(<KeyboardArrowDown className="down"/>) : (<KeyboardArrowUp className="up"/>)}
                <span className='price'>{stock.price}</span>
            </div>
        </div>
        {showWatchListActions && <WatchListAction uid={stock.uid} />}
    </li>
  )
}

