import IMAGE from "next/image";
import "./style.scss";

const Animation = () => {
  return (
    <div className="animator">
      <div>
        <div className="animation2">
          <div className="ani1">
            <IMAGE src="/logo1.svg" width={100} height={50} />
          </div>
          <div className="ani1">
            <IMAGE src="/logo2.svg" width={50} height={50} />
          </div>
          <div className="ani1">
            <IMAGE src="/logo3.svg" width={50} height={50} />
          </div>
          <div className="ani1">
            <IMAGE src="/logo4.svg" width={100} height={50} />
          </div>
          <div className="ani1">
            <IMAGE src="/logo5.svg" width={50} height={50} />
          </div>
        </div>
        <div className="animation">
          <div className="ani1">
            <IMAGE src="/logo1.svg" width={100} height={50} />
          </div>
          <div className="ani1">
            <IMAGE src="/logo2.svg" width={50} height={50} />
          </div>
          <div className="ani1">
            <IMAGE src="/logo3.svg" width={50} height={50} />
          </div>
          <div className="ani1">
            <IMAGE src="/logo4.svg" width={100} height={50} />
          </div>
          <div className="ani1">
            <IMAGE src="/logo5.svg" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
