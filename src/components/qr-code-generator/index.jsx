import { useState } from "react";
import QRCode from "react-qr-code";
import classes from "./index.module.css";

export default function QRCodeGenerator() {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrcode(input);
    setInput("");
  }

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["qr-code-generator"]}>
        <h1>QR Code Generator</h1>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          name="qr-code"
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() === "" ? true : false}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>

        <div className={classes.qrCodeWrapper}>
            <QRCode id="qr-code-value" value={qrcode} size={300} bgColor="#fff" />
        </div>
      </div>
    </div>
  );
}
