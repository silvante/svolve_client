import RegisterButton from "./RegisterButton";
import Svolve from "./Svolve";

export default function Header() {
  return (
    <header className="p-5 shadow-gray-100 flex justify-between items-center z-50">
      <div className="h-full flex">
        <Svolve />
      </div>
      <RegisterButton />
    </header>
  );
}
