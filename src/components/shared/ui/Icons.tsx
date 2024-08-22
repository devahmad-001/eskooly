import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
export const FacebookIcon = (props:any) => {
  return <FaFacebook color={props.color} />;
};
export const TwitterIcon = (props:any) => {
  return <IoLogoTwitter color={props.color} />;
};
export const GoogleIcon = (props:any) => {
  return <FaGoogle color={props.color} />;
};
export const YoutubeIcon = (props:any) => {
  return <FaYoutube color={props.color} />;
};

export const SchoolIcon = (props:any) => {
  return <IoSchoolSharp color={props.color} />;
};
