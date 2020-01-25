import React, { useState } from "react";

import "./components/style.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Form from "./components/Form";
import Footer from "./components/Footer";
import resumeAPI from "./resumeData";

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
