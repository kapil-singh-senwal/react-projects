import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  return (
    <div style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
    }}>
      <button>Generate HEX Color</button>
      <button>Generate RGB Color</button>
      <button>Generate Random Color</button>
    </div>
  );
}
