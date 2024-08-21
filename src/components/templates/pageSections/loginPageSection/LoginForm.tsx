"use client";
import React from "react";
import Typed from "typed.js";
import InputField from "@/components/shared/ui/InputFeild";
import Button from "@/components/shared/ui/Button";
import styled from "@emotion/styled";
const P49 = styled.p`
  margin-top: 20px;
  padding: 10px 0px;
  box-sizing: border-box;
  clear: both;
  font-size: 14px;
  position: relative;
  text-align: left;
`;
export default function LoginForm() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>School</i> ",
        "&amp; College",
        "&amp; Institute .",
        "&amp: Academy",
        "",
        "&amp; Tution Center",
        "&amp; Training Center ",
      ],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
      loopCount: Infinity,
      cursorChar: "|",
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="flex ">
        <div className="style-0 ">
          <div className="style-1">
            {/* Header */}
            <div className="style-2">
              <div className="style-3">
                <a href="/" className="style-4">
                  <img
                    className="style-5"
                    src="/imgs/form/logoxx.png"
                    alt="eSkooly logo"
                  />
                </a>
                <div className="style-6">
                  <div className="style-7">
                    <b className="style-8">Register your account</b>
                  </div>
                  {/**/}
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Body */}
          <div className="style-9">
            <div className="style-10">
              <div className="style-11">
                <div className="style-12">
                  {/* Sign up form */}
                  <form className="style-13">
                    <div className="style-22">
                      <InputField placeholder="Your Email *" type="email" />
                      <InputField
                        placeholder="Choose Password *"
                        type="password"
                      />
                      <InputField
                        placeholder="Confirm Password *"
                        type="password"
                      />
                      <P49>
                        <Button
                          text="Sipn Up"
                          font-family={`BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;`}
                          lineHeight="0rem"
                          width={"100% !important"}
                          backgroundColor={" rgba(0, 0, 0, 0)"}
                          display="block"
                          textAlign="center"
                          verticalAlign="top"
                          background="rgba(0, 0, 0, 0)
    linear-gradient(45deg, rgb(15, 94, 247), rgb(15, 94, 247)) repeat scroll 0%
    0% / auto padding-box border-box"
                          boxShadow="none"
                          margin="0"
                          border="none"
                          transition="all 0.5s ease 0s"
                          cursor="pointer"
                          borderColor="rgb(255, 255, 255)"
                          borderRadius="31.25rem"
                          padding="1.375rem 2.5rem"
                          fontSize="0.875rem"
                          height="2.75rem"
                        />
                      </P49>
                    </div>
                  </form>{" "}
                  {/* Sign up form */}
                  {/* Get contacted form */}
                  <div className="style-51">
                    <h1 className="style-52">
                      <b className="style-53">Congratulations ! </b>
                    </h1>
                    <h3 className="style-54">Account Setup Is Completed</h3>
                    <p className="style-55">
                      We've sent you an email containing all the information
                      about your account and some useful links. Please have a
                      look and enjoy the world of free schooling by loging in.
                    </p>
                    <p className="style-56">
                      <a href="bb/dashboard.php" className="style-57">
                        <button className="style-58">Login to Dashboard</button>{" "}
                      </a>
                    </p>
                  </div>{" "}
                  {/* /Get contacted form */}
                  {/* Toggles*/}
                  <div className="style-59">
                    <p className="style-60">
                      <a href="bb/dashboard.php" className="style-61">
                        have an account ? Login
                      </a>
                    </p>
                  </div>
                  <div className="style-62">
                    <p className="style-63">
                      <a href="signup.html" className="style-64">
                        Back to Sign up
                      </a>
                    </p>
                  </div>{" "}
                  {/* /Toggles*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Img section  */}
        <div className="register-section ">
          <div className="btnBox">
            <p>Already Have an Account ?</p>
            <Button
              fontSize="medium"
              text="Login"
              minWidth="5rem"
              borderRadius="3.813rem"
              padding="0.25rem 1rem 0,25rem 1rem"
              backgroundColor=" rgb(15, 94, 247)"
            />
          </div>
          <h1>
            Start managing <span>free</span> now !
          </h1>
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
          <img src="/imgs/form/signup.png" alt="" />
        </div>
      </div>
    </>
  );
}
