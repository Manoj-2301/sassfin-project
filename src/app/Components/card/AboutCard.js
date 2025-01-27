import React from "react";
import './aboutStyle.scss'

const Finance = () => {
  const Img = [
    {
      image: "/amount.jpg",
      Des:"Smart Insights",
      Sub:"Our AI-driven platform analyzes your spending habits and provides personalized recommenda tions to help you make smarter financial.!"
    },
    {
      image: "/currency.jpg",
      Des:"Security You Can Trust",
      Sub:"We prioritize your privacy with bank-grade encryption and strict data protection protocols privacy with bank-grade encryption."
    },
    {
      image: "/trans.jpg",
      Des:"Seamless Experience",
      Sub:"With integrations across banks, credit cards, and other financial tools, managing your money has never been -grade encryption.."
    },
  ];
  return (
    <div className="About_card">
      <div className="ChooseBox">
        {Img.map((img) => (
          <div>
            <div className="ChoosePara">
              <p className="auto">{img.Des}</p>
              <p className="ChooseSub">
                {img.Sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Finance;
