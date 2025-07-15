"use client";
import Heading from "@/app/(global_components)/Heading";
import { useSelector } from "react-redux";
import ClientCreator from "./(work_sections)/ClientCreator";
import ClientTable from "./(work_sections)/ClientTable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function UniqueNamePage() {
  const { organisation } = useSelector((state: any) => state.validator);
  return (
    <div className="space-y-5">
      <Heading text={`Home page - ${organisation.name}`} />
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={["item-1", "item-2"]}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="no-underline hover:no-underline">
            <p className="text-xl font-semibold text_color">Create clients</p>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <ClientCreator />
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
