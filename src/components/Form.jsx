import React, { useState } from "react";
import axios from "axios";

const Form = ({ socialRef, setSend }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmitMail = (e) => {
    e.preventDefault();
    axios
      .post("https://portefoliojimmyganci.herokuapp.com/", {
        firstname: firstName,
        lastname: lastName,
        email: email,
        subject: " ",
        text: text,
      })
      .then((res) => res.status === 200 && setSend(true));
    setFirstName("");
    setLastName("");
    setEmail("");
    setText("");
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmitMail(e)}>
      <div className="form__textarea">
        <label>
          <p>Cher Jimmy,</p>
          <textarea
            name="text"
            id="text"
            cols="50"
            rows="5"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ecrivez votre message..."
            required
          ></textarea>
        </label>
      </div>
      <div>
        <label>
          Mon prénom est
          <input
            value={firstName}
            autoComplete="off"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          et mon nom est
          <input
            type="text"
            value={lastName}
            autoComplete="off"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Tu peux me joindre à cette adresse
          <input
            type="email"
            id="email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="form__button">
        <button ref={socialRef} type="submit">
          ENVOYER
        </button>
      </div>
    </form>
  );
};

export default Form;
