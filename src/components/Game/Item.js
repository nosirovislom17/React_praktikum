import React from "react";
import "./style.css";
import ArrowUp from "./image/up.png";
import ArrowDown from "./image/down.png";

const Item = (props) => {
  const { votes, text } = props;
  return (
    <div className="item">
      <div className="itemBtn">
        <img onClick={props.upVote} className="arrowIcon" src={ArrowUp} />
        <p className="voteLevel">{votes}</p>
        <img onClick={props.downVote} className="arrowIcon" src={ArrowDown} />
      </div>
      <div className="itemText">{text}</div>
      <div className="itemEmoji">
        <i className="em em-laughing "></i>
      </div>
    </div>
  );
};

export default Item;
