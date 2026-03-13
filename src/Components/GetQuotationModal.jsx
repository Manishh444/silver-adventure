import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "../Components/ui/dialog";

import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/button";
import { Label } from "../Components/ui/label";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

/* ================= VALIDATION ================= */

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
});

/* ================= PREMIUM LIST ITEM ================= */

const SelectListItem = ({ active, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full flex items-center justify-between
      rounded-xl border px-6 py-4 text-left
      transition-all duration-200
      ${
        active
          ? "border-orange-500 bg-orange-50 shadow-sm"
          : "border-gray-200 hover:border-orange-300"
      }`}
  >
    <span className="font-medium">{children}</span>

    <span
      className={`w-5 h-5 rounded-full border flex items-center justify-center
        ${active ? "border-orange-500" : "border-gray-300"}`}
    >
      {active && (
        <span className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
      )}
    </span>
  </button>
);

/* ================= COMPONENT ================= */

export default function GetQuotationModal({
  triggerLabel,
  packages = [],
  selectedPackage = "",
}) {

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const bhkImages = {
  "1 BHK": [
  "/BHK/1bhk/01_LIVING.webp",
  "/BHK/1bhk/02_TV.webp",
  "/BHK/1bhk/03_KITCHEN.webp",
  "/BHK/1bhk/03_V2KITCHEN.webp",
  "/BHK/1bhk/04_WARDROBE_04.webp",
  "/BHK/1bhk/05_WARDROBE..webp"
],

  "2 BHK": [
    "/BHK/2bhk/01.webp",
    "/BHK/2bhk/02.webp",
    "/BHK/2bhk/03.webp",
    "/BHK/2bhk/04.webp",
    "/BHK/2bhk/05.webp",
    "/BHK/2bhk/06.webp",
    "/BHK/2bhk/07.webp",
    "/BHK/2bhk/08.webp",
    "/BHK/2bhk/09.webp",
    "/BHK/2bhk/10.webp",
  ],

  "3 BHK": [
    "/BHK/3bhk/01. TV UNIT.webp",
    "/BHK/3bhk/02. LIVING V1.webp",
    "/BHK/3bhk/02. LIVING V2.webp",
    "/BHK/3bhk/02. LIVING V3.webp",
    "/BHK/3bhk/03.KITCHEN.V_1.webp",
    "/BHK/3bhk/04.KITCHEN.V_2.webp",
    "/BHK/3bhk/05.WARDROBE.webp",
    "/BHK/3bhk/06.WARDROBE.webp",
    "/BHK/3bhk/07.WARDROBE.webp"
  ],

  "4 BHK": [
  "/BHK/4bhk/01- liv v1 COVER PIC.webp",
  "/BHK/4bhk/02.webp",
  "/BHK/4bhk/03.webp",
  "/BHK/4bhk/04.webp",
  "/BHK/4bhk/05.webp",
  "/BHK/4bhk/06.webp",
  "/BHK/4bhk/07- FF BD 1 V1.webp",
  "/BHK/4bhk/08- FF BD 1 V2.webp",
  "/BHK/4bhk/09- FF BD 1 V4.webp",
  "/BHK/4bhk/10- FF BD 2 V1.webp",
  "/BHK/4bhk/11- FF BD 2 V3.webp",
  "/BHK/4bhk/12 - FF BD 2 V2.webp",
  "/BHK/4bhk/13 - FF BD 2 V4.webp",
  "/BHK/4bhk/14 - FF BD 3 V1.webp",
  "/BHK/4bhk/15 - FF BD 3 V2.webp",
  "/BHK/4bhk/16 - FF WALKIN WARDROBE V1.webp",
  "/BHK/4bhk/17 - FF WALKIN WARDROBE V2.webp"
]
};

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const formik = useFormik({
    initialValues: {
      bhk: "",
      rooms: {
        living: 1,
        kitchen: 1,
        bedroom: 1,
        bathroom: 1,
      },
      package: selectedPackage,
      name: "",
      phone: "",
    },

    validationSchema,

    onSubmit: async (values) => {
      console.log("FORM DATA SENT:", values);

      try {
        await fetch(
          "https://f0mvlrtzl2.execute-api.us-east-1.amazonaws.com/contact",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          }
        );
      } catch {
        console.log("CORS blocked locally (expected)");
      }

      setOpen(false);
      setStep(1);
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (selectedPackage) {
      formik.setFieldValue("package", selectedPackage);
      setStep(3);
    }
  }, [selectedPackage]);

  return (
    <>
      {/* TRIGGER */}

      <Button
        onClick={() => setOpen(true)}
        className="w-full text-white shadow-md hover:shadow-lg"
        style={{ backgroundColor: "#ff7a00" }}
      >
        {triggerLabel}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>

        <DialogContent
          className="max-w-5xl w-[94vw] rounded-2xl p-0 overflow-hidden"
        >

          <DialogHeader className="px-10 pt-8">
            <DialogTitle className="text-xl font-semibold">
              Get a Free Quotation
            </DialogTitle>

            <DialogDescription className="sr-only">
              Multi step quotation form
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col min-h-[520px]">

            {/* ===== STEPPER ===== */}

            <div className="border-b bg-gray-50 px-10 py-7">

              <div className="relative flex items-center justify-between">

                <div className="absolute left-0 right-0 top-5 h-[2px] bg-gray-200" />

                <div
                  className="absolute top-5 h-[2px] bg-orange-500 transition-all duration-500 ease-in-out"
                  style={{
                    left: "12.5%",
                    width: `${((step - 1) / 3) * 75}%`,
                  }}
                />

                {["BHK", "Rooms", "Package", "Details"].map(
                  (label, index) => {

                    const stepNumber = index + 1;
                    const active = step === stepNumber;
                    const completed = step > stepNumber;

                    return (
                      <div
                        key={label}
                        className="relative z-10 flex flex-col items-center flex-1"
                      >
                        <div
                          className={`
                            w-11 h-11 flex items-center justify-center
                            rounded-full text-sm font-semibold
                            transition-all duration-300 transform-gpu
                            ${
                              completed
                                ? "bg-orange-500 text-white scale-105"
                                : active
                                ? "border-2 border-orange-500 text-orange-500 bg-white scale-110"
                                : "bg-white border-2 border-gray-300 text-gray-400"
                            }
                          `}
                        >
                          {stepNumber}
                        </div>

                        <p
                          className={`mt-2 text-sm transition-colors duration-300 ${
                            active || completed
                              ? "text-orange-500 font-semibold"
                              : "text-gray-500"
                          }`}
                        >
                          {label}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* ===== SLIDER ===== */}

            <div className="flex-1 overflow-hidden relative pointer-events-auto">

              <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${(step - 1) * 100}%)`,
                }}
              >

                {/* STEP 1 */}

                {/* STEP 1 */}

