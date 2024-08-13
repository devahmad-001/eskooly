////////////////   Html    ///////////////

// Import ReactNode for the childeren
import { ReactNode } from "react";
export type flexboxAttributes = {
  borderRigth?: string;
  borderLeft?: string;
  borderTop?: string;
  borderBottom?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  backgroundImgURL?: string;
  position?: string;
  padding?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  columnGap?: string;
  rowGap?: string;
  backgroundColor?: string;
  display?: string;
  flexDirection?: string;
  flexWrap?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  gap?: string;
  alignSelf?: string;
  flexBasis?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexOrder?: string;
  order?: string;
  width?: string;
  height?: string;
  children?: ReactNode;
};
export type inputAttributes = {
  type?: string;
  placeholder?: string;
  required?: true;
  minLength?: number;
  maxLength?: number;
  fontSize?: string;
  height?: string;
  color?: string;
  boxShadow?: string;
  transition?: string;
  borderColor?: string;
  paddingLeft?: string;
  maxWidth?: string;
  width?: string;
  backgroundColor?: string;
  borderRadius?: string;
  fontFamily?: string;
  boxSizing?: string;
  margin?: string;
  appearance?: string;
  alignItems?: string;
  border?: string;
  display?: string;
  justifyContent?: string;
  lineHeight?: string;
  position?: string;
  verticalAlign?: string;
};
export type spanAttributes = {
  lineHeight?: string;
  position: string;
  left: string;
  top: string;
  transform: string;
  color: string;
};
export type btnAttributes = {
  maxWidth?: string;
  text: string;
  cursor?: string;
  display?: string;
  postion?: string;
  type?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  heading?: string;
  TextDecoration?: string;
  textAlign?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  background?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  border?: string;
  boxShadow?: string;
  boxSizing?: string;
  margin?: string;
  padding?: string;
  width?: string;
  minWidth?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  hoverBorder?: string;
  transition?: string;
  lineHeight?: string;
  position?: string;
  verticalAlign?: string;
  outline?: string;
  justifyContent?: string;
  whitespace?: string;
  appearance?: string;
  userselect?: string;
  icon?: React.ElementType;
};
export type headingAttributes = {
  postion?: string;
  type?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  TextDecoration?: string;
  textAlign?: string;
  text?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  background?: string;
  margin?: string;
  padding?: string;
  width?: string;
  minWidth?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  transition?: string;
  lineHeight?: string;
  position?: string;
  verticalAlign?: string;
};
export type paraGraphAttributes = {
  postion?: string;
  type?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  TextDecoration?: string;
  textAlign?: string;
  text?: string | ReactNode;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  background?: string;
  margin?: string;
  padding?: string;
  width?: string;
  minWidth?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  transition?: string;
  lineHeight?: string;
  position?: string;
  verticalAlign?: string;
};
export type imgAttributes = {
  width?: string;
  height?: string;
  alt?: string;
  src?: string;
};
export type iconbutton = {
  maxWidth?: string;
  text?: string;
  width?: string;
  heigth?: string;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  display?: string;
  textAlign?: string;
  borderColor?: string;
  borderStyle?: string;
  boxShadow?: string;
  outLine?: string;
  margin?: string;
  padding?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  position?: string;
  verticalAlign?: string;
  justifyContent?: string;
  alignItems?: string;
  overflow?: string;
  opacity?: string;
  cursor?: string;
  whiteSpace?: string;
  textDecoration?: string;
  boxSizing?: string;
  appearance?: string;
  userSelect?: string;
  icon?: string;
  hoverBackgroundColor?: string;
  hoverBackground?: string;
  hoverColor?: string;
  hoverBorder?: string;
  hoverOpacity?: string;
  transition?: string;
  borderWidth?: string;
  hoverBoxShadow?: string;
  background?: string;
  height?: string;
  borderRigth?: string;
  borderLeft?: string;
  borderTop?: string;
  borderBottom?: string;
};

////////////////   Variables    ///////////////

