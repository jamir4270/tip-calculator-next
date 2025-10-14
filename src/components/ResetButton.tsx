type ResetButtonProps = {
  canReset: boolean;
  handleReset: () => void;
};

export default function ResetButton({
  canReset,
  handleReset,
}: ResetButtonProps) {
  return (
    <div>
      <button
        className="mt-8 w-full rounded-md bg-[hsl(172,67%,45%)] p-3 text-xl font-bold uppercase text-[hsl(183,100%,15%)] transition-colors hover:bg-[hsl(173,61%,77%)] disabled:bg-[hsl(184,87%,21%)] disabled:text-[hsl(183,100%,15%)]/50 md:mt-0"
        onClick={() => handleReset()}
        disabled={!canReset}
      >
        Reset
      </button>
    </div>
  );
}
