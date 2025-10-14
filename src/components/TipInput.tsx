import { useState } from "react";

type TipInputProps = {
  handleTipInput: (bill: number) => void;
};

export default function BillInput({ handleTipInput }: TipInputProps) {
  const [tip, setTip] = useState("");
  function verifyInput(value: string) {
    const newValue = value;
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(newValue)) {
      setTip(newValue);
      handleTipInput(parseFloat(newValue));
    }
  }
  return (
    <div>
      <div>
        <input
          type="text"
          name="tipInput"
          id="tipInput"
          placeholder="Custom"
          value={tip}
          onChange={(event) => {
            verifyInput(event.target.value);
          }}
        />
      </div>
    </div>
  );
}
