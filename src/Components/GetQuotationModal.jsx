import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "../Components/ui/dialog";
import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/button";
import { Label } from "../Components/ui/label";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),

  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

  sqft: Yup.string().optional(),
  message: Yup.string().optional(),
  package: Yup.string().optional(),
});

export default function GetQuotationModal({
  triggerLabel = "Get Quotation",
  packages = [],
}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      sqft: "",
      message: "",
      package: "",
    },

    validationSchema,

    onSubmit: async (values, { resetForm }) => {
      setLoading(true);

      try {
        // EMAIL API (unchanged)
        const res = await fetch(
          "https://f0mvlrtzl2.execute-api.us-east-1.amazonaws.com/contact",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          }
        );

        if (!res.ok) {
          throw new Error("Email failed");
        }

        // WHATSAPP REDIRECT (unchanged)
        const whatsappMsg = `
Quotation Request
Name: ${values.name}
Phone: ${values.phone}
SqFt: ${values.sqft}
Package: ${values.package}
Message: ${values.message}
        `;

        window.open(
          `https://wa.me/+919900064128?text=${encodeURIComponent(whatsappMsg)}`,
          "_blank"
        );

        setSuccess(true);
        resetForm();
      } catch (error) {
        alert("Failed to send request");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-full rounded-xl text-white"
          style={{ backgroundColor: "#ff7a00" }}>
          {triggerLabel}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Get a Free Quotation
          </DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="py-10 text-center">
            <h2 className="text-lg font-semibold text-green-600">
              Submitted Successfully!
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              We will get back to you shortly.
            </p>
            <Button
              className="mt-4 w-full rounded-xl"
              style={{ backgroundColor: "#ff7a00" }}
              onClick={() => setSuccess(false)}>
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {packages.length > 0 && (
              <div>
                <Label>Select Package</Label>
                <select
                  name="package"
                  value={formik.values.package}
                  onChange={formik.handleChange}
                  className="w-full border rounded-md px-3 py-2">
                  <option value="">Choose...</option>
                  {packages.map((p) => (
                    <option key={p.title} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <Label>Name</Label>
              <Input
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <Label>Phone Number</Label>
              <Input
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-xs">{formik.errors.phone}</p>
              )}
            </div>

            <div>
              <Label>Sq. Ft (Optional)</Label>
              <Input
                name="sqft"
                value={formik.values.sqft}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <Label>Message</Label>
              <Input
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
            </div>

            <DialogFooter>
              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl text-white"
                style={{ backgroundColor: "#ff7a00" }}>
                {loading ? "Submitting..." : "Submit Request"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
