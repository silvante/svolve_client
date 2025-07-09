"use client";
import { useSelector } from "react-redux";

export default function UniqueNamePage() {
  const { unique_name } = useSelector((state: any) => state.validator);
  return (
    <div>
      <h1>Unique Name Page</h1>
      <p>Unique Name: {unique_name}</p>
    </div>
  );
}
