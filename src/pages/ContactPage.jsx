import React from "react";
import ContactCard, { contactCards } from "../Components/ContactCard";
import { useFormik } from "formik";
import Button from "../Components/Button";

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
  });

  console.log(formik);

  return (
    <>
      <main className="w-full">
        <section className="mt-20 py-6">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading Section */}
            <div className="flex flex-col items-center text-center py-12 space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-quadcore-primary font-bold">
                Get <span className="text-quadcore-accent">In Touch</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-quadcore-muted max-w-2xl">
                Ready to start your project? Contact us today for a free
                consultation and quote.
              </p>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col md:flex-row mb-12 gap-8 md:gap-12">
              {/* Contact Info Section */}
              <div className="md:w-1/2 space-y-8">
                <h2 className="text-2xl sm:text-3xl text-quadcore-primary font-bold">
                  Contact Information
                </h2>
                {contactCards?.map((card) => (
                  <ContactCard key={card?.id} cardDetails={card} />
                ))}
              </div>

              {/* Vertical Divider — hidden on mobile */}
              <div className="hidden md:block border-l border-gray-300"></div>

              {/* Send Message Section */}
              <div className="md:w-1/2 h-min shadow-sm rounded-md space-y-8">
                <h2 className="text-2xl sm:text-3xl text-quadcore-primary font-bold">
                  Send Us a Message
                </h2>
                <form className="space-y-4" onSubmit={formik?.handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formik?.values?.name}
                      onChange={formik?.handleChange}
                      onBlur={formik?.handleBlur}
                      placeholder="Your Name"
                      className="placeholder-quadcore-accent border rounded-md px-2 py-3 focus:outline-quadcore-primary w-full"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formik?.values?.email}
                      onChange={formik?.handleChange}
                      onBlur={formik?.handleBlur}
                      placeholder="Your Email"
                      className="placeholder-quadcore-accent border rounded-md px-2 py-3 focus:outline-quadcore-primary w-full"
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    value={formik?.values?.subject}
                    onChange={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    placeholder="Subject"
                    className="placeholder-quadcore-accent border rounded-md px-2 py-3 focus:outline-quadcore-primary w-full"
                  />

                  <input
                    type="text"
                    name="phone"
                    value={formik?.values?.phone}
                    onChange={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    placeholder="Mobile Number"
                    className="placeholder-quadcore-accent border rounded-md px-2 py-3 focus:outline-quadcore-primary w-full"
                  />

                  <textarea
                    name="message"
                    value={formik?.values?.message}
                    onChange={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    id="message"
                    cols="30"
                    rows="4"
                    placeholder="Message"
                    className="placeholder-quadcore-accent border rounded-md px-2 py-3 focus:outline-quadcore-primary w-full"></textarea>

                  <Button
                    type="submit"
                    className="bg-quadcore-accent hover:bg-[#3B6D5C] px-6 py-2 rounded-md w-full text-quadcore-lightBackground"
                    text="Send Message"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
