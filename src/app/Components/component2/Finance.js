import React from "react";
import "./style.scss"
import Image from "next/image";

const Finance = () => {
  const Img = [
    {
      image: "/amount.jpg",
      Des:"Automatic Invoice Payment",
      Sub:"No need to pay manually, we provide automatic invoice payment service and you're done, it's that easy!"
    },
    {
      image: "/currency.jpg",
      Des:"Clear payment history",
      Sub:"Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!"
    },
    {
      image: "/trans.jpg",
      Des:"Use of multi Currency",
      Sub:"Have more than 1 bank account credit. Our platform is already integrated with many banks around the world."
    },
  ];
  return (
    <div className="Box">
      <div className="ChooseBox">
        {Img.map((img) => (
          <div className="cb">
            <div className="ChooseImg">
              <Image
                src={img.image}
                className="img"
                width={320}
                height={320}
                alt=""
              />
            </div>
            <div className="ChoosePara">
              <p className="auto">{img.Des}</p>
              <p className="ChooseSub">
                {img.Sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Finance;
