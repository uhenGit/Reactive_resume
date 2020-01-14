import React from "react";

const Header = ({ data, toggleForm }) => {
  //console.log("toggleMap", toggleForm);

  let name, description, occupation, phone, email, address, contactIcons;
  if (data) {
    ({
      name,
      description,
      occupation,
      phone,
      email,
      address,
      contactIcons
    } = data);
  }
  return (
    <header>
      <div className="shadow">
        <div className="wrap">
          <div className="triangle"></div>
          <h1>{name}</h1>
          <h2>{occupation}</h2>
          <h3>{description}</h3>
          <div className="contactMe flex">
            <div className="phoneIcon" title="contact me with messenger">
              <img src={"img/" + contactIcons.phone} alt="" />
              <p>{phone}</p>
            </div>
            <div
              className="mailIcon"
              title="contact me via email"
              onClick={toggleForm}
            >
              <img src={"img/" + contactIcons.mail} alt="" />
              <p>{email}</p>
            </div>
            <div className="locationIcon" title="find me on map">
              <img src={"img/" + contactIcons.location} alt="" />
              <p>{address.street}</p> <p>{address.city}</p> <p>{address.zip}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
