import mastercraft from "../assets/images/logo-mastercraft.svg";
import bookmark from "../assets/images/icon-bookmark.svg";
import activeBookmark from "../assets/images/icon-bookmark-active.svg";
import { useState } from "react";

export default function MastercraftHeader({ setModal }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setModal((p) => ({ isOpen: true, title: "" }));

    window.scrollTo(0, 100);
  };

  return (
    <header className="mastercraft__header">
      <img
        src={mastercraft}
        className="mastercraft__decoration"
        alt="mastercraft"
      />

      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div>
        <button onClick={handleClick}>
          <a style={{ textDecoration: "none", color: "#fff" }} href="#overlay">
            Back this project
          </a>
        </button>
        <button
          className={`bookmark ${isActive ? "active" : ""}`}
          onClick={() => setIsActive((p) => !p)}
        >
          <img src={isActive ? activeBookmark : bookmark} alt="bookmark" />
          <span>Bookmark</span>
        </button>
      </div>
    </header>
  );
}
