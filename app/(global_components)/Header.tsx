import RegisterButton from "./RegisterButton";
import Svolve from "./Svolve";

export default function Header() {
  return (
    <header className="p-3 shadow-lg flex justify-between items-center">
      <div className="h-full flex">
        <Svolve />
      </div>
      <RegisterButton />
    </header>
  );
}
