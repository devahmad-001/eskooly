import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { SlTarget } from "react-icons/sl";
import { BiDollar } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { MdAlignHorizontalLeft } from "react-icons/md";
import { TfiFaceSad } from "react-icons/tfi";
import { FaXmark } from "react-icons/fa6";
export const FacebookIcon = (props: any) => {
  return (
    <FaFacebook
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        color: `${props.color}`,
      }}
    />
  );
};
export const TwitterIcon = (props: any) => {
  return (
    <IoLogoTwitter
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        color: `${props.color}`,
      }}
    />
  );
};
export const GoogleIcon = (props: any) => {
  return (
    <FaGoogle
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        color: `${props.color}`,
      }}
    />
  );
};
export const YoutubeIcon = (props: any) => {
  return (
    <FaYoutube
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        color: `${props.color}`,
      }}
    />
  );
};
export const SchoolIcon = (props: any) => {
  return (
    <IoSchoolSharp
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        color: `${props.color}`,
      }}
    />
  );
};
export const StudentIcon = (props: any) => {
  return (
    <PiStudentFill
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        color: `${props.color}`,
      }}
    />
  );
};
export const TargetIcon = (props: any) => {
  return (
    <SlTarget
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        color: `${props.color}`,
      }}
    />
  );
};
export const DollarIcon = (props: any) => {
  return (
    <BiDollar
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        color: `${props.color}`,
      }}
    />
  );
};
export const SemiBoldDollarIcon = (props: any) => {
  return (
    <FaDollarSign
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        color: `${props.color}`,
      }}
    />
  );
};
export const CollectionIcon = (props: any) => {
  return (
    <MdCollectionsBookmark
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        color: `${props.color}`,
      }}
    />
  );
};
export const RemainingIcon = (props: any) => {
  return (
    <MdAlignHorizontalLeft
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        color: `${props.color}`,
      }}
    />
  );
};
export const SadFaceIcon = (props: any) => {
  return (
    <TfiFaceSad
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        color: `${props.color}`,
      }}
    />
  );
};
export const CancelIcon = (props: any) => {
  return (
    <FaXmark
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        color: `${props.color}`,
        cursor:"pointer",
      }}
    />
  );
};
