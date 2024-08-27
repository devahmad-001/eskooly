import Box from "@/components/shared/ui/FlexBox";
import Heading from "@/components/shared/ui/Heading";
import {
  DollarIcon,
  StudentIcon,
  CollectionIcon,

} from "@/components/shared/ui/Icons";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import React from "react";
import { monthlySchoolData } from "../../../../Type";

export default function SchoolDataCard() {
  return (
    <>
      <Box display="flex" justifyContent="space-around"  >
        {monthlySchoolData.map((data, index) => {
          return (
            <>
              <Box
                hoverBoxShadow="0px 0px 21px 3px rgba(199,198,204,1)"
                hoverOpacity="0.9"
                width="240px"
                padding="15px 25px"
                borderRadius="1rem"
                height="160px"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                backgroundColor={data.bg}
                top="0"
                left="0"
                opacity='0.8'
              >
                <ParaGraph
                  textAlign="start"
                  fontSize="0.9rem"
                  fontWeight="700"
                  text={data.heading}
                  color="--white"
                />
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  {
                    data.icon === "student" &&
                    <StudentIcon color="white" height="2rem" width="2rem" /> ||
                    data.icon === "bag" &&
                    <CollectionIcon color="white" height="2rem" width="2rem" /> ||
                    <DollarIcon color="white" height="2rem" width="2rem" />


                  } <Heading text="0" color="--white" fontSize="revert" fontWeight="700" />
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  padding="0.25rem"
                >
                  <ParaGraph text="This Month" fontSize="0.95rem" color="--white" />
                  <ParaGraph text={data.monthlyValues} color="--white" />
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
}
