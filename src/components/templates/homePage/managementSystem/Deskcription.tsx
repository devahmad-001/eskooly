import Box from "@/components/shared/ui/FlexBox";
import Heading from "@/components/shared/ui/Heading";
import IconBtn from "@/components/shared/ui/IconBtn";
import Img from "@/components/shared/ui/Img";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import React from "react";

export default function ManagementDeskcription() {
  return (
    <>
      {/* Container */}
      <Box
        display="flex"
        columnGap="7rem"
        rowGap_Sm="4rem"
        rowGap_Md="4rem"
        rowGap_Lg="4rem"
        justifyContent="center"
        flexDirection="row"
        flexDirection_Md="column"
        flexDirection_Lg="column"
        flexDirection_Sm="column"
        alignItems="center"
        padding="5rem 0rem"
        padding_Sm=" 4rem 3rem"
        

        
      >
        {/* Text Section  */}
        <Box
          justifyContent="flex-start"
          display="flex"
          rowGap="1rem"
          rowGap_Sm="0.5rem"
          maxWidth="31.5rem"
          minWidth="13rem"
          flexDirection="column"

        >
          <Heading
            text="Single Stop Solution For School Management"
            textAlign="start"
            fontWeight="600"
            fontFamily={`Nexa Bold, sans-serif`}
            fontSize="1.7rem"
            fontSize_Sm="1.1rem"
            color="--white"
            lineHeight="2rem"
            padding="0rem 3rem 0rem 0rem"
            fontSize_Md="1.7rem"
            fontSize_Lg="1.7rem"
            padding_Sm="0"
            lineHeight_Sm="1.4rem"
          />
          <ParaGraph
            text={
              <>
                Managing any educational institute is not a piece of cake.
                Managing students, staff, timetable, exams, class test,
                attendance, fees collection, accounts, etc. It does not end
                here. Parents are always worried about their child&apos;s
                performance and they need satisfaction. They care about their
                child&apos;s academic statics. Moreover, we have seen schools
                using huge registers to mark the attendance of their students
                and staff. And we have also seen that schools manage their
                admission, exams data, class tests data, etc, manually. We know
                it takes a lot of time and is very difficult to manage.
                <br />
                Well! it&apos;s time to put check on these worries. eSkooly
                presents you a free online school management software to make
                conventional tasks easier. This is the one-stop solution to
                manage, track and record everything within your school or
                organization. Our free online school management software
                includes admin, staff and students panel, exams module,
                attendance module, fees collection module, salary and expense
                management, class tests management, inventory management,
                students and staff data record system, and many more. It is very
                easy to use and manage because eskooly is a free online school
                management software for end-users. If you can send an email you
                can use eskooly.
              </>
            }
            fontWeight_Sm="600"
            fontWeight_Md=""
            fontWeight_Lg=""
            fontSize_Sm="0.74rem"
            textAlign_Sm="justify"
            fontSize_Md=""
            fontSize_Lg=""
            fontWeight="500"
            color="--white"
            textAlign="start"
            fontSize="0.82rem"
            lineHeight="1.3rem"
          />
          {/* btn box  */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-arround"
            columnGap="2rem"
            width="100%"
          >
            <IconBtn
              maxWidth="12rem"
              text="Get started for free"
              borderRadius="31.25rem"
              padding="1.375rem 2.3rem"
              color="rgb(255, 255, 255);"
              background="rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;"
              cursor="pointer"
              justifyContent="center"
              textAlign="center"
              whiteSpace="nowrap"
              textDecoration="none solid rgb(255, 255, 255)"
              boxSizing="border-box"
              appearance="none"
              fontSize="0.813rem"
              height="2.9rem"
              alignItems="center"
              displayflex="inline-flex"
              lineHeight="1.313rem"
              position="relative"
              verticalAlign="top"
              userSelect="none"
              transition="all 0.5s ease"
              hoverOpacity="1"
              hoverBoxShadow=" rgba(0, 0, 0, 0.6) 0rem 0.875rem 1.625rem -0.75rem,
     rgba(0, 0, 0, 0.15) 0px 4px 23px 0px,
     rgba(0, 0, 0, 0.3) 0px 8px 10px -5px"
              hoverBackground="black"
              hoverBorder="2px solid black"
              hoverColor="white"
              backgroundColor="rgba(0, 0, 0, 0)"
              heigth="3rem"
              border="2px solid white"
            />
            <ParaGraph
              text="Right Now "
              fontWeight="500"
              color="--white"
              textAlign="start"
              fontSize="0.82rem"
              lineHeight="1.3rem"
              fontSize_Sm="0.7rem"
              fontSize_Md=""
              fontSize_Lg=""
            />
          </Box>
        </Box>
        {/* Img */}
        <Img
          maxHeight="25rem"
          minHeight="10rem"
          maxWidth="30rem"
          minWidth="15rem"
          width_Lg="100%"
          width_Sm="70%"
          width_Md="60%"
          src="/imgs/whyUs/desktop.png"
        />
      </Box>
    </>
  );
}
