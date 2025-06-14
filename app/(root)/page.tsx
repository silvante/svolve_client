import { Borel, Roboto } from "next/font/google";
import Heading from "../(global_components)/Heading";
import Hero from "../(global_components)/Hero";

const boren = Borel({
  weight: "400",
});

export default function Home() {
  return (
    <div className="w-full py-10">
      <Hero />
      <div className="py-10 flex justify-center items-center">
        <p className={`${boren.className} text-xl`}>Supported payment providers</p>
      </div>
    </div>
  );
}
