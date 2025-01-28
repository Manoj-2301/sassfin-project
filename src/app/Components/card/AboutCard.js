import React from "react";
import './aboutStyle.scss';
import { MdInsights } from "react-icons/md";
import { FaShield } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";

const Finance = () => {
  const Img = [
    {
      image: "/amount.jpg",
      icon:<TbBulbFilled />      ,
      Des:"Smart Insights",
      Sub:"Our AI-driven platform analyzes your spending habits and provides personalized recommenda tions to help you make smarter financial.!"
    },
    {
      image: "/currency.jpg",
      icon:<FaShield />,
      Des:"Security You Can Trust",
      Sub:"We prioritize your privacy with bank-grade encryption and strict data protection protocols privacy with bank-grade encryption."
    },
    {
      image: "/trans.jpg",
      icon:<MdInsights />,
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
