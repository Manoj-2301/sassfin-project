import Button from "../Components/button/Button";
import Animation from "../Components/carsouel/Animation";
import Finance from "../Components/component2/Finance";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaChevronCircleRight } from "react-icons/fa";
import { LuRocket } from "react-icons/lu";
import Cards from '../Components/component3/card'
import "./style.scss";
import Price from "../Components/priceComponent/Price";

const page = () => {
  return (
    <div>
      <div className="bg">
        <div className="main">
          <Button
            icon={"🌟"}
            text="4.9 (5k+reviews)"
            p={"9px 50px"}
            color="white"
            tcolor="#6481f1"
          />
          <div className="mainPara">
            <p>
              Management🏦and <br />
              payments💵 in a single place.
            </p>
          </div>
          <div className="subPara">
            <p>
              The Stacks series of products: Stacks: Landing Page Kit, Stacks:
              Portfolio Kit, Stacks: eCommerce
              <br /> Kit. "Stacks is a production-ready library of stackable
              content blocks built in React Native.
            </p>
          </div>
          <div>
            <form className="cta">
              <input type="email" placeholder="enter your email" />
              <Button
                type="submit"
                text="freeTrial"
                color="black"
                tcolor="white"
              />
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div className="ClientWrapper">
        <div className="clientPara">
          <p>Our Recent Clients & partners</p>
        </div>
        <Animation className="AnimatorCom" />
        <div className="clientSubPara">
          <p>
            We offer the best financial services for you in terms that our
            services are secure
          </p>
        </div>
        <hr />
      </div>
      <div className="">
        <div className="chooseWrapper">
          <div className="chooseTitle">
            <p>Why Choose Us</p>
            <span>Easy, Simple, Affordable</span>
          </div>
          <div className="chooseDescription">
            <p>
              Our platform helps your business in managing <br />
              expenses. These are some of the reasons why <br />
              you should use our platform in business.
            </p>
          </div>
        </div>
        <Finance />
        {/* after choose conatiner */}
        <div>
          <div className="PaymentContainer">
            <p className="PaymentPara">
              Our Get payment Visualization
              <br /> with precision dataplan
            </p>
            <p className="PaymentSub">
              Track the growth and engagement of your newsletter subscribers
              <br />
              with detailed analytics. Understand what works and supercharge
              your reach.
            </p>
          </div>
        </div>

        {/* after payment container */}
        <div
          classname="send_wrapper"
          style={{ backgroundColor: "#f7f9fa", padding: "1px" }}
        >
          <div className="send_container">
            <div className="send_para">
              <div className="send_heading">
                <TiTick className="send_tick" />
                <p>Local and International Payments</p>
              </div>
              <div className="send_subheading">
                <p>
                  Send money locally <br />
                  and internationally
                </p>
              </div>
              <div className="send_des">
                <p>
                  Track the growth and engagement of your newsletter
                  <br /> subscribers with detailed analytics. Understand what{" "}
                  <br />
                  works and supercharge your reach.
                </p>
              </div>
              <div className="send_work_btn">
                <FaPlay />
                <p> How it works</p>
              </div>
            </div>
            <div className="send_image">
              <Image
                className="img"
                src="/send.jpg"
                alt=""
                fill
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        {/* after send container */}

        <div className="insight_wrapper">
          <div className="insight_content">
            <div className="insight_para">
              <p className="insight_heading">
                Control Your
                <br />
                cashflow with insights
              </p>
              <p className="insight_sub">
                understand what works and supercharge your reach
              </p>
              <div className="insight_img">
                <Image
                  src="/insight.jpg"
                  fill
                  alt=""
                  // width={450}
                  // height={450}
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="insight_content">
              <div className="insight_para">
                <p className="insight_heading">
                  Stay up to speed
                  <br />
                  with notifications
                </p>
                <p className="insight_sub">
                  Track the growth and engagement of your newsletter subscribers
                  with detailed analytics. Understand what works and supercharge
                  your reach.
                </p>
                <div className="learn">
                  <p>learn more</p>
                </div>
                <div className="insight_country">
                  <div className="insight_flag">
                    <div className="flag">
                      <Image src="/flag.svg" width={36} height={36} />
                    </div>
                    <div className="flag">
                      <Image src="/flag.svg" width={36} height={36} />
                    </div>
                    <div className="flag">
                      <Image src="/flag.svg" width={36} height={36} />
                    </div>
                  </div>
                  <div className="insight_flag">
                    <div className="flag">
                      <Image src="/flag.svg" width={36} height={36} />
                    </div>
                    <div className="flag">
                      <Image src="/flag.svg" width={36} height={36} />
                    </div>
                    <div className="flag">
                      <Image src="/flag.svg" width={36} height={36} />
                    </div>
                  </div>
                  <div className="insight_flag">
                    <div className="flag">
                      <Image src="/flag.svg" width={36} height={36} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* after isight image */}
      </div>
      <div className="tool_wrapper">
        <div className="tool_para">
          <p>
            More that just a <br />
            scheduling tool
          </p>
        </div>
        <div className="tool_sub">
          <p>
            Track the growth and engagement of your newsletter subscribers
            <br /> with detailed analytics. Understand what works
          </p>
        </div>
        <div className="tool_btn">
          <Button text="Learn more" color="black" tcolor="white" />
          <Button text="Learn More" />
        </div>
      </div>
      <div className="card_wrapper">
        <div className="card_para">
          <p>Our pricing plan</p>
        </div>
        <div className="card_subpara">
          <p>
            Our platform helps your business in managing expenses. These are
            some <br />
            of the reasons why you should use our platform in business.
          </p>
        </div>
        {/* cards price */}
        <Price/>
      </div>
      {/* customer */}

      <div className="customer_wrapper">
        <div className="customer_heading">
          <p className="customer_para">Customer sweet words</p>
          <p className="customer_sub ">
            We offer the best financial services for you in terms that our
            services are secure.
            <br /> We’re exist assist you financial plannings, and celebrate
            your achievment
          </p>
        </div>
        {/* customer card */}
        <div className="middle_card_box">
          {/* cadrd1 */}
          <div className="card_main">
            <div className="customer_card">
              <div>
                <p className="customer_heading">Trusted partners</p>
                <p className="customer_main_heading">
                  Hosh has quickly built trust with us as a partner in solor
                  finding candidates for our growing team.
                </p>
              </div>
              <hr className="line" />
              <div className="Customer_review">
                <div className="customer_pic"></div>
                <div className="star">
                  <p>⭐ 4.9</p>
                </div>
              </div>
            </div>
            <div className="design_box">
              <p>⭐4.9</p>
            </div>
          </div>
          {/* card2 */}
          <div className="middle_card">
            <div className="middle_bg">
              <div>
                <Image src="/quatation.svg" width={35} height={35} />
              </div>
              <div>
                <p className="middle_card_heading">Trusted partners</p>
                <p className="middle_main_heading">
                  Hosh has quickly built trust with us as a partner in solor
                  finding candidates for our growing team.
                </p>
              </div>
              <hr className="line" />
              <div className="middle_review">
                <div className="middle_pic"></div>
                <div className="middle_customer">
                  <p>Jessica Redman</p>
                  <p className="ceo"> Ceo of world Cafe</p>
                </div>
                <div className="star">
                  <p>⭐ 4.9</p>
                </div>
              </div>
            </div>
          </div>
          {/* card 3rd */}
          <div className="card_main">
            <div className="design_box cardi">
              <p>⭐ 4.9</p>
            </div>
            <div className="customer_card">
              <div>
                <p className="customer_heading">Trusted partners</p>
                <p className="customer_main_heading">
                  Hosh has quickly built trust with us as a partner in solor
                  finding candidates for our growing team.
                </p>
              </div>
              <hr className="line" />
              <div className="Customer_review">
                <div className="customer_pic"></div>
                <div className="star">
                  <p>⭐ 4.9</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* frequently asked question */}
      <div className="FAQ">
        <div className="faq">
            <p className="faq_heading">Frequently Asked<br/> Questions</p>
            <p className="faq_sub">Track the growth and engagement of your <br/>newsletter subscribers with analytics.</p>
            <p className="learn_btn">
              Learn more
            </p>
        </div>
        <div>
          <Cards/>
        </div>
      </div>

    </div>
  );
};

export default page;
