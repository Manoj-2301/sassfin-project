import Link from "next/link";
import { IoBagOutline, IoChevronDownOutline } from "react-icons/io5";
import "./style.scss";
import Button from "../button/Button";

const Nav = () => {
  const nav = [
    {
      name: "Home",
      path: "/Home",
    },
    ,
    {
      name: "About",
      path: "/About",
    },
    {
      name: "Feature",
      path: "/Feature",
    },
    {
      name: "Pages ",
      icon: <IoChevronDownOutline />,
      path: "/Contact",
    },
    {
      name: "Pricing",
      path: "/Pricing",
    },
  ];
  return (
    <div className="navBrand">
      <div className="nav">
        <div className="logo">
          <Link href="/">
            <p>Finlab.</p>
          </Link>
        </div>
        <div className="nav_item">
          {nav.map((nav) => (
            <div>
              <Link href={nav.path} className="navItem">
                <p>
                  {nav.name}
                  <span>{nav.icon}</span>
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="Cart">
          <div>
            <IoBagOutline className="bagIcon" />
          </div>
          <Button text="Get Started" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Nav;
