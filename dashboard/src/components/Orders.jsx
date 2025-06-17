import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allorders").then((response) => {
      setOrders(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {orders.map((order, index) => {
            return (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td className= {order.mode === "BUY"? "profit" : "loss"} style={{fontSize: "14px"}}>{order.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="orders">
        {orders.length === 0 ? (
          <div className="no-orders">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        ) : (
          <div className="order-summary">
            <p>You have placed {orders.length} orders today</p>
          </div>
        )}
      </div>
    </>
  );
}

