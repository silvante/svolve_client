import Heading from "@/app/(global_components)/Heading";
import VacancyList from "./VacancyList";

export default function MyVocancies() {
  return (
    <div className="space-y-5">
      <Heading text="Sizning vakansiyalaringiz" />
      <VacancyList />
    </div>
  );
}