// School Features Section Home Page
export const features = {
  allFeatures: [
    {
      heading: "Institute Info",
      para: "You can set your all institute info like logo, name, target line ect, which will display on every printable documents and reports.",
      src: "/imgs/featuresGifs/cloud.gif",
    },
    {
      heading: "Class Management",
      para: "This school management software manage your classes in an easy way. starts from students to subjects, courses to marks.",
      src: "/imgs/allfeatures/cloud.gif",
    },
    {
      heading: "Exams Management",
      para: "eSkooly has a complete solution for exams management starting from new exam to final result, reports and result cards.",
      src: "/imgs/allfeatures/cloud.gif",
    },
    {
      heading: "Attendance System",
      para: "Our free school software has outstanding online attendance management system for students and staff.",
      src: "/imgs/allfeatures/cloud.gif",
    },
    {
      heading: "Fee Management",
      para: "Our school software opens an account for every student to manage its fees and dues. eSkooly manages everything automatically.",
      src: "/imgs/allfeatures/cloud.gif",
    },
    {
      heading: "Tests Management",
      para: "Managing class tests is a piece of cake with this free school management software. It keeps record of every class test.",
      src: "/imgs/allfeatures/cloud.gif",
    },
    {
      heading: "Accounts",
      para: "Managing income, expense, and staff salaries is no more difficult. By using our software you can manage quite easly.",
      src: "/imgs/allfeatures/cloud.gif",
    },
    {
      heading: "Printable Reports",
      para: "You can print all the reports and letters like, admission letter, fee slip, salary slip, job letter and result cards etc.",
      src: "/imgs/allfeatures/cloud.gif",
    },
  ],
  schoolFeatures: [
    {
      heading: "Absolutely Free",
      para: "eSkooly is an absolutely 100% free school management software for a lifetime with no limitations. No need to buy anything. Just Sign Up",
      gif: "/imgs/featuresGifs/cloud.gif",
      direction: "row",
    },
    {
      heading: "Responsive Web Design",
      para: "You can use our free school management software on any device, like Mobile, Tablet, Laptop, or desktop due to its responsive design.",
      gif: "/imgs/featuresGifs/support.gif",
      direction: "row-reverse",
    },
    {
      heading: "Cloud Based Software",
      para: "eSkooly is free school software that is always online, you can access it from anywhere, anytime. We will take care of your data and backups.",
      gif: "/imgs/featuresGifs/cloud.gif",
      direction: "row",
    },
    {
      heading: "Infographics & Animations",
      para: "We use infographics and animations to explain student's reports and results. Our free school software facilitates you with the optimized result.Fast, Secure & Ea",
      gif: "/imgs/featuresGifs/support.gif",
      direction: "row-reverse",
    },
    {
      heading: "Regular Updates & Support",
      para: "We add new and awesome features regularly to make our school administrative software unmatchable. Free online 24/7 support for users.",
      gif: "/imgs/featuresGifs/cloud.gif",
      direction: "row",
    },
    {
      heading: "Fast, Secure & Easy",
      para: "We use advanced tools and technologies to build up this free school software. It is super fast, secure, reliable, and easy to use and manage.",
      gif: "/imgs/featuresGifs/support.gif",
      direction: "row-reverse",
    },
  ],
};

