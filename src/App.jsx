import React, { useState } from "react";
import gdata from "./gdata";
import Card from "./Card";

function App() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const [gender, setgen] = useState("male");

  const gench = () => {
    gender === "male" ? setgen("female") : setgen("male");
  };

  const filteredCards = gdata.filter((item) => item.gen === gender);
  const cards = showMore ? filteredCards : filteredCards.slice(0, 3);

  const gcard = (item, index) => {
    if (item.gen === gender) {
      return (
        <>
          <Card
            key={item.id}
            src={item.src}
            name={item.name}
            category={item.category}
          />
        </>
      );
    }
  };
  return (
    <>
      <h2 className="text-center">
        <span>MARVEL</span> <span>STUDIOS</span>
      </h2>
      <div className="container mt-4">
        <label class="label">
          <div class="label-text">males</div>
          <div class="toggle">
            <input
              class="toggle-state"
              type="checkbox"
              name="check"
              value="check"
              onClick={gench}
            />
            <div class="indicator"></div>
          </div>
          <div class="label-text">females</div>
        </label>
        <div className="row justify-content-center">{cards.map(gcard)}</div>
        <div className="buttons">
          <span className="btn" id="btn" onClick={toggleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
