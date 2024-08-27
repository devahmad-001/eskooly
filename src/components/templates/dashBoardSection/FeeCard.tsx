import Box from "@/components/shared/ui/FlexBox";
import Heading from "@/components/shared/ui/Heading";
import {
  SemiBoldDollarIcon,
  TargetIcon,
  RemainingIcon,
  CollectionIcon,
} from "@/components/shared/ui/Icons";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import React from "react";
import { feeData, monthlySchoolData } from "../../../../Type";
export default function FeeCard() {
  return (
    <>
      {/* {feeData.map((data: any, index: number) => {
        return (
          <>
            <Box display="flex" flexDirection={data.direction} key={index} maxWidth="200px" >
              <Box
                display="flex"
                columnGap="0.3rem"
                justifyContent={
                  data.direction === "column-reverse" ? "start" : "center"
                }
                alignItems="center"
              >
                {data.icon == "TargetIcon" ? (
                  <TargetIcon
                    width="18px"
                    height="18px"
                    color=" rgb(255, 128, 139)"
                  />
                ) : data.icon == "CollectionIcon" ? (
                  <CollectionIcon
                    width="18px"
                    height="18px"
                    color=" rgb(255, 128, 139)"
                  />
                ) : (
                  <RemainingIcon
                    width="18px"
                    height="18px"
                    color=" rgb(255, 128, 139)"
                  />
                )}
                <ParaGraph
                  fontSize="smaller"
                  color="--dark-pink"
                  text={data.title}
                />
              </Box>
              <Box
                display="flex"
                columnGap="0.2rem"
                justifyContent={
                  data.direction === "column-reverse" ? "start" : "center"
                }
                alignItems="center"
              >
                <SemiBoldDollarIcon
                  width="1.5rem"
                  height="1.5rem"
                  color=" rgb(255, 128, 139)"
                />
                <ParaGraph
                  text="0"
                  fontSize="x-large"
                  fontWeight="600"
                  color="--dark-pink"
                />
              </Box>
            </Box>
          </>
        );
      })} */}

      {/* {
        feeData.map((obj: any) => {
          return <>
            <Box display={obj.border ? "flex" : ''} >

            </Box>
          </>
        })
      } */}
    </>
  );
}
