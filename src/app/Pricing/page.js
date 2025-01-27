import React from "react";
import Price from "../Components/priceComponent/Price";
import "./Style.scss";

const page = () => {
  return (
    <div className="price">
      <div>
        <p className="Text">Flexible options to fit your<br/> financial management
        </p>
        <p className="price_description">Finlab offers transparent and flexible pricing plans designed to cater to individuals,<br/> families, and businesses.</p>
      </div>
      <Price />
    </div>
  );
};

export default page;
