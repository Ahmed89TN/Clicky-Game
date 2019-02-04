import React from "react";
import "./style.css";

const Nav = props => (
  <nav>
    <ul>
      <li>
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="rw" className={props.correct?"correct": props.incorrect? "incorrect" :""} >{props.rightWrong}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;
