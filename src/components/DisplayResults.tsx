type DisplayResultProps = {
  tipPerPerson: number;
  totalPerPerson: number;
};

export default function DisplayResult({
  tipPerPerson,
  totalPerPerson,
}: DisplayResultProps) {
  return (
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
  );
}
