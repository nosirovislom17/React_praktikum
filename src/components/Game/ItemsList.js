import React, { useCallback, useEffect, useState } from "react";
import img1 from "./image/INT.jpg";
import Item from "./Item";
import MyLoader from "../UI/Loader/MyLoader";
import axios from "axios";
import "./style.css";

const ItemsList = () => {
  const [joke, setJoke] = useState(null);

  async function getEmoji() {
    let newEmoji = [];
    for (let i = 1; i < 7; i++) {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      newEmoji.push({ id: i, text: response.data.joke, votes: 0 });
    }
    setJoke(newEmoji);
  }

  useEffect(() => {
    getEmoji();
  }, []);

  const handleVote = useCallback(
    (id, offset) => {
      const filterEmoji = joke.filter((item) => item.id !== id);
      const emoj = joke.find((item) => item.id === id);
      emoj.votes += offset;
      filterEmoji.push(emoj);
      filterEmoji.sort((a, b) => b.votes - a.votes);
      setJoke(filterEmoji);
    },
    [joke, setJoke]
  );

  if (joke) {
    return (
      <div className="ItemList">
        <div className="ItemListsSidebar">
          <p className="ItemListTitle">INT</p>
          <img className="ImgSidebar" alt="imgSidebar" src={img1}></img>
        </div>
        <div className="ItemListStiker">
          {joke.map((item) => (
            <Item
              votes={item.votes}
              key={item.id}
              text={item.text}
              upVote={() => handleVote(item.id, 1)}
              downVote={() => {
                handleVote(item.id, -1);
              }}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <MyLoader />;
  }
};

export default ItemsList;
