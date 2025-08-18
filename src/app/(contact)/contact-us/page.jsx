import React from "react";
import ContactMain from "@/pages/contact/contact";
import { config } from "../../../../config";

export const metadata = {
  title: "Secure 365 - Contact page",
};

const ContactPage = async() => {


  const data = await fetch(
    `${config.APP_URL}/secure-plugin/v1/contact`,
    {
      cache: "no-store",
    }
  );


  const response = await data.json();
  const contactData = response?.data;

  // contact check


  return (
    <ContactMain contactData={contactData}/>
  );
};

export default ContactPage;
