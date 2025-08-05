"use client";
import Heading from "@/app/(global_components)/Heading";
import { useSelector } from "react-redux";

export default function MyVocancies() {
  const { vacancies } = useSelector((state: any) => state.vacancy);
  console.log(vacancies);

  return (
    <div>
      <Heading text="My Vacancies" />
    </div>
  );
}
