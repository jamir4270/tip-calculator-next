import Image from "next/image";
import logo from "../../frontend_mentor_resources/images/logo.svg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center place-items-center h-screen">
      <Image src={logo} alt="splitter logo"></Image>
    </div>
  );
}
