import Heading from "@/app/(global_components)/Heading";
import JobsList from "./JobsList";

export default function Jobs() {
  return (
    <div className="space-y-5">
      <Heading text="Sizning ishingiz" />
      <JobsList />
      <div className="py-20 flex justify-center items-center">
        <h3 className="text-gray-600">Siz bir vaqtning o'zida faqat bitta ishga ega bo'lishingiz mumkin.</h3>
      </div>
    </div>
  );
}
