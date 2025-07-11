"use client";
import { useSelector } from "react-redux";

export default function OrgAside() {
  const { is_active } = useSelector((state: any) => state.aside);
  return (
    <aside
      className={`bg-white h-full max-w-72 w-full sticky top-0 left-0 pt-20 px-5 border-r border-gray-200 ${
        is_active ? "flex" : "hidden"
      }`}
    >
      <div>
        <div className="text-muted-foreground text-sm flex gap-2">
          <p>Focus</p>
          <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
            <span className="text-xs">Ctrl + Shift + X</span>
          </kbd>
        </div>
      </div>
    </aside>
  );
}
