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

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
});

export default function GetInteriorQuotationModal({
  triggerLabel,
  selectedPackage = "",
}) {

  const [open,setOpen] = useState(false);
  const [step,setStep] = useState(1);

  const formik = useFormik({
    initialValues:{
      bhk:"",
      rooms:[],
      package:selectedPackage,
      name:"",
      phone:""
    },

    validationSchema,

    onSubmit:(values)=>{
      console.log("INTERIOR LEAD:",values)
      setOpen(false)
    }
  })

  const roomOptions = [
    "Living Room",
    "Kitchen",
    "Master Bedroom",
    "Wardrobe",
    "TV Unit",
    "False Ceiling"
  ]

  return(
    <>
    
    <Button
      onClick={()=>setOpen(true)}
      className="w-full text-white"
      style={{backgroundColor:"#ff7a00"}}
    >
      {triggerLabel}
    </Button>

    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent className="max-w-2xl">

        <DialogHeader>
          <DialogTitle>
            Get Interior Quotation
          </DialogTitle>

          <DialogDescription className="sr-only">
            Interior quotation form
          </DialogDescription>
        </DialogHeader>

        {/* STEP 1 */}

        {step===1 && (

          <div className="space-y-4">

            <h3 className="text-lg font-semibold">
              Select Your BHK
            </h3>

            {["1 BHK","2 BHK","3 BHK","4 BHK"].map((b)=>(
              <button
                key={b}
                className={`border rounded-lg p-3 w-full text-left ${
                  formik.values.bhk===b
                  ?"border-orange-500 bg-orange-50"
                  :"border-gray-300"
                }`}
                onClick={()=>formik.setFieldValue("bhk",b)}
              >
                {b}
              </button>
            ))}

            <Button
              disabled={!formik.values.bhk}
              onClick={()=>setStep(2)}
              className="w-full"
              style={{backgroundColor:"#ff7a00"}}
            >
              Continue
            </Button>

          </div>

        )}

        {/* STEP 2 */}

        {step===2 && (

          <div className="space-y-4">

            <h3 className="text-lg font-semibold">
              Select Interior Spaces
            </h3>

            {roomOptions.map((room)=>(
              <label
                key={room}
                className="flex items-center gap-3 border rounded-lg p-3"
              >

                <input
                  type="checkbox"
                  value={room}
                  onChange={(e)=>{

                    if(e.target.checked){

                      formik.setFieldValue("rooms",
                        [...formik.values.rooms,room]
                      )

                    }else{

                      formik.setFieldValue("rooms",
                        formik.values.rooms.filter(r=>r!==room)
                      )

                    }

                  }}
                />

                {room}

              </label>
            ))}

            <div className="flex gap-3">

              <Button
                variant="outline"
                onClick={()=>setStep(1)}
              >
                Back
              </Button>

              <Button
                onClick={()=>setStep(3)}
                className="flex-1"
                style={{backgroundColor:"#ff7a00"}}
              >
                Continue
              </Button>

            </div>

          </div>

        )}

        {/* STEP 3 */}

        {step===3 && (

          <form onSubmit={formik.handleSubmit} className="space-y-4">

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

            <DialogFooter>

              <Button
                type="button"
                variant="outline"
                onClick={()=>setStep(2)}
              >
                Back
              </Button>

              <Button
                type="submit"
                style={{backgroundColor:"#ff7a00"}}
              >
                Submit
              </Button>

            </DialogFooter>

          </form>

        )}

      </DialogContent>

    </Dialog>

    </>
  )
}