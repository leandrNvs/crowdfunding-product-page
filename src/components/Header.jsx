// IMAGES
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close-menu.svg";
import bgMobile from "../assets/images/image-hero-mobile.jpg";
import bgDesktop from "../assets/images/image-hero-desktop.jpg";
// REACT IMPORTS
import { useState } from "react";
// COMPONENTS
import Overlay from "./Overlay";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1>
            <img src={logo} className="header__logo" alt="crowdfund" />
          </h1>
          <nav className={`navbar ${isOpen ? "active" : null}`}>
            <a href="#">About</a>
            <a href="#">Discover</a>
            <a href="#">Get started</a>
          </nav>
          <button className="header__button" onClick={handleClick}>
            <img src={isOpen ? close : hamburger} alt="toggle menu" />
          </button>
        </div>
        <img src={bgMobile} className="header__mobile" alt="" />
        <img src={bgDesktop} className="header__desktop" alt="" />
      </header>
      <Overlay isOpen={isOpen} />
    </>
  );
}
