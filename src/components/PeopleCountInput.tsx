import Image from "next/image";
import person from "../../frontend_mentor_resources/images/icon-person.svg";

type PeopleCountProps = {
  peopleCount: string;
  isZeroPeopleCount: boolean;
  handlePeopleCountChange: (peopleCount: string) => void;
};

export default function PeopleCountInput({
  peopleCount,
  isZeroPeopleCount,
  handlePeopleCountChange,
}: PeopleCountProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="people-count"
          className="text-md text-[hsl(186,14%,43%)]"
        >
          Number of People
        </label>
        {isZeroPeopleCount && (
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
            isZeroPeopleCount
              ? "border-red-500 focus:ring-2 focus:ring-red-500"
              : "border-transparent focus:ring-2 focus:ring-[hsl(172,67%,45%)]"
          }`}
          type="number"
          id="people-count"
          placeholder="0"
          value={peopleCount}
          onChange={(e) => handlePeopleCountChange(e.target.value)}
        />
      </div>
    </div>
  );
}
