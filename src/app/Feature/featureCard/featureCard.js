import React from "react";
import IMAGE from "next/image";
import "./card.scss";

const featureCard = () => {
  return (
    <div className="feature-card">
      <div className="feature_card1">
        <div>
          <p className="feature_para">
            Track spending in real-time <br />
            and stay on top of your
            <br /> financial goals.
          </p>
          <p className="feature_sub_para">
            At Finlab, we believe that financial freedom is the cornerst
            <br /> one of a fulfilling life. Our mission is to empower.
          </p>
          <p>How it works</p>
        </div>
        <div className="feature_img">
          <IMAGE src="/fetaurefi.jpg" alt="feature" fill sizes="100vw" />
        </div>
      </div>
      {/* car d2 */}
      <div className="feature_card2">
        <p>Automatically categorize<br/> visualize your transactions.</p>
        <p>
          At Finlab, we believe that financial freedom is <br/>the corners one of a
          fulfilling life. Our mission is to empower.
        </p>
        <div className="feature_img">
            <IMAGE src="/featurefi2.jpg"
        alt="fea"
        fill
        sizes='100vw'/>
        </div>
      </div>
    </div>
  );
};

export default featureCard;
