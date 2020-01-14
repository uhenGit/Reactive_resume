import React, { useState } from "react";

const Form = ({ toggleForm }) => {
  const info = { name: "", mail: "", text: "" };
  const [inputName, changeInputName] = useState("");
  const [inputMail, changeInputMail] = useState("");
  const [inputText, changeInputText] = useState("");

  const changeName = e => changeInputName(e.target.value);
  const changeMail = e => changeInputMail(e.target.value);
  const changeText = e => changeInputText(e.target.value);
  //console.log("data in form from app", data);
  const submitForm = e => {
    e.preventDefault();
    info.name = inputName;
    info.mail = inputMail;
    info.text = inputText;
    console.log("Form submit!", info);
    setTimeout(() => {
      toggleForm();
    }, 100);
  };
  return (
    <div className="popup" onClick={toggleForm}>
      <div className="inner" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={toggleForm}>
          close
        </button>
        <form onSubmit={submitForm}>
          <div className="labelWrap flex">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              onChange={changeName}
              placeholder="type Your name here"
              value={inputName}
            />

            <label htmlFor="email">Your e-mail</label>
            <input
              type="email"
              name="email"
              onChange={changeMail}
              placeholder="type Your e-mail here"
              value={inputMail}
            />

            <label htmlFor="textfield">Your message</label>
            <textarea
              name="textfield"
              cols="30"
              rows="10"
              onChange={changeText}
              value={inputText}
            ></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
