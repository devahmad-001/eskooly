import Heading from "@/components/shared/ui/Heading";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import Image from "next/image";
import { features } from "../../../../../../Type";
import Box from "@/components/shared/ui/FlexBox";

export default function SchoolDescription() {
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        columnGap="2rem"
        justifyContent="center"
        rowGap="4rem"
        alignItems="center"
        padding_Sm="2rem"
        rowGap_Sm="2rem"

      >
        {features.schoolFeatures.map((obj, index) => {
          return (
            <Box
              maxWidth_Md="20rem"
              maxWidth="32rem"
              display="flex"
              flexDirection={obj.direction}
              flexDirection_Md="column-reverse"
              flexDirection_Sm="column-reverse"
              // maxWidth_Sm="28rem"
              justifyContent="space-between"
              alignItems="center"
              key={index}
            >
              <Box maxWidth="24rem"  >
                <Heading
                  text={obj.heading}
                  color="--white"
                  textAlign="center"
                  fontSize="1.7rem"
                  fontWeight="600"
                  padding="0.7rem 0rem"
                  fontFamily={`Nexa Bold, sans-serif`}
                  fontSize_Sm="1.3rem"
                />
                <ParaGraph
                  text={obj.para}
                  color="--white"
                  textAlign="center"
                  fontSize="0.9rem"
                  fontSize_Sm="0.6"
                  textAlign_Sm="center"
                />
              </Box>
              <Image alt="" width={100} height={100} src={obj.gif} />
            </Box>
          );
        })}
      </Box>
    </>
  );
}
