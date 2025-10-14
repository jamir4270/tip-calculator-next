
import Image from "next/image";
import dollarSign from "../../frontend_mentor_resources/images/icon-dollar.svg";

type BillProps = {
  handleBillInput: (bill: number) => void;
};

export default function BillInput({ handleBillInput }: BillProps) {
  function verifyInput(value: string) {
    const newValue = value;
    const regex = /^\d+(\.\d{1,2})?$/;
    if (regex.test(newValue)) {
      handleBillInput(parseFloat(newValue));
    }
  }
  return (
    <div>
      <label htmlFor="billInput">Bill</label>
      <div>
        <Image src={dollarSign} alt="dollar sign"></Image>
        <input
          type="text"
          name="billInput"
          id="billInput"
          placeholder="0"
          onChange={(event) => {
            verifyInput(event.target.value);
          }}
        />
      </div>
    </div>
  );
}
