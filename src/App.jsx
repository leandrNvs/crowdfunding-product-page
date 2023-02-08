import { useState } from "react";

import Header from "./components/Header";
import MastercraftAbout from "./components/MastercraftAbout";
import MastercraftHeader from "./components/MastercraftHeader";
import MastercraftStats from "./components/MastercraftStats";
import Modal from "./components/Modal";

import "./scss/styles.scss";

export default function App() {
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
  });

  return (
    <>
      <Header />
      <main className="main">
        <MastercraftHeader setModal={setModal} />
        <MastercraftStats />
        <MastercraftAbout setModal={setModal} />
        <Modal modal={modal} setModal={setModal} />
      </main>
    </>
  );
}
