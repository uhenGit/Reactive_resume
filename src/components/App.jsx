import React, { useState } from "react";

import "./style.css";

import Header from "./Header";
import Navigation from "./Navigation";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";
import resumeAPI from "../resumeData";

const App = () => {
  const data = resumeAPI.getAll();
  const [toggleForm, setToggleForm] = useState(false);

  const changeToggle = () => setToggleForm(!toggleForm);
  return (
    <div>
      <Header data={data.main} toggleForm={changeToggle} />
      <Navigation />
      {toggleForm ? <Form toggleForm={changeToggle} /> : null}
      <Main data={data} />
      <Footer data={data.main} toggleForm={changeToggle} />
    </div>
  );
};

export default App;
