"use client";
import Heading from "@/app/(global_components)/Heading";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ClientCreator from "@/app/org/[unique_name]/(root)/(work_sections)/ClientCreator";
import ClientTable from "@/app/org/[unique_name]/(root)/(work_sections)/ClientTable";
import DoctorsTypeList from "../../(components)/DoctorsTypeList";
import DateShower from "@/app/(global_components)/DateShower";

export default function JobHome() {
  const { organization } = useSelector((state: any) => state.validator);
  const { currentJob } = useSelector((state: any) => state.job);
  
  return (
    <div className="space-y-5">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <Heading text={`Panel of ${organization.name}`} />
        <DateShower />
      </div>
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={["item-1", "item-2"]}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="no-underline hover:no-underline">
            <p className="text-xl font-semibold text_color">
              {currentJob.role === "doctor"
                ? "Check clients"
                : "Create clients"}
            </p>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {currentJob.role === "doctor" ? (
              <DoctorsTypeList currentJob={currentJob} />
            ) : (
              <ClientCreator />
            )}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="no-underline hover:no-underline">
            <p className="text-xl font-semibold text_color">Today's Clients</p>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <ClientTable />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
