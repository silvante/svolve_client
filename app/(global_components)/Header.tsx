import LangSelector from "./LanguageSelector";
import RegisterButton from "./RegisterButton";
import Diagnos from "./Diagnos";

export default function Header() {
  return (
    <header className="p-5 shadow-gray-100 flex justify-between items-center z-50">
      <div className="h-full flex gap-5 items-center">
        <Diagnos />
        <LangSelector />
      </div>
      <RegisterButton />
    </header>
  );
}
