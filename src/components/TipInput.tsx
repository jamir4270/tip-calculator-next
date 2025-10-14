import { useState } from "react";

type TipInputProps = {
  tip: string;
  isOnTipButton: boolean;
  handleTipClick: (tip: string) => void;
  handleTipInput: (tip: string) => void;
};

export default function BillInput({
  tip,
  isOnTipButton,
  handleTipClick,
  handleTipInput,
}: TipInputProps) {
  const tipButtonValues = [5, 10, 15, 25, 50];
  return (
    <div>
      <label className="text-md text-[hsl(186,14%,43%)]">Select Tip %</label>
      <div className="mt-2 grid grid-cols-2 gap-4 md:grid-cols-3">
        {tipButtonValues.map((item) => {
          const isActive = tip === item.toString();
          return (
            <button
              className={`rounded-md py-2 text-2xl font-bold transition-colors ${
                isActive
                  ? "bg-[hsl(172,67%,45%)] text-[hsl(183,100%,15%)]"
                  : "bg-[hsl(183,100%,15%)] text-white hover:bg-[hsl(173,61%,77%)] hover:text-[hsl(183,100%,15%)]"
              }`}
              key={item}
              onClick={() => handleTipClick(item.toString())}
            >
              {item}%
            </button>
          );
        })}
        <input
          className="w-full rounded-md border-2 border-transparent bg-[hsl(189,41%,97%)] text-center text-2xl font-bold text-[hsl(183,100%,15%)] placeholder:text-center placeholder:text-[hsl(186,14%,43%)] focus:outline-none focus:ring-2 focus:ring-[hsl(172,67%,45%)] md:text-right md:pr-4"
          type="number"
          placeholder="Custom"
          value={isOnTipButton ? "" : tip}
          onChange={(e) => {
            handleTipInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
