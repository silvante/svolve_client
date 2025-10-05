"use client";
import { useState } from "react";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
import Heading from "@/app/(global_components)/Heading";
import OrgLink from "@/app/org/(components)/(meta-components)/OrgLink";

interface Organization {
  id: number;
  name: string;
  created_at: string;
}

export default function OrganizationTimeline({
  organization,
}: {
  organization: Organization;
}) {
  const created = dayjs(organization.created_at);
  const now = dayjs();

  // Build list of years between creation and now
  const years: number[] = [];
  for (let y = created.year(); y <= now.year(); y++) {
    years.push(y);
  }

  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  // Build months for selected year
  const months =
    selectedYear !== null
      ? (() => {
          const monthStart =
            selectedYear === created.year() ? created.month() : 0;
          const monthEnd = selectedYear === now.year() ? now.month() : 11;
          return Array.from(
            { length: monthEnd - monthStart + 1 },
            (_, i) => monthStart + i
          );
        })()
      : [];

  // Build days for selected month
  // Build days for selected month
  const days =
    selectedYear !== null && selectedMonth !== null
      ? Array.from(
          {
            length: dayjs()
              .year(selectedYear)
              .month(selectedMonth)
              .daysInMonth(),
          },
          (_, i) => i + 1
        ).filter((d) => {
          const date = dayjs().year(selectedYear).month(selectedMonth).date(d);

          // Always clamp between created_at and now
          return (
            date.isSameOrAfter(created, "day") &&
            date.isSameOrBefore(now, "day")
          );
        })
      : [];

  return (
    <div className="w-full space-y-5">
      <Heading text="Timeline" />

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
            className={`py-5 px-8 border-2 font-semibold rounded-xl cursor-pointer ${
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
              className={`py-4 px-6 border-2 font-semibold rounded-xl cursor-pointer ${
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
          {days.map((d) => {
            const date = dayjs()
              .year(selectedYear!)
              .month(selectedMonth)
              .date(d);

            return (
              <OrgLink
                href={`/clients/date/${date.format("YYYY-MM-DD")}`}
                key={d}
                className="px-4 py-2 rounded-md border-2 font-semibold border-violet-600 text-violet-600 text-sm cursor-pointer"
              >
                {date.format("MMM D")}
              </OrgLink>
            );
          })}
        </div>
      )}
    </div>
  );
}
