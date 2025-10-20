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
import Spinner from "@/app/(global_components)/Spinner";
import { Client } from "@/app/types/User";

export default function UniqueNamePage() {
  const { organization } = useSelector((state: any) => state.validator);
  console.log(organization);

  const { clients, is_loading } = useSelector((state: any) => state.client);

  let total_revenue = "0";
  if (!is_loading) {
    const totalPrice = clients.reduce(
      (sum: any, client: Client) => sum + client.price,
      0
    );
    const formatted = totalPrice.toLocaleString();
    total_revenue = formatted;
  }
  return (
    <div className="space-y-5">
      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between">
        <Heading text={`Work Panel - ${organization.name}`} />
        {is_loading ? (
          <Spinner />
        ) : (
          <Heading text={`Today: ${total_revenue} uzs`} />
        )}
      </div>
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
