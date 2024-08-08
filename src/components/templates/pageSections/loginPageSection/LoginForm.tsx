"use client";
import React from "react";
import Typed from "typed.js";
import { RiLockPasswordFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import InputField from "@/components/shared/ui/InputFeild";
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
                    {/* <article className="style-14">
                      <h4 className="style-15">
                        <span className="style-16">
                          This Email is already registered !
                        </span>{" "}
                        <span className="style-17" aria-label="delete" />
                      </h4>
                    </article>
                    <article className="style-18">
                      <h4 className="style-19">
                        <span className="style-20">
                          Your password does not matched !
                        </span>{" "}
                        <span className="style-21" aria-label="delete" />
                      </h4>
                    </article> */}
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
                      {/* <table className="style-38">
                      <tbody className="style-39">
                        <tr className="style-40">
                          <td className="style-41">
                            <div className="style-42">
                              <input
                                type="checkbox"
                                defaultValue={1}
                                name="c"
                                required
                                className="style-43"
                              />{" "}
                              <label
                                htmlFor="checkboxThreeInput"
                                className="style-44"
                              />
                            </div>
                          </td>
                          <td className="style-45">
                            <h2 className="style-46">
                              Accept our{" "}
                              <b className="style-47">
                                <a
                                  href="terms&conditions.html"
                                  className="style-48"
                                >
                                  Terms &amp; Conditions
                                </a>
                              </b>
                            </h2>
                          </td>
                        </tr>
                      </tbody>
                    </table> */}
                      <p className="style-49">
                        <button onclick="step1(event);" className="style-50">
                          Sign up
                        </button>
                      </p>
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
            <button>Login</button>
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
