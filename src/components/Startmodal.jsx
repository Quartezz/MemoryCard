import React, { useState } from "react";
import "../styles/StartModal.scss";

export default function StartModal() {
  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div
      className="start-modal"
      style={{ display: modalVisible ? "block" : "none" }}
    >
      <div className="modalContent">
        <h1>Welcome Summoner!</h1>
        <p>
          The goal of this game is to click on champions you haven't clicked on
          yet.
          <br />
          After several tries the number of champions increases by 2.
          <br />
          The maximum score is 40.
          <br />
          Good luck!
        </p>
        <button onClick={closeModal} className="closeButton">
          Let's start!
        </button>
      </div>
    </div>
  );
}
