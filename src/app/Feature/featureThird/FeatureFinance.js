import IMAGE from "next/image";
import "./featueFi.scss";

const FeatureFinance = () => {
  return (
    <div className="">
      <div>
        <p className="feature_fi_para">
          Smart tools for smarter
          <br /> financial decisions
        </p>
        <p className="feature_fi_sub">
          Track the growth and engagement of your newsletter subscribers with
          detailed
          <br /> analytics. Understand what works and supercharge your reach.
        </p>
      </div>
      <div className="feature_third_card">
        <div className="feature_fi_card">
          <div>
            <p className="fi_para">Financial goal setting</p>
            <p className="fi_sub">
              Bank-level encryption ensures financial <br />
              information stays private money.
            </p>
          </div>
          <div className="fi_image">
            <IMAGE src="/financefe.jpg" alt="" fill sizes="100vw" />
          </div>
        </div>
        <div className="second-card">
            <div>
                <p className="second_para">Financial insights</p>
                <p className="second_sub">Receive personalized recommendations for optimizing your money.</p>
            </div>
            <div className="fefi_card">
                <div className="fife_card_img">
                <IMAGE
                src="/financefi3.jpg"
                alt=""
                fill
                sizes="100vw"
                />
                </div>
                <div>
                <p className="second_par">Insight Payment</p>
                <p className="second_su">Smart categorization and real-time updates for complete spending visibility. set and achieve savings goals with clear milestones</p>
                </div>
            </div>
        </div>
        <div className="feature_fi_card">
          <div>
            <p className="fi_para">Automated expense tracking</p>
            <p className="fi_sub">
              Bank-level encryption ensures financial <br />
              information stays private money.
            </p>
          </div>
          <div className="fi_image">
            <IMAGE src="/financefi2.jpg" alt="" fill sizes="100vw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureFinance;
