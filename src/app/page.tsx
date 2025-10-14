"use client";

import Image from "next/image";
import logo from "../../frontend_mentor_resources/images/logo.svg";
import BillInput from "@/components/BillInput";
import TipInput from "@/components/TipInput";
import PeopleCountInput from "@/components/PeopleCountInput";
import DisplayResult from "@/components/DisplayResults";
import ResetButton from "@/components/ResetButton";
import TipCalculator from "@/utils/TipCalculator";
import { useState, useEffect } from "react";

export default function Home() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [isOnTipButton, setIsOnTipButton] = useState(false);
  const [peopleCount, setPeopleCount] = useState("");
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const tipButtonValues = [5, 10, 15, 25, 50];
  const canReset =
    Number(bill) > 0 || Number(tip) > 0 || Number(peopleCount) > 0;

  const peopleInputError = peopleCount === "0";

  function handleTipClick(value: string) {
    setIsOnTipButton(true);
    setTip((prevTip) => (prevTip === value ? "" : value));
  }

  function handleTipInput(value: string) {
    setIsOnTipButton(false);
    setTip(value);
  }

  function resetFields() {
    setBill("");
    setTip("");
    setPeopleCount("");
    setIsOnTipButton(false);
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
    <main className="flex min-h-screen flex-col items-center justify-start bg-[hsl(185,41%,84%)] px-4 pt-12 font-mono md:justify-center md:px-0 md:pt-0">
      <Image
        className="tracking-[0.5em]"
        src={logo}
        alt="splitter logo"
      ></Image>

      <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-8 rounded-2xl bg-white p-6 shadow-lg md:mt-20 md:grid-cols-2 md:p-8">
        <div className="flex flex-col justify-between gap-8">
          <BillInput bill={bill} handleBillInput={setBill} />
          <TipInput
            tip={tip}
            isOnTipButton={isOnTipButton}
            handleTipClick={handleTipClick}
            handleTipInput={handleTipInput}
          />
          <PeopleCountInput
            peopleCount={peopleCount}
            isZeroPeopleCount={peopleInputError}
            handlePeopleCountChange={setPeopleCount}
          />
        </div>

        <div className="flex flex-col justify-between rounded-xl bg-[hsl(183,100%,15%)] p-6 pt-10 md:p-8">
          <DisplayResult
            tipPerPerson={tipPerPerson}
            totalPerPerson={totalPerPerson}
          />
          <ResetButton canReset={canReset} handleReset={resetFields} />
        </div>
      </div>
    </main>
  );
}
