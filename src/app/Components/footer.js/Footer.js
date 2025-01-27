import React from "react";
import "./footerStyle.scss";
import Button from "../button/Button";

const Footer = () => {
  return (
    <div>
      <div className="footer_bg">
        <div className="footer_inner_bg">
          <div>
            <Button
              icon="🌟"
              text="4.9(5k+ review)"
              p={"10px 30px "}
              color="white"
            />
            <div className="Trans">
              <p>
                Transform How You
                <br /> Manage Your 💵 Money
              </p>
            </div>
          </div>
          <div className="text">
            <div className="texts">
              <p className="track">
                Track the growth and engagement of your <br />
                newsletter subscribers with detailed analytics.
                <br /> Understand what works
              </p>
              <Button
                text="Free Trial"
                color="black"
                tcolor="white"
                p={"20px 150px"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
