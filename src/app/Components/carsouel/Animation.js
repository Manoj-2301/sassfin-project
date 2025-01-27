import Image from "next/image";
import "./style.scss";

const Animation = () => {
  const image = [
    {
      logo: "/logo1.svg",
      logos: "/logo1.svg",

    },
    {
      logo:'/logo2.svg',
      logos:'/logo2.svg',

    },
    {
      logo: "/logo3.svg",
      logos: "/logo3.svg",

    },
    {
      logo: "/logo4.svg",
      logos: "/logo4.svg",

    },
    {
      logo: "/logo5.svg",
      logos: "/logo5.svg",

    },
    {
      logo: "/logo6.svg",
      logos: "/logo6.svg",

    },
    {
      logo: "/logo7.svg",
      logos: "/logo7.svg",

    },
    {
      logo: "/logo4.svg",
      logos: "/logo4.svg",

    },
    {
      logo: "/logo5.svg",
      logos: "/logo5.svg",

    },
  ];
  return (
    <div className="animator">
      <div className="animation">
        {image.map((image) => (
          <div className="imgBox">
            <Image src={image.logo} alt="img" size="100vh" width={50} height={50} />
          </div>
        ))}
      </div>
      <div className="animation">
        {image.map((image) => (
          <div className="imgBox2">
            <Image src={image.logos} alt="img" size="100vh" width={50} height={50} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Animation;
