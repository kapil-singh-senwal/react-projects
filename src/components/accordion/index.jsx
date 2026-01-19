import { useState } from "react";
import data from "./data";
import classes from "./index.module.css";

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
    <div className={classes.wrapper}>
      <button 
        className={`${classes.multiSelectBtn} ${isMultiSelect ? classes.active : ""}`} 
        onClick={() => {setIsMultiSelect(!isMultiSelect)}}
      >
        {isMultiSelect ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      <div className={classes.accordion}>
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            const isItemExpanded = isMultiSelect 
              ? multipleSelected.includes(dataItem.id) 
              : selected === dataItem.id;

            return (
              <div key={dataItem.id} className={classes.item}>
                <div
                  onClick={
                    isMultiSelect
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className={classes.title}
                >
                  <h3 className={classes.question}>{dataItem.question}</h3>
                  <div className={`${classes.icon} ${isItemExpanded ? classes.expanded : ""}`}>
                    +
                  </div>
                </div>
                <div className={`${classes.contentWrapper} ${isItemExpanded ? classes.open : ""}`}>
                  <div className={classes.content}>{dataItem.answer}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div> No data found</div>
        )}
      </div>
    </div>
  );
}