// Facilities Section Home Page
export const facilitiesData = [
  // {
  //   btnText: "Why Us?",
  //   heading: "Why eSkooly is the best school management software?",
  //   details:
  //     "Besides, eSkooly is a completely free online school management software, it has more school management features than any other online school management system in the market. It does not end here, eSkooly is still enhancing features. You will be automatically updated as a new feature will be a part of our free school management software. Some main school management features are given below.",
  //   src: "/imgs/whyUs/desktop.png",
  //   width: "23.063rem",
  //   height: "18.75rem",
  //   display: "none",
  //   direction: "row",
  // },
  // {
  //   btnText: "Manage Roles",
  //   heading: "Seperate Portals Available",
  //   details:
  //     "our school management system comes with a separate portal for every user role. An admin portal with full controls, separate portals for Management staff, Accountant, Teachers, Parents, and Students.",
  //   src: "/imgs/whyUs/full-team.png",
  //   width: "35.375rem",
  //   height: "23.313rem",
  //   display: "none",
  //   direction: "column",
  // },
  {
    btnText: "Message System",
    heading: "Messaging and file sharing system",
    details:
      "Discuss and share ideas with other users through our messaging system. With this feature, you can do real-time chat with every individual associated with your institution.",
    src: "/imgs/whyUs/message.png",
    iconBtnText: "Sign Up Now",
    width: "29rem",
    height: "27rem",
    display: "block",
    direction: "row",
  },
  {
    btnText: "SMS Alerts",
    heading: "Free SMS Services",
    details:
      "Send unlimited free SMS alerts on mobile numbers with our 100% free SMS gateway application. Now no need to buy expensive branded SMS to send alerts on mobile phones.",
    src: "/imgs/whyUs/smsAlert.png",
    iconBtnText: "Download SMS Gateway",
    width: "28rem",
    height: "19rem",
    display: "block",
    direction: "row-reverse",
  },
  {
    btnText: "Stay Mobile",
    heading: "Free Mobile Application",
    details:
      "Download and install our free mobile application to stay on mobile. Our mobile app is for every registered user like Admin, Teacher, Accountant, Management staff, Parents, and students.",
    src: "/imgs/whyUs/mobile-chat.png",
    iconBtnText: "Sign Up Now",
    width: "28rem",
    height: "19rem",
    display: "block",
    direction: "row",
  },
  {
    btnText: "Live Class",
    heading: "Free online live classes",
    details:
      "Stop using third-party apps like Zoom, Google meet, or Microsoft team to conduct online classes. Use our most powerful and easy-to-use platform to conduct your live online classes. It&ampos;s 100% free.",
    src: "/imgs/whyUs/online-class.png",
    iconBtnText: "Sign Up Now",
    width: "29rem",
    height: "25rem",
    display: "block",
    direction: "row-reverse",
  },
  {
    btnText: "Desktop App",
    heading: "Desktop version for Windows, MacOS, and Linux",
    details:
      "Download and install our school management software in your computer just paying a small one time payment.",
    src: "/imgs/whyUs/support-team.png",
    iconBtnText: "Download Now",
    width: "35rem",
    height: "14.5rem",
    display: "block",
    direction: "row",
  },
  {
    btnText: "Multilingual",
    heading: "Available In all Languages",
    details:
      "Our free school management software comes in all languages. Manage your educational institute with your native language.",
    src: "/imgs/whyUs/language.png",
    iconBtnText: "Sign up Now",
    width: "28rem",
    height: "24.5rem",
    display: "block",
    direction: "row-reverse",
  },
];

// TrustBox Home Page
export const trustBoxData = [
  {
    borderBottom: true,
  },
  {
    src: "/imgs/trust/c1.png",
    borderRight: true,
    borderBottom: true,
  },
  {
    src: "/imgs/trust/c2.png",
    borderRight: true,
    borderBottom: true,
  },
  {
    src: "/imgs/trust/c3.png",
    borderRight: true,
    borderBottom: true,
  },
  {
    src: "/imgs/trust/c4.png",
    borderRight: true,
    borderBottom: true,
  },
  {
    src: "/imgs/trust/c5.png",
    borderBottom: true,
  },
  {
    borderBottom: true,
  },
  {
    borderBottom: true,
  },
  {
    src: "/imgs/trust/c7.png",
    borderRight: true,
    borderBottom: true,
  },
  {
    src: "/imgs/trust/c8.png",
    borderRight: true,
    borderBottom: true,
  },
  {
    src: "/imgs/trust/c9.png",
    borderRight: true,
    borderBottom: true,
  },
  {
    src: "/imgs/trust/c10.png",
    borderRight: true,
    borderBottom: true,
  },
  {
    src: "/imgs/trust/c11.png",

    borderBottom: true,
  },
  {
    borderBottom: true,
  },
  {},
  {
    src: "/imgs/trust/c12.png",
    borderRight: true,
  },
  {
    src: "/imgs/trust/c13.png",
    borderRight: true,
  },
  {
    src: "/imgs/trust/c14.png",
    borderRight: true,
  },
  {
    src: "/imgs/trust/c2.png",
    borderRight: true,
  },
  {
    src: "/imgs/trust/c16.png",
  },
  {},
];
