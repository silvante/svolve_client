import Heading from "@/app/(global_components)/Heading";
import ClientSearchEngine from "./(components)/ClientSearchEngine";
import SearchCalendar from "./(components)/SearchCalendar";

export default function ClientPage() {
  return (
    <div className="space-y-5">
      <div className="w-full flex items-center justify-between">
        <Heading text="Search clients" />
      </div>
      <ClientSearchEngine />
      <SearchCalendar />
    </div>
  );
}
