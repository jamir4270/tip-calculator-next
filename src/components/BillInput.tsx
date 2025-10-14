
import Image from "next/image";
import dollar from "../../frontend_mentor_resources/images/icon-dollar.svg";

type BillProps = {
  bill: string;
  handleBillInput: (bill: string) => void;
};

export default function BillInput({ bill, handleBillInput }: BillProps) {
  return (
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
          onChange={(e) => handleBillInput(e.target.value)}
        />
      </div>
    </div>
  );
}
