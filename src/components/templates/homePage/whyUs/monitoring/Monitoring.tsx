import React from "react";
import Button from "../../../../shared/ui/Button";
import Box from "../../../../shared/ui/FlexBox";
import Heading from "../../../../shared/ui/Heading";
import ParaGraph from "../../../../shared/ui/ParaGraph";
import Img from "../../../../shared/ui/Img";
export default function Monitoring() {
  return (
    <>
      <Box
        display="flex"
        columnGap="10vw"
        width="100%"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
        height="100%"
      >
        <Box
          justifyContent="flex-start"
          display="flex"
          rowGap="1rem"
          width="30%"
          flexDirection="column"
        >
          <Button
            background="linear-gradient(45deg, #0f5ef7, #0f5ef7) !important"
            text="Why Us?"
            padding="0 0.6rem"
            lineHeight="2"
            height="2.1em"
            fontSize="1rem"
            borderRadius="0.125rem"
            maxWidth="5.938rem"
          />
          <Heading
            textAlign="start"
            text="Why eSkooly is the best school management software?"
            fontWeight="600"
            fontFamily={`Nexa Bold, sans-serif`}
            fontSize="1.6rem"
            color="#fff"
            lineHeight="normal"
          />
          <ParaGraph
            fontWeight="500"
            color="#fff"
            textAlign="start"
            fontSize="0.8rem"
            text="Besides, eSkooly is a completely free online school management software, it has more school management features than any other online school management system in the market. It does not end here, eSkooly is still enhancing features. You will be automatically updated as a new feature will be a part of our free school management software. Some main school management features are given below."
          />
        </Box>

        <Img
          height="18.75rem"
          width="23.063rem"
          src="/imgs/whyUs/desktop.png"
        />
      </Box>
    </>
  );
}
