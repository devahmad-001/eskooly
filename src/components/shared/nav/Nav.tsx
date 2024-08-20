"use client";
import React from "react";
import Button from "../ui/Button";
import styled from "@emotion/styled";
import Image from "next/image";

export default function Nav() {
  return (
    <>
     <nav
            className="navbar navbar-wrapper navbar-default navbar-fade is-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #09327f, #06183b)",
            }}
          >
            <div className="container">
              {/* Brand */}
              <div className="navbar-brand">
                <a href="https://eskooly.com">
                  <img
                    src="/images/logos/logoxx.png"
                    alt="eSkooly Logo"
                    style={{ height: "60px !important", padding: 8 }}
                  />
                </a>
                {/* Responsive toggle */}
                <div className="custom-burger" data-target>
                  <a className="responsive-btn" href="javascript:void(0);">
                    <span className="menu-toggle">
                      <span className="icon-box-toggle">
                        <span className="rotate">
                          <i className="icon-line-top" />
                          <i className="icon-line-center" />
                          <i className="icon-line-bottom" />
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                {/* /Responsive toggle */}
              </div>
              {/* Navbar menu */}
              <div className="navbar-menu" style={{ paddingLeft: 130 }}>
                {/* Navbar Start */}
                <div className="navbar-start">
                  <div className="navbar-item has-dropdown is-hoverable is-mega is-hidden-mobile">
                    <div
                      className="navbar-item m-white"
                      style={{ cursor: "pointer" }}
                    >
                      Products
                      <i
                        className="im im-icon-Arrow-Down"
                        style={{ margin: "5px 0px 0px 5px" }}
                      />
                    </div>
                    <div
                      className="navbar-dropdown is-megamenu animated prefadeInUp fadeInUp"
                      data-style="width: 18rem;"
                    >
                      <div className="mega-inner">
                        <div className="container">
                          <div className="columns">
                            <div className="column">
                              <h2 className="title is-6 is-mega-menu-title">
                                eSkooly for Desktop
                              </h2>
                              <a
                                className="navbar-item is-flex"
                                href="https://eskooly.com/bb/Desktop"
                              >
                                <i className="im im-icon-Windows-Microsoft" />
                                <div className="navbar-content">
                                  <p>
                                    <small className="color-secondary">
                                      Windows
                                    </small>
                                  </p>
                                  <p>Download Now</p>
                                </div>
                              </a>
                              <a
                                className="navbar-item is-flex"
                                href="https://eskooly.com/bb/Desktop"
                              >
                                <i className="im im-icon-iOS-Apple" />
                                <div className="navbar-content">
                                  <p>
                                    <small className="color-secondary">
                                      MacOS
                                    </small>
                                  </p>
                                  <p>Download Now</p>
                                </div>
                              </a>
                              <a
                                className="navbar-item is-flex"
                                href="https://eskooly.com/bb/Desktop"
                              >
                                <i className="im im-icon-Linux" />
                                <div className="navbar-content">
                                  <p>
                                    <small className="color-secondary">
                                      Linux
                                    </small>
                                  </p>
                                  <p>Download Now</p>
                                </div>
                              </a>
                            </div>
                            <div className="column">
                              <h2 className="title is-6 is-mega-menu-title">
                                Mobile Apps
                              </h2>
                              <a
                                className="navbar-item is-flex"
                                href="https://play.google.com/store/apps/details?id=com.eskooly.app"
                              >
                                <i className="im im-icon-Google-Play" />
                                <div className="navbar-content">
                                  <p>
                                    <small className="color-secondary">
                                      Android
                                    </small>
                                  </p>
                                  <p>Install Now</p>
                                </div>
                              </a>
                              <a
                                className="navbar-item is-flex"
                                href="https://apps.apple.com/pk/app/eskooly/id6448073356"
                              >
                                <i className="im im-icon-Apple-Store" />
                                <div className="navbar-content">
                                  <p>
                                    <small className="color-secondary">
                                      IOS
                                    </small>
                                  </p>
                                  <p>Install Now</p>
                                </div>
                              </a>
                              <a
                                className="navbar-item is-flex"
                                href="app/eSkooly%20SMS%20Gateway.apk"
                              >
                                <i className="im im-icon-Mail-Outbox" />
                                <div className="navbar-content">
                                  <p>
                                    <small className="color-secondary">
                                      SMS Gateway App
                                    </small>
                                  </p>
                                  <p>Download Now</p>
                                </div>
                              </a>
                            </div>
                            <div className="column">
                              <h2 className="title is-6 is-mega-menu-title">
                                More
                              </h2>
                              <a
                                className="navbar-item is-flex"
                                href="https://eskooly.com/bb/LiveClass"
                              >
                                <i className="im im-icon-Wifi-2" />
                                <div className="navbar-content">
                                  <p>
                                    <small className="color-secondary">
                                      Live Class
                                    </small>
                                  </p>
                                  <p>Go Live</p>
                                </div>
                              </a>
                              <a
                                className="navbar-item is-flex"
                                href="https://pro.eskooly.com"
                              >
                                <i className="im im-icon-Hipster-Men2" />
                                <div className="navbar-content">
                                  <p>
                                    <small className="color-secondary">
                                      eSkooly Pro
                                    </small>
                                  </p>
                                  <p>Learn More</p>
                                </div>
                              </a>
                              <a
                                className="navbar-item is-flex"
                                href="https://lms.eskooly.com"
                              >
                                <i className="im im-icon-Cloud" />
                                <div className="navbar-content">
                                  <p>
                                    <small className="color-secondary">
                                      eSkooly LMS
                                    </small>
                                  </p>
                                  <p>Learn More</p>
                                </div>
                              </a>
                            </div>
                            <div className="column">
                              <h2 className="title is-6 is-mega-menu-title">
                                Get Started
                              </h2>
                              <p className="is-cta">
                                We're world's <b>#1 ranked</b> Free, Powerful,
                                and easy-to-use school software.
                              </p>
                              <p className="is-cta">
                                <a
                                  href="signup.html"
                                  className="button btn-align mega-btn bg-m-blue7 m-white"
                                >
                                  Sign up
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <hr className="navbar-divider" />
                        <div className="navbar-item is-footer is-hidden-mobile">
                          <div className="navbar-content">
                            <div className="level is-mobile">
                              <div className="level-left">
                                <div className="level-item">
                                  <strong>Follow us</strong>
                                </div>
                              </div>
                              <div className="level-right">
                                <div className="level-item">
                                  <a
                                    className="social-link"
                                    href="https://www.twitter.com/eskooly/"
                                  >
                                    <i className="fa fa-twitter" />
                                  </a>
                                  <a
                                    className="social-link"
                                    href="http://www.facebook.com/eskooly/"
                                  >
                                    <i className="fa fa-facebook" />
                                  </a>
                                  <a
                                    className="social-link"
                                    href="https://g.page/r/CavgvScb5-o7EA0"
                                  >
                                    <i className="fa fa-google" />
                                  </a>
                                  <a
                                    className="social-link"
                                    href="https://www.youtube.com/channel/UCJ1A8Xa4u31H2o7wzEhimRg"
                                  >
                                    <i className="fa fa-youtube" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-image is-hidden-mobile">
                          <img src="/images/bg/shapes/megamenu-blue.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Navbar item --
                      <a class="navbar-item is-slide" href="landing-v3-pricing.html" style="color:#fff;">
                          Pricing
                      </a>
                      <!-- Navbar item */}
                  <a
                    className="navbar-item is-slide"
                    href="#"
                    style={{ color: "#fff" }}
                  >
                    Help
                  </a>
                  {/* Navbar item --
                      <a class="navbar-item is-slide" href="landing-v3-login.html" style="color:#fff;">
                          Login
                      </a>
							*/}
                </div>
                {/* Navbar end */}
                <div className="navbar-end">
                  {/* Signup button */}
                  <div className="navbar-item">
                    <a
                      id="#signup-btn"
                      href="signup.html"
                      className="button button-cta bg-m-blue7 m-white is-bold btn-align rounded raised"
                      style={{ border: "none" }}
                    >
                      <i className="im im-icon-Add-User" /> Sign Up
                    </a>
                  </div>
                  <div className="navbar-item">
                    <a
                      id="#signup-btn"
                      href="bb/dashboard.php"
                      className="button button-cta bg-m-white m-dblue is-bold btn-align rounded raised"
                      style={{ border: "none" }}
                    >
                      <i className="im im-icon-Key-Lock" /> Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
    </>
  );
}
