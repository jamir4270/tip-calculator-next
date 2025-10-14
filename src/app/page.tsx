"use client";

import Image from "next/image";
import logo from "../../frontend_mentor_resources/images/logo.svg";
import person from "../../frontend_mentor_resources/images/icon-person.svg";
import BillInput from "@/components/BillInput";
import TipInput from "@/components/TipInput";
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
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="people-count"
                className="text-md text-[hsl(186,14%,43%)]"
              >
                Number of People
              </label>
              {peopleInputError && (
                <p className="font-bold text-red-500">Can&#39;t be zero</p>
              )}
            </div>
            <div className="relative mt-2">
              <Image
                className="absolute left-4 top-1/2 -translate-y-1/2"
                src={person}
                alt="person icon"
              />
              <input
                className={`w-full rounded-md border-2 bg-[hsl(189,41%,97%)] px-4 py-2 text-right text-2xl font-bold text-[hsl(183,100%,15%)] placeholder:text-[hsl(183,100%,15%)]/40 focus:outline-none ${
                  peopleInputError
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-transparent focus:ring-2 focus:ring-[hsl(172,67%,45%)]"
                }`}
                type="number"
                id="people-count"
                placeholder="0"
                value={peopleCount}
                onChange={(e) => setPeopleCount(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl bg-[hsl(183,100%,15%)] p-6 pt-10 md:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white">Tip Amount</p>
                <p className="text-sm text-[hsl(185,41%,84%)]">/ person</p>
              </div>
              <p className="text-3xl font-bold text-[hsl(172,67%,45%)] md:text-5xl">
                ${tipPerPerson.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white">Total</p>
                <p className="text-sm text-[hsl(185,41%,84%)]">/ person</p>
              </div>
              <p className="text-3xl font-bold text-[hsl(172,67%,45%)] md:text-5xl">
                ${totalPerPerson.toFixed(2)}
              </p>
            </div>
          </div>

          <button
            className="mt-8 w-full rounded-md bg-[hsl(172,67%,45%)] p-3 text-xl font-bold uppercase text-[hsl(183,100%,15%)] transition-colors hover:bg-[hsl(173,61%,77%)] disabled:bg-[hsl(184,87%,21%)] disabled:text-[hsl(183,100%,15%)]/50 md:mt-0"
            onClick={resetFields}
            disabled={!canReset}
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
