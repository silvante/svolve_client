import RegisterButton from "./RegisterButton";
import Svolve from "./Svolve";

export default function Header() {
  return (
    <header className="p-3 shadow-lg shadow-gray-100 flex justify-between items-center z-50 bg-white border-b border-gray-300">
      <div className="h-full flex">
        <Svolve />
      </div>
      <RegisterButton />
    </header>
  );
}
