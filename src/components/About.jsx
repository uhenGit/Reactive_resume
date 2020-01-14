import React, { useState } from "react";
import ProgressBar from "react-animated-progress-bar";

const About = data => {
  //console.log("data from About");
  const [showBtn, toggleShowBtn] = useState(false);
  const clickBtn = () => toggleShowBtn(!showBtn);
  return (
    <div className="about wrap">
      <div className="flex">
        <section>
          <h2>About Me</h2>
          <article>{data.bio}</article>
        </section>
        <img src={"img/" + data.image} alt="profile" />
        <section className="skills">
          <h2>Skills Level</h2>
          <div className={showBtn ? "active skillist" : "skillist"}>
            {data.skills.map((item, index) => {
              return (
                <div key={index} className="skill">
                  <span>{item.name}</span>
                  <ProgressBar
                    width="200px"
                    height="10px"
                    rect
                    fontColor="gray"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                    percentage={item.level}
                  />
                </div>
              );
            })}
          </div>
          <button onClick={clickBtn}>
            {showBtn ? "Show less" : "Show more"}
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
