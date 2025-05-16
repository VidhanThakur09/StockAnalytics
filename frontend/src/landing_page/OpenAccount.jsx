import React from "react";

export default function OpenAccount() {
  return (
    <div className="container p-5 mb-5" style={{ color: "#424242" }}>
      <div className="row d-flex justify-content-center">
        <h2 className=" text-center mt-4 title" style={{"fontWeight":"500","fontSize":"2rem"}}>Open a Zerodha account</h2>
        <p className="text-center my-3 subtitle">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button className="mt-3 mb-5 btn fs-5 heroBtn ">
          Sign up for free
        </button>
      </div>
    </div>
  );
}
