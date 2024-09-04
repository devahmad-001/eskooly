import React from "react";
import SignUpForm from "./SignUpForm";

export default function SignUpPage() {
  return (
    <>
      <SignUpForm />
    </>
  );
}


// //  const el = React.useRef(null);
//   React.useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: [
//         "<i>School</i> ",
//         "&amp; College",
//         "&amp; Institute .",
//         "&amp: Academy",
//         "",
//         "&amp; Tution Center",
//         "&amp; Training Center ",
//       ],
//       typeSpeed: 80,
//       backSpeed: 40,
//       loop: true,
//       loopCount: Infinity,
//       cursorChar: "|",
//     });

//     return () => {
//       // Destroy Typed instance during cleanup to stop animation
//       typed.destroy();
//     };
//   }, []);

{/* <div className="flex ">
        <h3>
          eSkooly is a 100% free online{" "}
          <a
            href=""
            data-period="2000"
            data-type='[ "School ", "College ", "Institute ", "Academey ", "Tuition Centre", "Training Centre" ]'
          >
            <span ref={el}>School </span>
          </a>{" "}
          management software for a lifetime with no limitations.
        </h3>
      </div> */}