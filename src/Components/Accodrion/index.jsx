import { useState } from "react";
import data from "./data";
import './style.css'

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null :getCurrentId);
  };
  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="item"
              onClick={() => handleSingleSelection(dataItem.id)}
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content"> {dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> NO data found</div>
        )}
      </div>
    </div>
  );
}
