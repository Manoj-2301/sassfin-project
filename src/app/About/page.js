import React from "react";
import Image from "next/image";
import AboutCard from '../Components/card/AboutCard';
import "./style.scss";

const page = () => {
  return (
    <div className="About">
      {/* top */}
      <div>
        <div>
          <div>
            <p className="about_para">
              Empowering your financial <br />
              freedom one smart decision
            </p>
            <p className="about_sub">
              At Finlab, we believe that financial freedom is the cornerstone of
              a fulfilling life. Our <br />
              mission is to empower individuals to money with, clarity, and
              ease.
            </p>
          </div>
          <div className="about_img">
            <div className="about__img">
              <Image
                className="img"
                src="/about-image.jpg"
                fill
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
      {/* middle */}
      <div className="experience">
        <div>
          <p className="expe_num">85+M</p>
          <p>Revenue Generated</p>
        </div>
        <hr />
        <div>
          <p className="expe_num">25k+</p>
          <p>Worldwide Client</p>
        </div>
        <hr />
        <div>
          <p className="expe_num">18+</p>
          <p>Years in the field</p>
        </div>
        <hr />
        <div>
          <p className="expe_num">40+</p>
          <p>Years in field</p>
        </div>
      </div>
      {/* middle second */}
      <div>
        <div className="chooseWrapper">
          <div className="chooseTitle">
            <p>ABOUT US</p>
            <span>What sets us apart?</span>
          </div>
          <div className="chooseDescription">
            <p>
            At Finance, we believe that financial freedom is <br />
            the cornerstone of a fulfilling life. Our mission is<br />
            to empower individuals to take control.
            </p>
          </div>
        </div>
        <AboutCard/>
      </div>
    </div>
  );
};

export default page;
