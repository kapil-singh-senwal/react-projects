import { useState } from "react";
import classes from './index.module.css'
export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#8236BE");
  const [display, setDisplay] = useState("none");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexcolor);
    setDisplay("block");
  }

  function handleCreateRgbColor() {
    const r = randomColorUtility(256);
    const b = randomColorUtility(256);
    const g = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
    setDisplay("block");
  }

  function getContrastColor(color) {
    let r, g, b;
    if (color.startsWith("#")) {
      const hex = color.replace("#", "");
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    } else {
      const rgbValues = color.match(/\d+/g);
      if (rgbValues) {
        [r, g, b] = rgbValues.map(Number);
      } else {
        return "#fff"; // fallback
      }
    }
    // Perceived brightness formula
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000" : "#fff";
  }

  const textColor = getContrastColor(color);

  return (
    <div className={classes["container"]} style={{backgroundColor : color}}>
      <div className={classes["btnContainer"]}>
        <button
          style={{ color: textColor }}
          className={typeOfColor === "hex" ? classes.active : ""}
          onClick={() => {
            setTypeOfColor("hex");
            setDisplay("none");
          }}
        >
          Select HEX Color
        </button>
        <button
          style={{ color: textColor }}
          className={typeOfColor === "rgb" ? classes.active : ""}
          onClick={() => {
            setTypeOfColor("rgb");
            setDisplay("none");
          }}
        >
          Select RGB Color
        </button>
        <button
          style={{ color: textColor }}
          onClick={
            typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className={classes["colorDisplay"]} style={{ color: textColor }}>
        <h1>{typeOfColor === "hex" ? "HEX Color Selected" : "RGB Color Selected"}</h1>
        <h1 style={{ display: display }}>{color}</h1>
      </div>
    </div>
  );
}
