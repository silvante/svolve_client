import Hero from "../(global_components)/Hero";
import Community from "./(sections)/Community";
import Pricing from "./(sections)/Pricing";

export default function Home() {
  return (
    <div className="w-full py-10 space-y-18">
      <Hero />
      {/* <div className="py-10 flex justify-center items-center">
        <p className={`${boren.className} text-xl`}>Community</p>
      </div> */}
      <Pricing />
      <Community />
    </div>
  );
}
