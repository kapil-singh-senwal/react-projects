import { useRef } from "react";
import classes from './index.module.css'

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "50%",
        height: "300px",
        background: "#0AACC9", // teal blue
        textAlign: "center",
        marginTop: "10px",
        color: "#fff",
        borderRadius: "16px"
      },
    },
    {
      label: "Second Card",
      style: {
        width: "50%",
        height: "300px",
        background: "#6C5CE7", // soft violet
        textAlign: "center",
        marginTop: "10px",
        color: "#fff",
        borderRadius: "16px"
      },
    },
    {
      label: "Third Card",
      style: {
        width: "50%",
        height: "300px",
        background: "#00B894", // mint green
        textAlign: "center",
        marginTop: "10px",
        color: "#fff",
        borderRadius: "16px"
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "50%",
        height: "300px",
        background: "#FDCB6E", // warm yellow
        textAlign: "center",
        marginTop: "10px",
        color: "#2d3436",
        borderRadius: "16px"
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "50%",
        height: "300px",
        background: "#E17055", // coral
        textAlign: "center",
        marginTop: "10px",
        color: "#fff",
        borderRadius: "16px"
      },
    },
  ];
  function handleScrollToSection() {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={classes["data-container"]}>
      <h1>Scroll to particular section</h1>
      <button onClick={handleScrollToSection}>Click To scroll</button>
      {data.map((dataItem, index) => (
        <div key={dataItem.label} ref={index === 2 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
