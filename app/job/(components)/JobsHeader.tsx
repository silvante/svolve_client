"use client";
import { useSelector } from "react-redux";

export default function JobsHeader() {
  const { currentJob } = useSelector((state: any) => state.job);
  const { organization } = useSelector((state: any) => state.validator);
  return (
    <header>
      <p>{currentJob.worker.username}</p>
      <p>{organization.unique_name}</p>
    </header>
  );
}
