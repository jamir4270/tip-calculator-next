"use client";

import Image from "next/image";
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
  const canReset =
    Number(bill) > 0 || Number(tip) > 0 || Number(peopleCount) > 0;

  const peopleInputError = peopleCount === "0";

  function handleTipClick(value: string) {
    setTip((prevTip) => (prevTip === value ? "" : value));
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

  const isPresetTip = tipButtonValues.includes(Number(tip));

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[hsl(185,41%,84%)] px-4 pt-12 font-mono md:justify-center md:px-0 md:pt-0">
      <h1 className="text-center text-2xl tracking-[0.5em] text-[hsl(183,100%,15%)]">
        SPLI
        <br />
        TTER
      </h1>

      <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-8 rounded-2xl bg-white p-6 shadow-lg md:mt-20 md:grid-cols-2 md:p-8">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <label htmlFor="bill" className="text-md text-[hsl(186,14%,43%)]">
              Bill
            </label>
            <div className="relative mt-2">
              <Image
                className="absolute left-4 top-1/2 -translate-y-1/2"
                src={dollar}
                alt="dollar icon"
              />
              <input
                className="w-full rounded-md border-2 border-transparent bg-[hsl(189,41%,97%)] px-4 py-2 text-right text-2xl font-bold text-[hsl(183,100%,15%)] placeholder:text-[hsl(183,100%,15%)]/40 focus:outline-none focus:ring-2 focus:ring-[hsl(172,67%,45%)]"
                type="number"
                id="bill"
                placeholder="0"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="text-md text-[hsl(186,14%,43%)]">
              Select Tip %
            </label>
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
                value={isPresetTip ? "" : tip}
                onChange={(e) => setTip(e.target.value)}
              />
            </div>
          </div>
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
