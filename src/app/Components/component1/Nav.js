"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoBagOutline, IoChevronDownOutline } from "react-icons/io5";
import "./style.scss";
import Button from "../button/Button";

const Nav = () => {
  const [Scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nav = [
    { name: "Home", path: "/Home" },
    { name: "About", path: "/About" },
    { name: "Feature", path: "/Feature" },
    { name: "Contact ", icon: <IoChevronDownOutline />, path: "/Contact" },
    { name: "Pricing", path: "/Pricing" },
  ];

  return (
    <div className={`navBrand ${Scrolled ? "scrolled" : ""}`}>
      <div className="nav">
        <div className="nav__item">
          <div className="logo">
            <Link href="/">
              <p>Finlab.</p>
            </Link>
          </div>
          <div className="nav_item">
            {nav.map((nav, index) => (
              <div key={index}>
                <Link href={nav.path} className="navItem">
                  <p>
                    {nav.name}
                    <span>{nav.icon}</span>
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="Cart">
          <div>
            <IoBagOutline className="bagIcon" />
          </div>
          <Button text="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
