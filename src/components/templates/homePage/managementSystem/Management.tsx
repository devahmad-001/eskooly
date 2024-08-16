import React from "react";
import ManagementDeskcription from "./Deskcription";
import Box from "@/components/shared/ui/FlexBox";

export default function Management() {
  return (
    <>
      <Box display="flex" flexDirection="column" rowGap="3rem" >
        <ManagementDeskcription />
      </Box>
    </>
  );
}
