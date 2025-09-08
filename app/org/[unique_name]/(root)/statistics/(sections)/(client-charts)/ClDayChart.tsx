import Heading from "@/app/(global_components)/Heading";
import { ClientsByDay } from "@/app/types/User";

export default function ClDayChart({ data }: { data: ClientsByDay }) {
  return (
    <div>
      <Heading text="DayChart" />
    </div>
  );
}