<div className="w-full flex-shrink-0 flex justify-center items-center px-10">

  <div className="w-full max-w-5xl grid grid-cols-2 gap-10 items-start">

    {/* LEFT SIDE — BHK OPTIONS */}

    <div className="space-y-3">

      <h3 className="text-2xl font-semibold mb-6">
        Select Your BHK
      </h3>

      {["1 BHK","2 BHK","3 BHK","4 BHK"].map((b)=>(
        <SelectListItem
          key={b}
          active={formik.values.bhk===b}
          onClick={()=>formik.setFieldValue("bhk",b)}
        >
          {b}
        </SelectListItem>
      ))}

      <Button
        className="w-full mt-8"
        disabled={!formik.values.bhk}
        style={{backgroundColor:"#ff7a00"}}
        onClick={()=>setStep(2)}
      >
        Continue
      </Button>

    </div>


    {/* RIGHT SIDE — IMAGE PREVIEW */}

    <div className="grid grid-cols-2 gap-4 max-h-[320px] overflow-y-auto">

      {formik.values.bhk &&
        bhkImages[formik.values.bhk]?.map((img,index)=>(
          <img
            key={index}
            src={img}
            alt="bhk preview"
            className="rounded-lg shadow-md object-cover h-32 w-full"
          />
        ))
      }

    </div>

  </div>

</div>

                {/* STEP 2 */}

                <div className="w-full flex-shrink-0 flex justify-center items-center px-10">

                  <div className="w-full max-w-xl space-y-3">

                    <h3 className="text-2xl font-semibold text-center mb-6">
                      Select Rooms
                    </h3>

                    {Object.entries(formik.values.rooms).map(([room,count])=>(
                      <div key={room} className="flex justify-between items-center border rounded-xl px-5 py-3">

                        <span className="capitalize font-medium">{room}</span>

                        <div className="flex gap-4">

                          <button
                            type="button"
                            onClick={()=>formik.setFieldValue(`rooms.${room}`,Math.max(0,count-1))}
                          >
                            −
                          </button>

                          <span>{count}</span>

                          <button
                            type="button"
                            onClick={()=>formik.setFieldValue(`rooms.${room}`,count+1)}
                          >
                            +
                          </button>

                        </div>

                      </div>
                    ))}

                    <div className="flex gap-3 mt-8">

                      <Button variant="outline" onClick={()=>setStep(1)}>
                        Back
                      </Button>

                      <Button
                        className="flex-1"
                        style={{backgroundColor:"#ff7a00"}}
                        onClick={()=>setStep(3)}
                      >
                        Continue
                      </Button>

                    </div>

                  </div>
                </div>

                {/* STEP 3 */}

                <div className="w-full flex-shrink-0 flex justify-center items-center px-10">

                  <div className="w-full max-w-xl space-y-3">

                    <h3 className="text-2xl font-semibold text-center mb-6">
                      Choose Package
                    </h3>

                    {packages.map((p)=>(
                      <SelectListItem
                        key={p.title}
                        active={formik.values.package===p.title}
                        onClick={()=>formik.setFieldValue("package",p.title)}
                      >
                        {p.title}
                      </SelectListItem>
                    ))}

                    <div className="flex gap-3 mt-8">

                      <Button variant="outline" onClick={()=>setStep(2)}>
                        Back
                      </Button>

                      <Button
                        disabled={!formik.values.package}
                        className="flex-1"
                        style={{backgroundColor:"#ff7a00"}}
                        onClick={()=>setStep(4)}
                      >
                        Continue
                      </Button>

                    </div>

                  </div>
                </div>

                {/* STEP 4 */}

                <div className="w-full flex-shrink-0 flex justify-center items-center px-10">

                  <form
                    onSubmit={formik.handleSubmit}
                    className="w-full max-w-xl space-y-5"
                  >

                    <Label>Name</Label>
                    <Input
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />

                    <Label>Phone</Label>
                    <Input
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />

                    <DialogFooter className="flex gap-3">

                      <Button
                        type="button"
                        variant="outline"
                        onClick={()=>setStep(3)}
                      >
                        Back
                      </Button>

                      <Button
                        type="submit"
                        className="flex-1 text-white shadow-lg"
                        style={{backgroundColor:"#ff7a00"}}
                      >
                        Submit Request
                      </Button>

                    </DialogFooter>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </DialogContent>

      </Dialog>

    </>
  );
}