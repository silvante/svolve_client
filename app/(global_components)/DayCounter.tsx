"use client";
import { useEffect, useState } from "react";

export default function DayCounter({ date }: { date: string | Date }) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const target = new Date(date);

    const updateDays = () => {
      const diff = target.getTime() - new Date().getTime();
      const remainingDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDays(remainingDays > 0 ? remainingDays : 0);
    };

    updateDays();
    const interval = setInterval(updateDays, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <p className="py-1 px-4 rounded-full bg-green-100 text_color">
      <span>{days}</span> Kun qoldi
    </p>
  );
}
