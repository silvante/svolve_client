import Heading from "@/app/(global_components)/Heading";
import NewVacancyForm from "./NewVacancyForm";

export default function CreateNewVacancy() {
  return (
    <div className="space-y-5">
      <Heading text="Create new vacancy" />
      <NewVacancyForm />
    </div>
  );
}
