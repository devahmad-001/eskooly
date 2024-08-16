import Box from "@/components/shared/ui/FlexBox";
import InputField from "@/components/shared/ui/InputFeild";
import Span from "@/components/shared/ui/Span";
import React from "react";

export default function ContactForm() {
  return (
    <>
      {/* Container */}
      <Box display="flex" flexWrap="wrap" columnGap="2rem"width="50vw" >
        {/* Input Box */}

        <Box display="flex" flexDirection="column" justifyContent="start">
          <Span text="First Name *" />
          <InputField height="2rem" border="1px solid gray" />
        </Box>
        {/* Input Box */}

        <Box display="flex" flexDirection="column" justifyContent="start">
          <Span text="First Name *" />
          <InputField height="2rem" border="1px solid gray" />
        </Box>
        {/* Input Box */}

        <Box display="flex" flexDirection="column" justifyContent="start">
          <Span text="First Name *" />
          <InputField height="2rem" border="1px solid gray" />
        </Box>
        {/* Input Box */}

        <Box display="flex" flexDirection="column" justifyContent="start">
          <Span text="First Name *" />
          <InputField height="2rem" border="1px solid gray" />
        </Box>
        {/* Message Box */}

        <Box display="flex" flexDirection="column" justifyContent="start">
          <Span text="First Name *" />
          <InputField height="8rem" width="100%" border="1px solid gray" />
        </Box>
      </Box>
    </>
  );
}
