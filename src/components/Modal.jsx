import { useEffect, useRef, useState } from "react";

import closeModal from "../assets/images/icon-close-modal.svg";
import checkIcon from "../assets/images/icon-check.svg";

import Overlay from "./Overlay";
import { getData } from "../products";

function Card({
  title,
  subtitle,
  children,
  left,
  min,
  selected,
  setIsSelected,
}) {
  const disabled = left === 0 ? true : false;
  const isSelected = selected === title;

  const handleClick = () => {
    if (!disabled) {
      setIsSelected(title);
    }
  };

  return (
    <div
      className={`card ${disabled ? "disabled" : ""} ${
        isSelected ? "active" : ""
      }`}
      onClick={handleClick}
    >
      <div className="card__description">
        <div className="card__header">
          <div className={`card__icon ${isSelected ? "active" : ""}`}></div>
          <div>
            <h3>{title}</h3>
            <span className="subtitle">{subtitle}</span>
            <div>
              <span>{left}</span>
              <span>{left > 0 ? left : ""}</span>
            </div>
          </div>
        </div>
        <p>{children}</p>
        <div className="card__footer">
          <div>
            <span>{left}</span>
            <span>{left > 0 ? "left" : ""}</span>
          </div>
        </div>
      </div>
      {!disabled && isSelected && (
        <div className="card__input">
          {left !== null && <label>Enter your pledge</label>}

          {left === null ? (
            <input type="hidden" value="no-reward" name="pledge" />
          ) : (
            <input type="text" defaultValue={min} name="pledge" />
          )}

          <button
            style={{
              marginLeft: left === null ? "auto" : "",
              marginRight: left === null ? "1rem" : "",
            }}
            type="submit"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default function Modal({ modal, setModal }) {
  const [selected, setIsSelected] = useState("");
  const [completed, setCompleted] = useState(false);
  const modalRef = useRef();
  let data = getData();

  useEffect(() => {
    setModal((p) => ({ ...p, title: "" }));
  }, [selected]);

  const el = data.map((obj) => {
    return (
      <Card
        key={obj.title}
        title={obj.title}
        subtitle={obj.subtitle}
        left={obj.left}
        min={obj.min}
        selected={modal.title !== "" ? modal.title : selected}
        setIsSelected={setIsSelected}
      >
        {obj.text}
      </Card>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setCompleted(true);

    window.scrollTo(0, 100);
  };

  if (completed) {
    return (
      <>
        <div className={`modal completed ${modal.isOpen ? "active" : ""}`}>
          <img src={checkIcon} alt="" />
          <h2>Thanks for your support!</h2>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button
            onClick={() => {
              setModal({ isOpen: false, title: "" });
              setCompleted(false);
            }}
          >
            Got it!
          </button>
        </div>
        <Overlay isOpen={modal.isOpen} />
      </>
    );
  }

  return (
    <>
      <div className={`modal ${modal.isOpen ? "active" : ""}`}>
        <button onClick={() => setModal({ isOpen: false, title: "" })}>
          <img src={closeModal} alt="close modal" />
        </button>

        <h2>Back this project</h2>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        <form className="form" onSubmit={handleSubmit}>
          {el}
        </form>
      </div>
      <Overlay isOpen={modal.isOpen} />
    </>
  );
}
