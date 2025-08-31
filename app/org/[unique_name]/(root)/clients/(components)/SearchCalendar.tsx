// components/OrganizationTimeline.tsx
"use client";
import { useState } from "react";
import dayjs from "dayjs";
import Heading from "@/app/(global_components)/Heading";

interface Organization {
  id: number;
  name: string;
  created_at: string;
}

export default function SearchCalendar({
  organization,
}: {
  organization: Organization;
}) {
  const created = dayjs(organization.created_at);
  const now = dayjs();

  const years: number[] = [];
  for (let y = created.year(); y <= now.year(); y++) {
    years.push(y);
  }

  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const months =
    selectedYear !== null
      ? Array.from(
          {
            length:
              (selectedYear === now.year() ? now.month() + 1 : 12) -
              (selectedYear === created.year() ? created.month() : 0),
          },
          (_, i) => (selectedYear === created.year() ? created.month() : 0) + i
        )
      : [];

  const days =
    selectedYear !== null && selectedMonth !== null
      ? Array.from(
          {
            length: dayjs(
              `${selectedYear}-${selectedMonth + 1}-01`
            ).daysInMonth(),
          },
          (_, i) => i + 1
        ).filter((d) => {
          const date = dayjs(`${selectedYear}-${selectedMonth + 1}-${d}`);
          if (
            selectedYear === created.year() &&
            selectedMonth === created.month()
          ) {
            return date.isAfter(created.subtract(1, "day"));
          }
          if (selectedYear === now.year() && selectedMonth === now.month()) {
            return date.isBefore(now.add(1, "day"));
          }
          return true;
        })
      : [];

  return (
    <div className="w-full space-y-5">
      <Heading text={`Timeline`} />
      {/* Years */}
      <div className="flex flex-wrap gap-2 mb-4">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => {
              if (year !== selectedYear) {
                setSelectedYear(year);
                setSelectedMonth(null);
              } else {
                setSelectedYear(null);
                setSelectedMonth(null);
              }
            }}
            className={`py-5 px-8 *:rounded-lg border-2 font-semibold rounded-xl cursor-pointer ${
              selectedYear === year
                ? "bg-violet-600 text-white"
                : "border-violet-600 text-violet-600 hover:bg-violet-100"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Months */}
      {selectedYear !== null && (
        <div className="flex flex-wrap gap-2 mb-4 border-t border-gray-300 pt-5">
          {months.map((m) => (
            <button
              key={m}
              onClick={() => {
                if (m !== selectedMonth) {
                  setSelectedMonth(m);
                } else {
                  setSelectedMonth(null);
                }
              }}
              className={`py-4 px-6 *:rounded-lg border-2 font-semibold rounded-xl cursor-pointer ${
                selectedMonth === m
                  ? "bg-violet-600 text-white"
                  : "border-violet-600 text-violet-600 hover:bg-violet-100"
              }`}
            >
              {selectedYear} {dayjs().month(m).format("MMM")}
            </button>
          ))}
        </div>
      )}

      {/* Days */}
      {selectedMonth !== null && (
        <div className="flex flex-wrap gap-2 mb-4 border-t border-gray-300 pt-5">
          {days.map((d) => (
            <span
              key={d}
              className="px-4 py-2 rounded-md border-2 font-semibold border-violet-600 text-violet-600 text-sm cursor-pointer"
            >
              {dayjs().month(selectedMonth).format("MMM")} {d}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
