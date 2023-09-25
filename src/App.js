import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";

function App() {
  const [card, setCard] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  const [confirmed, setConfirmed] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
    if (
      card.name?.match(/\d+/g) == null &&
      card.number?.length === 16 &&
      card.cvc?.length === 3
    ) {
      setDisplay(true);
      toast.success("Card Details Added", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      setDisplay(false);
    }
  };

  return (
    <>
      <main>
        <div className="card-area">
          <CardFront card={card} display={display} />
          <CardBack cvc={card.cvc} display={display} />
        </div>
        <div className="form-area">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">cardholder name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={card.name}
              onChange={(e) => {
                setCard({ ...card, [e.target?.name]: e.target?.value });
              }}
              placeholder="e.g. Jane Appleseed"
              pattern="[A-Za-z ]{3,}"
              required
            />

            <span>
              {card.name?.match(/\d+/g) == null ? " " : "only alphabets"}
            </span>

            <label htmlFor="number">Card Number </label>
            <input
              type="number"
              name="number"
              id="number"
              value={card.number}
              placeholder="e.g. 1234 5678 9123 0000"
              required
              onChange={(e) => {
                setCard({ ...card, [e.target?.name]: e.target?.value });
              }}
            />
            <span>
              {confirmed && card.number?.length < 16 ? "only 16 numbers" : " "}{" "}
            </span>
            <div className="form-grid">
              <div>
                <label htmlFor="date">exp. date (mm/yy)</label>
                <input
                  type="number"
                  name="month"
                  id="mm"
                  placeholder="mm"
                  value={card.month}
                  required
                  pattern="[0-9]+"
                  min={1}
                  max={12}
                  onChange={(e) => {
                    setCard({ ...card, [e.target?.name]: e.target?.value });
                  }}
                />
                <input
                  type="number"
                  name="year"
                  id="yy"
                  value={card.year}
                  placeholder="yy"
                  required
                  min={2023}
                  max={2300}
                  pattern="/d*{2}"
                  onChange={(e) => {
                    setCard({ ...card, [e.target?.name]: e.target?.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="cvc">cvc</label>
                <input
                  type="number"
                  id="cvc"
                  name="cvc"
                  value={card.cvc}
                  placeholder="e.g. 123"
                  required
                  pattern="[0-9]{3}"
                  onChange={(e) => {
                    setCard({ ...card, [e.target?.name]: e.target?.value });
                  }}
                />

                <span>
                  {" "}
                  {confirmed && card.cvc?.length !== 3
                    ? "can't be empty, should be 3 numbers"
                    : ""}
                </span>
              </div>
            </div>
            <button type="submit" className="btn">
              Confirm
            </button>
          </form>
        </div>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
