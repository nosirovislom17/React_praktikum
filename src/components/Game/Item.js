import React, { useCallback } from "react";
import "./style.css";
import ArrowUp from "./image/up.png";
import ArrowDown from "./image/down.png";

const Item = (props) => {
  const { votes, text } = props;
  const getEmoji = useCallback((votes) => {
    if (votes >= 9) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (votes >= 6) {
      return "em em-laughing";
    } else if (votes >= 3) {
      return "em em-slightly_smiling_face";
    } else if (votes >= 0) {
      return "em em-neutral_face";
    } else {
      return "em em-angry";
    }
  }, []);
  return (
    <div className="item">
      <div className="itemBtn">
        <img onClick={props.upVote} className="arrowIcon" src={ArrowUp} />
        <p className="voteLevel">{votes}</p>
        <img onClick={props.downVote} className="arrowIcon" src={ArrowDown} />
      </div>
      <div className="itemText">{text}</div>
      <div className="itemEmoji">
        <i className={getEmoji(votes)}></i>
      </div>
    </div>
  );
};

export default Item;
