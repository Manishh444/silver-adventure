import { Card, CardContent } from "../Components/ui/card";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../Components/ui/accordion";
import GetQuotationModal from "../Components/GetQuotationModal";

import { motion } from "framer-motion";
import packages from "../data/packageData.json";

/* ================= ACCORDION ================= */

export function SectionAccordion({ section, openSections, setOpenSections }) {

  const toggleSection = () => {
    setOpenSections((prev) =>
      prev.includes(section.id)
        ? prev.filter((id) => id !== section.id)
        : [...prev, section.id]
    );
  };

  return (
    <Accordion
      type="multiple"
      value={openSections}
      className="w-full border rounded-xl mb-4"
    >

      <AccordionItem value={section.id}>

        <AccordionTrigger
          onClick={(e) => {
            e.preventDefault();
            toggleSection();
          }}
          className="bg-gray-100 px-4 py-2 font-semibold text-left"
        >
          {section.title}
        </AccordionTrigger>

        <AccordionContent>

          <table className="w-full text-sm border-t">
            <tbody>

              {section.rows.map(([label, value], idx) => (
                <tr key={idx} className="border-b last:border-none">

                  <td className="px-4 py-2 font-medium text-gray-700">
                    {label}
                  </td>

                  <td className="px-4 py-2 text-gray-600">
                    {value}
                  </td>

                </tr>
              ))}

            </tbody>
          </table>

        </AccordionContent>

      </AccordionItem>

    </Accordion>
  );
}

/* ================= PACKAGE CARD ================= */

export function PackageCard({ pkg, openSections, setOpenSections }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >

      <Card className="rounded-2xl shadow-md hover:shadow-xl transition border w-full overflow-hidden">

        {/* HEADER */}

        <div
          className="text-white text-center p-4 font-bold text-lg"
          style={{ backgroundColor: pkg.color }}
        >
          {pkg.title}

          <div className="mt-1 text-sm font-normal">
            {pkg.price}
          </div>

        </div>

        <CardContent className="px-4 py-6">

          {pkg.sections.map((section) => (

            <SectionAccordion
              key={section.id}
              section={section}
              openSections={openSections}
              setOpenSections={setOpenSections}
            />

          ))}

          {/* QUOTATION BUTTON */}

          <GetQuotationModal
            triggerLabel="Get Quotation"
            selectedPackage={pkg.title}
            packages={packages.map((p) => ({
              title: p.title,
            }))}
          />

        </CardContent>

      </Card>

    </motion.div>
  );
}

/* ================= MAIN SECTION ================= */

export default function PackagesSection() {

  const [openSections, setOpenSections] = useState([]);

  return (
    <section className="py-12">

      <div className="container mx-auto px-6">

        <h1 className="text-3xl font-bold text-center mb-10">
          Turnkey Construction Packages
        </h1>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {packages.map((pkg) => (

            <PackageCard
              key={pkg.id}
              pkg={pkg}
              openSections={openSections}
              setOpenSections={setOpenSections}
            />

          ))}

        </div>

      </div>

    </section>
  );
}