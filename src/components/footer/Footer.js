import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Vivek, signing off—stay tuned.")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {" "}
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            
          </a>
        </p>
      </div>
    </Fade>
  );
}
