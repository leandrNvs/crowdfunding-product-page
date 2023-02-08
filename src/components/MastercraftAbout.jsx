import { useState } from "react";
import { getData } from "../products";
import Modal from "./Modal";

function Card({ title, subtitle, children, left, setModal }) {
  const disabled = left === 0 ? true : false;

  const handleClick = () => {
    setModal({ isOpen: true, title });
    window.scrollTo(0, 100);
  };

  return (
    <div className={`card ${disabled ? "disabled" : null}`}>
      <div className="card__header">
        <h3>{title}</h3>
        <span className="subtitle">{subtitle}</span>
      </div>
      <p>{children}</p>
      <div className="card__footer">
        <div>
          <span>{left}</span>
          <span>left</span>
        </div>
        <button disabled={disabled} onClick={handleClick}>
          {disabled ? "Out of stock" : "Select reward"}
        </button>
      </div>
    </div>
  );
}

export default function MastercraftAbout({ setModal }) {
  const data = getData().filter((obj) => obj.left !== null);

  const el = data.map((obj) => {
    return (
      <Card
        key={obj.title}
        title={obj.title}
        subtitle={obj.subtitle}
        left={obj.left}
        setModal={setModal}
      >
        {obj.text}
      </Card>
    );
  });

  return (
    <>
      <div className="mastercraft__about">
        <h2>About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>

        <div className="mastercraft__cards">{el}</div>
      </div>
    </>
  );
}
