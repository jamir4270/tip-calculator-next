// src/app/page.tsx
"use client";

import Image from "next/image";
import logo from "../../frontend_mentor_resources/images/logo.svg";
import dollar from "../../frontend_mentor_resources/images/icon-dollar.svg";
import person from "../../frontend_mentor_resources/images/icon-person.svg";
import TipCalculator from "@/utils/TipCalculator";
import { useState, useEffect } from "react";

export default function Home() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const tipButtonValues = [5, 10, 15, 25, 50];

  function handleBillChange(value: string) {
    setBill(value);
  }

  function handleTipClick(value: string) {
    setTip(value);
  }

  function handleTipChange(value: string) {
    setTip(value);
  }

  function handlePeopleCountChange(value: string) {
    setPeopleCount(value);
  }

  function resetFields() {
    setBill("");
    setTip("");
    setPeopleCount("");
  }

  useEffect(() => {
    const result = TipCalculator(
      parseFloat(bill),
      parseFloat(tip),
      parseFloat(peopleCount)
    );

    setTipPerPerson(result.tipPerPerson);
    setTotalPerPerson(result.totalPerPerson);
  }, [bill, tip, peopleCount]);

  return (
    <div className="flex flex-col justify-center place-items-center h-screen">
      <div className="flex flex-col justify-center place-items-center gap-10 bg-amber-50">
        <Image src={logo} alt="splitter logo"></Image>
        <div className="flex flex-row">
          <div>
            <div>
              <label htmlFor="bill">Bill</label>
              <Image src={dollar} alt="dollar icon" />
              <input
                type="text"
                name="bill"
                id="bill"
                placeholder="0"
                value={bill}
                onChange={(event) => {
                  handleBillChange(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="tip">Selected Tip %</label>
              <div className="flex flex-col flex-wrap">
                {tipButtonValues.map((item) => (
                  <button
                    className="bg-amber-50 hover:bg-amber-200 active:bg-amber-400 focus:bg-amber-500"
                    key={item}
                    value={item}
                    onClick={() => {
                      handleTipClick(item.toString());
                    }}
                  >
                    {item}
                  </button>
                ))}

                <input
                  type="text"
                  name="tip-input"
                  id="tip-input"
                  placeholder="Custom"
                  value={tip}
                  onChange={(event) => {
                    handleTipChange(event.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="people-count">Number of People</label>
              <Image src={person} alt="person icon" />
              <input
                type="text"
                name="people-count"
                id="people-count"
                placeholder="0"
                value={peopleCount}
                onChange={(event) => {
                  handlePeopleCountChange(event.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between bg-amber-50 w-50">
              <div>
                <div>Tip Amount</div>
                <div>/ person</div>
              </div>
              <div>{`$ ${tipPerPerson}`}</div>
            </div>
            <div className="flex flex-row justify-between bg-amber-50 w-50">
              <div>
                <div>Total Amount</div>
                <div>/ person</div>
              </div>
              <div>{`$ ${totalPerPerson}`}</div>
            </div>
            <div>
              <button
                className="bg-amber-50 hover:bg-amber-200 active:bg-amber-40"
                onClick={() => {
                  resetFields();
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {`Bill: ${bill}\n`}
        <br />
        {`Tip: ${tip}`}
        <br />
        {`People: ${peopleCount}\n`}
      </div>
    </div>
  );
}
