import { togleAside } from "@/app/store/slices/asideSlice";
import { Menu } from "lucide-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function CollapseBtn() {
  const dispatch = useDispatch();

  function handleCollapse() {
    dispatch(togleAside());
  }

  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLocaleLowerCase() === "f") {
        handleCollapse();
      }
    };

    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, []);

  return (
    <button
      onClick={handleCollapse}
      className="text-gray-500 hover:text-gray-700 cursor-pointer"
    >
      <Menu />
    </button>
  );
}
