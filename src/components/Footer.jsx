import React from "react";

const Footer = ({ toggleForm }) => {
  return (
    <footer>
      <div className="wrap">
        <div className="lastBlock flex">
          <span>2020. Dnipro, Ukraine</span>
          <button title="click and type message" onClick={toggleForm}>
            Contact me via e-mail
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
