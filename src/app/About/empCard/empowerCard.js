import Image from "next/image";
import "./emStyle.scss";

const empowerCard = () => {
  return (
    <div className="empower">
      <div className="em_card">
        <div className="em_card1">
          <p className="em_para">
            Business all-ready running finlab revolutionizing financial
          </p>
          <p className="em_subpara">
            To transform how people perceive and interact with their finances,
            making money.
          </p>
          <div className="em_img">
            <Image src="/emcard.jpg" alt="em "fill sizes="100vw" />
          </div>
        </div>
        {/* card2 */}
        <div className="em_card1">
          <p className="em_para">
          Change the way you use your money revolution
          </p>
          <p className="em_subpara">
          Founded on the principle of making financial management simple and accessible.
          </p>
          <div className="em_img">
            <Image src="/emcard1.jpg" alt="em "fill sizes="100vw" />
          </div>
        </div>
        {/* card3 */}
        <div className="em_card1 em_card2">
          <p className="em_para">
          One app for all your money things make your payment
          </p>
          <p className="em_subpara">
          Join the thousands of users who are already mastering their money with Finlab.
          </p>
          <div className="em_img">
            <Image src="/emcard.jpg" alt="em "fill sizes="100vw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default empowerCard;
