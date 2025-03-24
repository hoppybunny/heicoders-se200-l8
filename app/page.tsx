import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { db } from "@/db";

export default async function Page() {
  const expenseItems = await db.expenseItem.findMany();

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      {/* Exercise 3 Header */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Exercise 3: Accordion</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Who is Heicoders?</AccordionTrigger>
            <AccordionContent>
              A highly-rated, outcome-driven tech education provider that seeks
              to accelerate your career through high-quality classes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is SE200?</AccordionTrigger>
            <AccordionContent>
              A full-stack software engineering focusing on databases,
              engineering principles and web application frameworks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What OS can I use for web development?
            </AccordionTrigger>
            <AccordionContent>
              Both Windows and Mac operating systems are suitable options.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What is a nanodegree?</AccordionTrigger>
            <AccordionContent>
              Comprises 3 or more individual courses that progressively equip
              learners with the skill sets required for working in the tech
              sector.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Expense Items Header */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Lesson 7: Reading data from ExpenseItem in postgres
        </h2>
        <div className="space-y-3">
          {expenseItems.map((expenseItem) => (
            <div
              key={expenseItem.id}
              className="p-4 rounded-md border shadow-sm bg-white"
            >
              {expenseItem.item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
