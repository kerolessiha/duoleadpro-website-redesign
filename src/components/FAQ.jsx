"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "In which countries can DuoLeadPro place talent?",
    answer:
      "We operate worldwide, with particular expertise in Europe, the Middle East, North Africa and Asia. Our network includes professionals in more than 30 countries.",
  },
  {
    question: "How quickly can a placement be realized?",
    answer:
      "Depending on complexity, we can present qualified candidates within 2 to 6 weeks. For urgent positions, we offer an accelerated process.",
  },
  {
    question: "What guarantee do you offer on placements?",
    answer:
      "We offer a replacement guarantee on every placement. If a candidate does not meet expectations, we will find a replacement free of charge.",
  },
  {
    question: "Can you also handle websites and marketing?",
    answer:
      "Absolutely. Our full-service approach combines staffing with website development, IT consulting and lead generation for an integrated growth strategy.",
  },
  {
    question: "What are the costs for your services?",
    answer:
      "Our rates are tailored and depend on the scope of your project. Contact us for a no-obligation proposal tailored to your specific needs.",
  },
  {
    question: "What makes this redesign different from the original website?",
    answer:
      "The redesigned concept improves visual hierarchy, trust signals, service presentation, conversion paths, and overall frontend quality. It is intended to feel more premium, more strategic, and more focused on business outcomes.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#0b1220] py-24 text-white md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-16">
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Questions people usually ask before getting started.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            These answers help clarify the offer, reduce hesitation, and make
            the experience feel more trustworthy and complete.
          </p>
        </div>

        <div className="mt-12 rounded-[28px] border border-white/10 bg-white/4 p-4 md:p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-white/10"
              >
                <AccordionTrigger className="text-left text-base font-medium text-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-slate-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
