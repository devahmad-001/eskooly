import Box from "../ui/FlexBox";
import Img from "../ui/Img";
import ParaGraph from "../ui/ParaGraph";
import IconBtn from "../ui/IconBtn";
import CustomLink from "../ui/CustomLink";

export default function Nav() {
  return (
    <>
      <Box
        // position="fixed"
        maxWidth="100vw"
        minHeight="4rem"
        display="flex"
        alignContent="center"
        flexDirection="row"
        justifyContent="space-around"
        background="--gradient-darkblue"
        overflow="hidden"
        columnGap="30%"
      >
        <Box
          display="flex"
          minWidth="25%"
          columnGap="2rem"
          justifyContent="space-between"
          alignItems="center"
        >
          <Img
            src="/images/logos/logoxx.png"
            padding="0.65rem 0rem"
            maxWidth="6rem"
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <ParaGraph
              fontFamily="sans-serif"
              fontSize="0.9rem"
              fontWeight="500"
              text="Products"
              padding=" 0.8rem 0.7rem"
              color="--white"
            />
            <ParaGraph
              fontFamily="sans-serif"
              fontSize="0.9rem"
              fontWeight="500"
              text="Help"
              padding="0.8rem 0.7rem"
              hoverBorderBottom="0.1rem solid blue"
              color="--white"
            />
            <ParaGraph
              fontFamily="sans-serif"
              fontSize="0.9rem"
              fontWeight="500"
              color="--white"
              padding="0.8rem 0.7rem"
              hoverBorderBottom="0.1rem solid blue"
              text={
                <>
                  <CustomLink href='/dashboard' text="Dashboard" hoverunderline={'none'} />
                </>
              }
            />

          </Box>
        </Box>
        <Box
          display="flex"
          columnGap="1.6rem"
          justifyContent="center"
          alignItems="center"
        >
          <IconBtn
            text={<>
              <CustomLink href='/sign-up' text="Sign Up " />
            </>}
            color="--white"
            cursor="pointer"
            displaybtn="block"
            maxWidth="12rem"
            border="none"
            boxShadow=" rgba(0, 0, 0, 0.42) 0px 14px 26px -12px, 
           rgba(0, 0, 0, 0.12) 0px 4px 23px 0px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px;"
            outLine=" --white none 0px"
            borderColor="--white"
            opacity="0.8"
            borderRadius="31.25rem"
            padding="1.375rem 2.3rem"
            background="linear-gradient(45deg, #0f5ef7, #0f5ef7) !important"
            justifyContent="center"
            textAlign="center"
            borderWidth="0px"
            whiteSpace="nowrap"
            textDecoration="none solid --white"
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
            hoverBackground="rgba(0, 0, 0, 0)
                linear-gradient(45deg, rgb(244, 125, 135), rgb(235, 115, 125)) repeat
              scroll 0% 0% / auto padding-box border-box"
            icon="MdPersonAddAlt"
            backgroundColor="rgba(0, 0, 0, 0)"
          />
          <IconBtn
            text={<>
              <CustomLink href='/login' text="Login " />
            </>}
            color="--black-"
            cursor="pointer"
            displaybtn="block"
            maxWidth="9rem"
            border="none"
            boxShadow=" rgba(0, 0, 0, 0.42) 0px 14px 26px -12px, 
           rgba(0, 0, 0, 0.12) 0px 4px 23px 0px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px;"
            outLine=" --white none 0px"
            borderColor="--white"
            opacity="0.8"
            borderRadius="31.25rem"
            padding="1.375rem 2.3rem"
            background="white"
            justifyContent="center"
            textAlign="center"
            borderWidth="0px"
            whiteSpace="nowrap"
            textDecoration="none solid --white"
            boxSizing="border-box"
            appearance="none"
            fontSize="0.813rem"
            height="2.5rem"
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
            hoverBackground="rgba(0, 0, 0, 0)
                linear-gradient(45deg, rgb(244, 125, 135), rgb(235, 115, 125)) repeat
              scroll 0% 0% / auto padding-box border-box"
            icon="MdPersonAddAlt"
            backgroundColor="rgba(0, 0, 0, 0)"
          />

        </Box>
      </Box>
    </>
  );
}
