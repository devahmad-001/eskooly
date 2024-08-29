import Button from "@/components/shared/ui/Button";
import Heading from "@/components/shared/ui/Heading";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import React from "react";
import InputSection from "./InputSection";


export default function ContactForm() {
  return (
    <>
      <div className="max-w-4xl mx-auto bg-blue-800 p-8 rounded-lg shadow-lg">
        <Heading text="Drop us a Line." fontWeight="700" fontSize="1.875rem" lineHeight="2.25em" color="--white" textAlign="center" />
        <ParaGraph text="Ask us a question, or just say Hello." margin="0 0 2rem 0" fontSize="1.125rem" lineHeight="1.75rem" color="--white" textAlign="center" />
        <InputSection />
        <div className="text-center">
          <Button text="Send Message" margin="0 auto" padding="0.5rem 1.5rem 0.5rem 1.5rem" color="--white" fontWeight="600" borderRadius="0.375rem" backgroundColor=" --light-blue" hoverBackgroundColor=" --median-blue" />
        </div>
      </div>    </>
  );
}
