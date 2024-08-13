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
      >
        {features.schoolFeatures.map((obj, index) => {
          return (
            <Box
              width="40vw"
              display="flex"
              flexDirection={obj.direction}
              justifyContent="space-between"
              alignItems="center"
              key={index}
            >
              <Box width="30vw">
                <Heading
                  text={obj.heading}
                  textAlign="center"
                  fontSize="1.7rem"
                  fontWeight="600"
                  padding="0.7rem 0rem"
                  fontFamily={`Nexa Bold, sans-serif`}
                />
                <ParaGraph
                  textAlign="center"
                  fontSize="0.9rem"
                  text={obj.para}
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
