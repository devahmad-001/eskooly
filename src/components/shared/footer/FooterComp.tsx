import React from "react";
import Box from "../ui/FlexBox";
import Img from "../ui/Img";
import ParaGraph from "../ui/ParaGraph";
import {
  FacebookIcon,
  GoogleIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../ui/Icons";

export default function FooterComp() {
  return (
    <>
      <Box
        flexWrap="wrap"
        display="flex"
        justifyContent="space-around"
        width="100%"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          rowGap="1rem"
          maxWidth="25rem"
        >
          <Img
            src="/images/logos/logoxx.png"
            padding="0.65rem 0rem"
            maxWidth="6rem"
          />
          <ParaGraph
            text={
              <>
                eSkooly is the world&apos;s best and #1 ranked free online
                school management software. Our school management software has
                more features than any school software in the market.
              </>
            }
            color="--dark-grey"
            fontSize="small"
            lineHeight="medium"
            fontWeight="200"
          />
          <ParaGraph
            text={
              <>
                Copyright © 2024 eSkooly (SMC Private) Ltd. - All rights
                reserved.
              </>
            }
            color="--dark-grey"
            fontSize="small"
            lineHeight="medium"
            fontWeight="300"
          />
        </Box>
        <Box
          flexWrap="wrap"
          display="flex"
          flexDirection="row"
          columnGap="8rem"
          maxWidth="60vw"
        >
          <Box display="flex" flexDirection="column" rowGap="0.6rem">
            <ParaGraph
              text="ESKOOLY"
              font-size=" revert-layer"
              font-weight="600"
              color="white"
              lineHeight="2"
            />
            <ParaGraph
              text="Home"
              color="--dark-grey"
              fontSize="small"
              lineHeight="medium"
              fontWeight="300"
            />
            <ParaGraph
              text="Pricing"
              color="--dark-grey"
              fontSize="small"
              lineHeight="medium"
              fontWeight="300"
            />
            <ParaGraph
              text="Get started"
              color="--dark-grey"
              fontSize="small"
              lineHeight="medium"
              fontWeight="300"
            />
            <ParaGraph
              text="Help"
              color="--dark-grey"
              fontSize="small"
              lineHeight="medium"
              fontWeight="300"
            />
          </Box>
          <Box display="flex" flexDirection="column" rowGap="0.6rem">
            <ParaGraph
              text="TERMS"
              font-size=" revert-layer"
              font-weight="600"
              color="white"
              lineHeight="2"
            />
            <ParaGraph
              text="Terms of Service"
              color="--dark-grey"
              fontSize="small"
              lineHeight="medium"
              fontWeight="300"
            />
            <ParaGraph
              text="Privacy Policy"
              color="--dark-grey"
              fontSize="small"
              lineHeight="medium"
              fontWeight="300"
            />
            <ParaGraph
              text="Saas Services"
              color="--dark-grey"
              fontSize="small"
              lineHeight="medium"
              fontWeight="300"
            />
          </Box>
          <Box display="flex" flexDirection="column" rowGap="1rem">
            <Img
              maxHeight="2.8rem"
              maxWidth="8.7rem"
              src="/images/illustrations/mockups/landing3/google.png"
            />
            <Img
              maxHeight="2.8rem"
              maxWidth="8.7rem"
              src="/images/illustrations/mockups/landing3/apple.png"
            />
            <Box
              display="flex"
              justifyContent="space-between"
              padding="0rem 0.5rem 0rem 0.5rem"
            >
              <FacebookIcon color="grey" />
              <TwitterIcon color="grey" />
              <GoogleIcon color="grey" />
              <YoutubeIcon color="grey" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
