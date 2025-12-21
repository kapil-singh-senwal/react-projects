import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [isMultiSelect, setIsMultiSelect] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let updatedSelection = [...multipleSelected];
    if (updatedSelection.includes(getCurrentId)) {
      updatedSelection = updatedSelection.filter((id) => id !== getCurrentId);
    } else {
      updatedSelection.push(getCurrentId);
    }

    setMultipleSelected(updatedSelection);
  }

  return (
    <div className="wrapper">
      <button className="multi-selectBtn" onClick={() => {setIsMultiSelect(!isMultiSelect)}}
        style={{
    backgroundColor: isMultiSelect ? "#070606" : "#2a2a2a"}}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  isMultiSelect
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                isMultiSelect
                ? multipleSelected.includes(dataItem.id) && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div> No data found</div>
        )}
      </div>
    </div>
  );
}
