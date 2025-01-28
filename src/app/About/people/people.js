import Image from "next/image";
import "./peopleStyle.scss";
const people = () => {
  return (
    <div className="pc">
      <div className="people_page">
        <p className="people_para">
          Amazing people create <br />
          fantastic Features.
        </p>
        <p className="people_sub">
          Track the growth and engagement of your newsletter subscribers with
          <br /> detailed analytics. Understand what works.
        </p>
      </div>
      <div className="people">
        <div className="people_card">
          <div className="people_img">
            <Image src="/people1.jpg" fill alt="people" sizes="100vw" />
          </div>
          <div>
            <p className="people_name">Alex smith</p>
            <p className="people_desgi">Chief technology officer (CTO)</p>
          </div>
        </div>
        {/* second person */}
        <div className="people_card">
          <div className="people_img">
            <Image src="/people2.jpg" fill alt="people" sizes="100vw" />
          </div>
          <div>
            <p className="people_name">David conway</p>
            <p className="people_desgi">Founder & CEO</p>
          </div>
        </div>
        {/* 3rd person */}
        <div className="people_card">
          <div className="people_img">
            <Image src="/people3.jpg" fill alt="people" sizes="100vw" />
          </div>
          <div>
            <p className="people_name">Steven jacsion</p>
            <p className="people_desgi">Account officer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default people;
