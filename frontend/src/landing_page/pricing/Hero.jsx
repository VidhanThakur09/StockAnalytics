import React from 'react'

export default function Hero() {
  return (
    <div className="container p-5">
      <div className="row p-5 border-bottom text-center my-5">
        <h1 className='fs-1'>
          Pricing
        </h1>
        <h3 className='text-muted fs-5 mt-3'>Free equity investments and flat ₹20 traday and F&O trades</h3>
      </div>
      <div className="row p-2 mt-5 text-muted text-center">
        <div className="col-4 p-4">
          <img src="images/pricing0.svg" alt="0" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="images/intradayTrades.svg" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="images/pricingEquity.svg" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  )
}

