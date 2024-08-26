import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { PiStudentFill } from "react-icons/pi";

export const FacebookIcon = (props:any) => {
  return <FaFacebook width={props.width} height={props.height} color={props.color} />;
};
export const TwitterIcon = (props:any) => {
  return <IoLogoTwitter width={props.width} height={props.height} color={props.color} />;
};
export const GoogleIcon = (props:any) => {
  return <FaGoogle width={props.width} height={props.height} color={props.color} />;
};
export const YoutubeIcon = (props:any) => {
  return <FaYoutube width={props.width} height={props.height} color={props.color} />;
};

export const SchoolIcon = (props:any) => {
  return <IoSchoolSharp width={props.width} height={props.height} color={props.color} />;
};

export const StudentIcon = (props:any) => {
  return <PiStudentFill style={{width:`${props.width}`,height:`${props.height}`}} color={props.color} />;
};
