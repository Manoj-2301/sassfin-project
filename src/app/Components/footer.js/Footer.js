import React from "react";
import "./footerStyle.scss";
import Button from "../button/Button";

const Footer = () => {
  return (
    <div className="foot">
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
        <div className="middle_footer">
          <div className="first_side ">
            <div>
              <p>Finlab</p>
              <p>Our platform i deisgned to you do business</p>
            </div>
            <div>
              <p>i</p>
              <p>e</p>
              <p>w</p>
              <p>y</p>
            </div>
          </div>
          <div className="second_side">
            <div>
              <p>Pages</p>
              <div className="footer_sub">
                <p>Home</p>
                <p>About</p>
                <p>Feature</p>
                <p>Career</p>
                <p>Blog</p>
              </div>
            </div>
            <div>
              <p>Pages</p>
              <div className="footer_sub">
                <p>integration</p>
                <p>Pricing</p>
                <p>Contact</p>
                <p>FAQs</p>
              </div>
            </div>
            <div>
              <p>Utility pages</p>
              <div className="footer_sub">
                <p>Style Guide</p>
                <p>License</p>
                <p>Pass Protected</p>
                <p>Change log</p>
                <p>404</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
