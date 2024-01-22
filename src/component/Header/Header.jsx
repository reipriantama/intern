import React, { useState } from "react";
import "./Header.css";
import styles from "./Header.module.css";
import ChildComponent from "./ChildComponent";

const Header = () => {
  const [color, setColor] = useState();
  const alertButton = (newColor) => {
    setColor(newColor);
    alert("Color change to " + newColor);
  };
  return (
    <div>
      <h1 className="title">Title {1 + 1}</h1>
      <p
        style={{
          width: "200px",
          margin: "10px",
          color: "blue",
          backgroundColor: `${color}`,
        }}
      >
        My Favorite Color is {color}
      </p>
      <button
        className={styles.button}
        type="button"
        onClick={() => alertButton("green")}
      >
        Klik disini{" "}
      </button>

      <ChildComponent alert={() => alertButton("red")} />

      <div className="" title="">
        {" "}
      </div>
    </div>
  );
};

export default Header;
