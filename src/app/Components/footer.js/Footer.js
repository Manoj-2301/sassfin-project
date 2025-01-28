import React from "react";
import "./footerStyle.scss";
import Button from "../button/Button";
import { FaInstagram , FaXTwitter,FaSquareBehance} from "react-icons/fa6";


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
              <p className="logofooter">Finlab.</p>
              <p className="logoSub">Our platform i deisgned to you do business</p>
            </div>
            <div className="icon">
            <FaInstagram />
            <FaXTwitter />
            <FaSquareBehance />


            </div>
          </div>
          <div className="second_side">
            <div>
              <p className="footerP">Pages</p>
              <div className="footer_sub">
                <p>Home</p>
                <p>About</p>
                <p>Feature</p>
                <p>Career</p>
                <p>Blog</p>
              </div>
            </div>
            <div>
              <p className="footerP">Pages</p>
              <div className="footer_sub">
                <p>integration</p>
                <p>Pricing</p>
                <p>Contact</p>
                <p>FAQs</p>
              </div>
            </div>
            <div>
              <p className="footerP">Utility pages</p>
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
        <hr/>
        <div className="copy">
          <p>© Copyright 2024 | Design & Developed By <span>Onixtheme - License</span> | Powered By Webflow</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
