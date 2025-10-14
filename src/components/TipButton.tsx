// src/components/TipButton.tsx

type TipButtonProps = {
  value: number;
  onClick: (value: number) => void;
};

export default function TipButton({ value, onClick }: TipButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className="
        bg-cyan-900         
        text-white           
        px-8 py-2             
        rounded-md            
        font-bold            
        hover:bg-cyan-500    
        focus:outline-none   
        focus:ring-2          
        focus:ring-cyan-400   
        focus:ring-opacity-75 
        transition-colors     
      "
    >
      {value}%
    </button>
  );
}
