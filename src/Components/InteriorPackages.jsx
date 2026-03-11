import { Card, CardContent } from "../Components/ui/card";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../Components/ui/accordion";

import { motion } from "framer-motion";
import packages from "../data/interiorPackages.json";
import GetInteriorQuotationModal from "./GetInteriorQuotationModal";

/* ================= PACKAGE CARD ================= */

export function InteriorPackageCard({ pkg, openSections, setOpenSections }) {
  const toggleSection = (id) => {
    setOpenSections((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <Card className="rounded-2xl shadow-md hover:shadow-xl transition border w-full overflow-hidden">
        
        {/* Header */}
        <div
          className="text-white text-center p-4 font-bold text-lg"
          style={{ backgroundColor: pkg.color }}
        >
          {pkg.title}
          <div className="mt-1 text-sm font-normal">{pkg.price}</div>
        </div>

        <CardContent className="px-4 py-6">

          <Accordion
            type="multiple"
            value={openSections}
            className="w-full border rounded-xl mb-4"
          >
            {pkg.sections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>

                <AccordionTrigger
                  onClick={() => toggleSection(section.id)}
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
            ))}
          </Accordion>

          <GetInteriorQuotationModal
            triggerLabel="Get Quotation"
            selectedPackage={pkg.title}
          />

        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ================= MAIN SECTION ================= */

export default function InteriorPackages() {

  const [openSections, setOpenSections] = useState([]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">

        <h1 className="text-3xl font-bold text-center mb-10">
          Turnkey Interior Packages
        </h1>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => (
            <InteriorPackageCard
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