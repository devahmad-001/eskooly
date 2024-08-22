import Heading from "@/components/shared/ui/Heading";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import Image from "next/image";
import { features } from "../../../../../../Type";
import Box from "@/components/shared/ui/FlexBox";

export default function AllFeaturesDeskcription() {
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        columnGap="1rem"
        justifyContent="center"
        rowGap="2rem"
        alignItems="center"
        padding_Sm="1.5rem 1.5rem"
      >
        {features.allFeatures.map((obj, index) => {
          return (
            <Box
              maxWidth="17rem"
              display="flex"
              flexDirection="column"
              justifyContent="space-arround"
              alignItems="center"
              key={index}
            >
              <Image alt="" width={75} height={75} src={obj.src} />
              <Box width="100%">
                <Heading
                  color="--white"
                  text={obj.heading}
                  textAlign="center"
                  fontSize="1.7rem"
                  fontWeight="600"
                  padding="0.7rem 0rem"
                  fontFamily={`Nexa Bold, sans-serif`}
                  padding_Sm="0.3rem 0rem"
                />
                <ParaGraph
                  color="--white"
                  lineHeight="1.3rem"
                  textAlign="center"
                  fontSize="0.78rem"
                  text={obj.para}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
