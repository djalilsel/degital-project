import Image from "next/image";
import hero from "../assets/hero.png";

export default function Home() {
  return (
    <main className="px-[135px] grid grid-cols-5 h-[90vh] w-full">
      <div className="col-span-2 flex flex-col justify-center font-roboto text-[64px] leading-[1]">
        <div>
          <h1 className="font-light text-[#BDBDBD]">PROJECT</h1>
          <h1 className="font-bold">Lorem</h1>
        </div>
        <div className=" border-2"></div>
      </div>
      <div className="col-span-3 w-full h-full overflow-hidden">
        <img src={hero.src} className="w-full h-full" />
      </div>
    </main>
  );
}
