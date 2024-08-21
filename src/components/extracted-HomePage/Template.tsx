import React from "react";

export default function Tempalate() {
  return (
    <>
      <div>
        {/* <div className="pageloader" />
        <div className="infraloader is-active" /> */}
        {/* Hero and nav */}
        {/*<div class="hero hero-wavy is-relative huge-pb" style="background-image:url('/images/bg/bg.jpg');background-size: cover;">*/}
        <div
          className="hero is-relative huge-pb"
          style={{
            backgroundImage: "linear-gradient(to right, #09327f, #06183b)",
          }}
        >
          <div className="custom-shape-divider-bottom-1630583222">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              />
            </svg>
          </div>
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
          {/* Hero image */}
          <div
            id="main-hero"
            className="hero-body is-relative no-padding-bottom"
          >
            <div className="banner-10-trops d-lg-block d-none">
              <div className="trops-1">
                <img src="/images/banner/banner10/circle.png" alt="banner10" />
              </div>
              <div className="trops-2">
                <img src="/images/banner/banner10/tri1.png" alt="banner10" />
              </div>
              <div className="trops-3">
                <img src="/images/banner/banner10/tri2.png" alt="banner10" />
              </div>
              <div className="trops-4">
                <img src="/images/banner/banner10/tri3.png" alt="banner10" />
              </div>
              <div className="trops-5">
                <img src="/images/banner/banner10/tri4.png" alt="banner10" />
              </div>
              <div className="trops-6">
                <img src="/images/banner/banner10/tri5.png" alt="banner10" />
              </div>
              <div className="trops-7">
                <img src="/images/banner/banner10/sq.png" alt="banner10" />
              </div>
            </div>
            <div className="container has-text-centered">
              <div className="columns">
                <div className="column is-8 is-offset-2 has-text-centered">
                  <h1 className="title big-title text-bold is-2">
                    Free Online School Management Software.
                  </h1>
                  <p className="m-gray subtitle light-subtitle">
                    Now you can manage your school, college, or any educational
                    center with eSkooly. It's 100% free for a lifetime with no
                    limitations.
                  </p>
                  {/* CTA button */}
                  <div className="has-text-centered">
                    <a
                      href="signup.html"
                      className="button button-cta bg-m-blue7 m-white raised"
                      style={{ border: "none", margin: 5 }}
                    >
                      <i className="im im-icon-Add-User" /> Sign Up Now, It's
                      Free
                    </a>
                    <a
                      href="#product"
                      className="button button-cta bg-m-white m-dblue raised"
                      style={{ border: "none", margin: 5 }}
                    >
                      <i className="im im-icon-Arrow-OutRight" /> Learn More
                    </a>
                  </div>
                  {/* Popup video link */}
                  <div
                    className="video-link has-text-centered modal-trigger"
                    data-modal="video-modal"
                  >
                    <i className="fa fa-play" /> <span>See how it works</span>
                  </div>
                  <div
                    className="subtitle light-subtitle"
                    style={{ position: "relative" }}
                  >
                    <img
                      className="app-mockup"
                      src="/images/illustrations/mockups/landing3/laptop.png"
                    />
                    <img
                      className="app-mockup levitate app"
                      src="/images/illustrations/mockups/landing3/mobile1.png"
                      style={{ position: "absolute" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Floating little avatars */}
            <div className="floating-avatars is-hidden-mobile">
              <img
                className="avatar avatar-4th levitate delay-6"
                src="/images/banner/a4.png"
                data-demo-src="/images/avatars/elie.jpg"
              />
              <img
                className="avatar avatar-6th levitate delay-2"
                src="/images/banner/a6.png"
                data-demo-src="/images/avatars/alex.jpg"
              />
            </div>
            {/* /Floating little avatars */}
          </div>
          {/* /Hero image */}
        </div>
        {/* /Hero and nav */}
        {/* Mockup section */}
        <div
          id="product"
          className="section is-relative mockup-section"
          style={{ background: "#0f5ef7" }}
        >
          <div className="container">
            <div className="columns has-text-centered">
              <div className="column minimal-feature">
                {/* App */}
                <h2
                  className="title is-5 minimal-title m-white"
                  style={{ fontSize: 40 }}
                >
                  Features Of School Management Software
                </h2>
                <div
                  className="feature-content m-white"
                  style={{ fontSize: 16 }}
                >
                  eSkooly is a complete and feature-rich school management
                  software for all educational institutes. This school
                  management software is for learning, administration, and
                  management activities in schools, colleges, universities,
                  tuition centers, or training centers. Our free school
                  management system manages everything starting from admission
                  to attendance and exams to result in cards.
                </div>
                <div className="grid-system is-medium">
                  <div className="columns">
                    <div className="column is-4" style={{ marginTop: 100 }}>
                      <div
                        style={{ position: "relative" }}
                        className="is-feature-reveal"
                      >
                        <div className="left-img bg-m-orange m-white levitate delay-2">
                          <i
                            className="im im-icon-Like is-vcentered"
                            style={{ fontSize: 50 }}
                          />
                        </div>
                        <div style={{}}>
                          <h5 className="title minimal-title m-white">
                            Absolutely Free
                          </h5>
                          <p className="m-white">
                            eSkooly is an absolutely 100% free school management
                            software for a lifetime with no limitations. No need
                            to buy anything. Just Sign Up
                          </p>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", marginTop: 60 }}
                        className="is-feature-reveal"
                      >
                        <div className="left-img bg-m-orange m-white levitate delay-4">
                          <i
                            className="im im-icon-Device-SyncwithCloud is-vcentered"
                            style={{ fontSize: 50 }}
                          />
                        </div>
                        <div style={{}}>
                          <h5 className="title minimal-title m-white">
                            Cloud Based Software
                          </h5>
                          <p className="m-white">
                            eSkooly is free school software that is always
                            online, you can access it from anywhere, anytime. We
                            will take care of your data and backups.
                          </p>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", marginTop: 60 }}
                        className="is-feature-reveal"
                      >
                        <div className="left-img bg-m-orange m-white levitate delay-6">
                          <i
                            className="im im-icon-Consulting is-vcentered"
                            style={{ fontSize: 50 }}
                          />
                        </div>
                        <div style={{}}>
                          <h5 className="title minimal-title m-white">
                            Regular Updates &amp; Support
                          </h5>
                          <p className="m-white">
                            We add new and awesome features regularly to make
                            our school administrative software unmatchable. Free
                            online 24/7 support for users.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="column is-4" style={{ padding: 60 }}>
                      <img
                        loading="lazy"
                        src="/images/mobile.png"
                        // data-src="/images/play1.png"
                      />
                    </div>
                    <div className="column is-4" style={{ marginTop: 100 }}>
                      <div
                        style={{ position: "relative" }}
                        className="is-feature-reveal"
                      >
                        <div className="right-img bg-m-orange m-white levitate delay-4">
                          <i
                            className="im im-icon-Laptop-Phone is-vcentered"
                            style={{ fontSize: 50 }}
                          />
                        </div>
                        <div style={{}}>
                          <h5 className="title minimal-title m-white">
                            Responsive Web Design
                          </h5>
                          <p className="m-white">
                            You can use our free school management software on
                            any device, like Mobile, Tablet, Laptop, or desktop
                            due to its responsive design.
                          </p>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", marginTop: 60 }}
                        className="is-feature-reveal"
                      >
                        <div className="right-img bg-m-orange m-white levitate delay-6">
                          <i
                            className="im im-icon-Statistic is-vcentered"
                            style={{ fontSize: 50 }}
                          />
                        </div>
                        <div style={{}}>
                          <h5 className="title minimal-title m-white">
                            Infographics &amp; Animations
                          </h5>
                          <p className="m-white">
                            We use infographics and animations to explain
                            student's reports and results. Our free school
                            software facilitates you with the optimized result.
                          </p>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", marginTop: 60 }}
                        className="is-feature-reveal"
                      >
                        <div className="right-img bg-m-orange m-white levitate delay-2">
                          <i
                            className="im im-icon-Coffee is-vcentered"
                            style={{ fontSize: 50 }}
                          />
                        </div>
                        <div style={{}}>
                          <h5 className="title minimal-title m-white">
                            Fast, Secure &amp; Easy
                          </h5>
                          <p className="m-white">
                            We use advanced tools and technologies to build up
                            this free school software. It is super fast, secure,
                            reliable, and easy to use and manage.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mockup section */}
        {/* Features section */}
        <section
          className="section is-medium"
          style={{
            backgroundImage: "linear-gradient(to left, #09327f, #06183b)",
          }}
        >
          <div className="container">
            {/* Feature */}
            <div className="columns is-vcentered pb-40">
              {/* Content */}
              <div className="column is-5 is-offset-1">
                <div className="minimal-feature">
                  <span className="tag squared bg-m-blue7 m-white is-large">
                    Why Us?
                  </span>
                  <h2 className="title is-5 minimal-title m-white">
                    Why eSkooly is the best school management software?
                  </h2>
                  <div className="feature-content m-white">
                    Besides, eSkooly is a completely free online school
                    management software, it has more school management features
                    than any other online school management system in the
                    market. It does not end here, eSkooly is still enhancing
                    features. You will be automatically updated as a new feature
                    will be a part of our free school management software. Some
                    main school management features are given below.
                  </div>
                </div>
              </div>
              {/* Featured image */}
              <div
                className="column is-4 is-offset-1"
                style={{
                  backgroundImage:
                    'url("/images/illustrations/mockups/landing3/map.svg")',
                }}
              >
                <div
                  className="minimal-feature-image"
                  style={{ position: "relative" }}
                >
                  <img
                    className="why-img1 levitate delay-2"
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/6-min.png"
                    data-src="/images/illustrations/mockups/landing3/6-min.png"
                  />
                  <img
                    className="why-img2 levitate delay-4"
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/9-min.png"
                    data-src="/images/illustrations/mockups/landing3/9-min.png"
                  />
                  <img
                    className="why-img3 levitate delay-6"
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/15-min.png"
                    data-src="/images/illustrations/mockups/landing3/15-min.png"
                  />
                  <img
                    className="main-image"
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/desktop-min.png"
                    data-src="/images/illustrations/mockups/landing3/desktop-min.png"
                  />
                </div>
              </div>
            </div>
            {/* /Feature */}
            {/* Feature */}
            <div className="columns is-vcentered">
              {/* Content */}
              <div className="column is-4 is-offset-4 has-text-centered">
                <div className="minimal-feature">
                  <span className="tag squared bg-m-blue7 m-white is-large">
                    Manage User Roles
                  </span>
                  <h2 className="title is-5 minimal-title m-white">
                    Separate Portals Available
                  </h2>
                  <div className="feature-content m-white">
                    our school management system comes with a separate portal
                    for every user role. An admin portal with full controls,
                    separate portals for Management staff, Accountant, Teachers,
                    Parents, and Students.
                  </div>
                </div>
              </div>
            </div>
            {/* Featured image */}
            <div className="columns is-vcentered pb-80">
              <div className="column is-6 is-offset-3 has-text-centered">
                <div className="employees-centered pb-40">
                  <img
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/full-team.png"
                    data-src="/images/illustrations/mockups/landing3/full-team.png"
                  />
                </div>
                <a
                  href="signup.html"
                  className="button button-cta bg-m-orange m-white is-bold btn-align rounded raised"
                  style={{ border: "none" }}
                >
                  <i className="im im-icon-Add-User" /> Sign Up Now, It's 100%
                  Free
                </a>
              </div>
            </div>
            {/* /Feature */}
            {/* Feature */}
            <div className="columns is-vcentered pb-80">
              {/* Content */}
              <div className="column is-4 is-offset-1">
                <div className="minimal-feature">
                  <span className="tag squared bg-m-blue7 m-white is-large">
                    Message System
                  </span>
                  <h2 className="title is-5 minimal-title m-white">
                    Messaging and file sharing system
                  </h2>
                  <div className="feature-content m-white pb-40">
                    Discuss and share ideas with other users through our
                    messaging system. With this feature, you can do real-time
                    chat with every individual associated with your institution.
                  </div>
                  <a
                    href="signup.html"
                    className="button button-cta bg-m-orange m-white is-bold btn-align rounded raised"
                    style={{ border: "none" }}
                  >
                    <i className="im im-icon-Add-User" /> Sign Up Now
                  </a>
                </div>
              </div>
              {/* Featured image */}
              <div className="column is-5 is-offset-1">
                <div className="minimal-feature-image">
                  <img
                    className="main-image levitate"
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/communicate.png"
                    // src="img/loader.gif"
                    data-src="/images/illustrations/mockups/landing3/communicate.png"
                  />
                </div>
              </div>
            </div>
            {/* /Feature */}
            {/* Feature */}
            <div className="columns is-vcentered pb-80">
              {/* Featured image */}
              <div className="column is-5 is-offset-1">
                <div className="minimal-feature-image">
                  <img
                    className="main-image levitate delay-2"
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/smsgateway.png"
                    data-src="/images/illustrations/mockups/landing3/smsgateway.png"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="column is-4 is-offset-1">
                <div className="minimal-feature">
                  <span className="tag squared bg-m-blue7 m-white is-large">
                    SMS Alerts
                  </span>
                  <h2 className="title is-5 minimal-title m-white">
                    Free SMS Services
                  </h2>
                  <div className="feature-content m-white pb-40">
                    Send unlimited free SMS alerts on mobile numbers with our
                    100% free SMS gateway application. Now no need to buy
                    expensive branded SMS to send alerts on mobile phones.
                  </div>
                  <a
                    href="app/eSkooly%20SMS%20Gateway.apk"
                    className="button button-cta bg-m-orange m-white is-bold btn-align rounded raised"
                    style={{ border: "none" }}
                  >
                    <i className="im im-icon-Android" /> Download SMS Gateway
                  </a>
                </div>
              </div>
            </div>
            {/* /Feature */}
            {/* Feature */}
            <div className="columns is-vcentered pb-80">
              {/* Content */}
              <div className="column is-4 is-offset-1">
                <div className="minimal-feature">
                  <span className="tag squared bg-m-blue7 m-white is-large">
                    Stay Mobile
                  </span>
                  <h2 className="title is-5 minimal-title m-white">
                    Free Mobile Application
                  </h2>
                  <div className="feature-content m-white pb-40">
                    Download and install our free mobile application to stay on
                    mobile. Our mobile app is for every registered user like
                    Admin, Teacher, Accountant, Management staff, Parents, and
                    students.
                  </div>
                  <div className="flex justify-start">
                    <a href="https://play.google.com/store/apps/details?id=com.eskooly.app">
                      <img
                        src="/images/illustrations/mockups/landing3/google.png"
                        style={{ height: 45, marginLeft: 10 }}
                      />
                    </a>
                    <a href="https://apps.apple.com/pk/app/eskooly/id6448073356">
                      <img
                        src="/images/illustrations/mockups/landing3/apple.png"
                        style={{ height: 45, marginLeft: 10 }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Featured image */}
              <div className="column is-5 is-offset-1">
                <div className="minimal-feature-image">
                  <img
                    className="main-image levitate"
                    loading="lazy"
                    // src="img/loader.gif"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/mobile-chat.png"
                    data-src="/images/illustrations/mockups/landing3/mobile-chat.png"
                  />
                </div>
              </div>
            </div>
            {/* /Feature */}
            {/* Feature */}
            <div className="columns is-vcentered pb-80">
              {/* Featured image */}
              <div className="column is-5 is-offset-1">
                <div className="minimal-feature-image">
                  <img
                    className="main-image levitate delay-2"
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/online-class.png"
                    data-src="/images/illustrations/mockups/landing3/online-class.png"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="column is-4 is-offset-1">
                <div className="minimal-feature">
                  <span className="tag squared bg-m-blue7 m-white is-large">
                    Live Class
                  </span>
                  <h2 className="title is-5 minimal-title m-white">
                    Free online live classes
                  </h2>
                  <div className="feature-content m-white pb-40">
                    Stop using third-party apps like Zoom, Google meet, or
                    Microsoft team to conduct online classes. Use our most
                    powerful and easy-to-use platform to conduct your live
                    online classes. It's 100% free.
                  </div>
                  <a
                    href="signup.html"
                    className="button button-cta bg-m-orange m-white is-bold btn-align rounded raised"
                    style={{ border: "none" }}
                  >
                    <i className="im im-icon-Add-User" /> Sign Up Now.
                  </a>
                </div>
              </div>
            </div>
            {/* /Feature */}
            {/* Feature */}
            <div className="columns is-vcentered pb-80">
              {/* Content */}
              <div className="column is-4 is-offset-1">
                <div className="minimal-feature">
                  <span className="tag squared bg-m-blue7 m-white is-large">
                    Desktop App
                  </span>
                  <h2 className="title is-5 minimal-title m-white">
                    Desktop version for Windows, MacOS, and Linux
                  </h2>
                  <div className="feature-content m-white pb-40">
                    Download and install our school management software in your
                    computer just paying a small one time payment.
                  </div>
                  <a
                    href="https://eskooly.com/bb/Desktop/"
                    className="button button-cta bg-m-orange m-white is-bold btn-align rounded raised"
                    style={{ border: "none" }}
                  >
                    <i className="im im-icon-Download" /> Download Now
                  </a>
                </div>
              </div>
              {/* Featured image */}
              <div className="column is-6 is-offset-1">
                <div className="minimal-feature-image">
                  <img
                    className="main-image levitate"
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/support-team.png"
                    data-src="/images/illustrations/mockups/landing3/support-team.png"
                  />
                </div>
              </div>
            </div>
            {/* /Feature */}
            {/* Feature */}
            <div className="columns is-vcentered pb-40">
              {/* Featured image */}
              <div className="column is-5 is-offset-1">
                <div className="minimal-feature-image">
                  <img
                    title="lazy"
                    className="main-image levitate delay-2"
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/language.png"
                    data-src="/images/illustrations/mockups/landing3/language.png"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="column is-4 is-offset-1">
                <div className="minimal-feature">
                  <span className="tag squared bg-m-blue7 m-white is-large">
                    Multilingual
                  </span>
                  <h2 className="title is-5 minimal-title m-white">
                    Available In all Languages
                  </h2>
                  <div className="feature-content m-white pb-40">
                    Our free school management software comes in all languages.
                    Manage your educational institute with your native language.
                  </div>
                  <a
                    href="signup.html"
                    className="button button-cta bg-m-orange m-white is-bold btn-align rounded raised"
                    style={{ border: "none" }}
                  >
                    <i className="im im-icon-Add-User" /> Sign Up Now.
                  </a>
                </div>
              </div>
            </div>
            {/* /Feature */}
          </div>
        </section>
        {/* /Features section */}
        {/* Services section */}
        <section
          className="section is-medium"
          style={{
            backgroundImage:
              'url("/images/illustrations/mockups/landing3/feature-back.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingTop: 20,
          }}
        >
          <h2 className="title is-5 minimal-title m-white">
            See more features
          </h2>
          {/* icon */}
          <div className="container">
            {/* Title */}
            <div className="section-title-wrapper has-text-centered minimal-feature">
              <div className="bg-number">{/* icon */}</div>
              <h2 className="section-title-landing m-white">THAT'S NOT ALL</h2>
              <h2
                className="title is-5 minimal-title m-white"
                style={{ fontSize: 30 }}
              >
                All Features in one place
              </h2>
            </div>
            {/* /Title */}
            <div className="content-wrapper minimal-feature">
              <div className="columns is-vcentered is-multiline has-text-centered">
                {/* Icon block */}
                <div className="column is-3">
                  <div className="chat-icon-box">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-[3.7rem] m-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                        />
                      </svg>
                    </div>
                    <div className="title minimal-title m-white">
                      Institute Info
                    </div>
                    <p className="box-content is-tablet-padded m-white">
                      You can set your all institute info like logo, name,
                      target line ect, which will display on every printable
                      documents and reports.
                    </p>
                  </div>
                </div>
                {/* Icon block */}
                <div className="column is-3">
                  <div className="chat-icon-box">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-[3.7rem] m-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                        />
                      </svg>
                    </div>
                    <div className="title minimal-title m-white">
                      Class Management
                    </div>
                    <p className="box-content is-tablet-padded m-white">
                      This school management software manage your classes in an
                      easy way. starts from students to subjects, courses to
                      marks.
                    </p>
                  </div>
                </div>
                {/* Icon block */}
                <div className="column is-3">
                  <div className="chat-icon-box">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-[3.7rem] m-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                        />
                      </svg>
                    </div>
                    <div className="title minimal-title m-white">
                      Exams Management
                    </div>
                    <p className="box-content is-tablet-padded m-white">
                      eSkooly has a complete solution for exams management
                      starting from new exam to final result, reports and result
                      cards.
                    </p>
                  </div>
                </div>
                {/* Icon block */}
                <div className="column is-3">
                  <div className="chat-icon-box">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-[3.7rem] m-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
                        />
                      </svg>
                    </div>
                    <div className="title minimal-title m-white">
                      Attendance System
                    </div>
                    <p className="box-content is-tablet-padded m-white">
                      Our free school software has outstanding online attendance
                      management system for students and staff.
                    </p>
                  </div>
                </div>
              </div>
              <div className="columns is-vcentered is-multiline has-text-centered">
                {/* Icon block */}
                <div className="column is-3">
                  <div className="chat-icon-box">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-[3.7rem] m-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                        />
                      </svg>
                    </div>
                    <div className="title minimal-title m-white">
                      Fee Management
                    </div>
                    <p className="box-content is-tablet-padded m-white">
                      Our school software opens an account for every student to
                      manage its fees and dues. eSkooly manages everything
                      automatically.
                    </p>
                  </div>
                </div>
                {/* Icon block */}
                <div className="column is-3">
                  <div className="chat-icon-box">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-[3.7rem] m-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                        />
                      </svg>
                    </div>
                    <div className="title minimal-title m-white">
                      Tests Management
                    </div>
                    <p className="box-content is-tablet-padded m-white">
                      Managing class tests is a piece of cake with this free
                      school management software. It keeps record of every class
                      test.
                    </p>
                  </div>
                </div>
                {/* Icon block */}
                <div className="column is-3">
                  <div className="chat-icon-box">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-[3.7rem] m-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                        />
                      </svg>
                    </div>
                    <div className="title minimal-title m-white">Accounts</div>
                    <p className="box-content is-tablet-padded m-white">
                      Managing income, expense, and staff salaries is no more
                      difficult. By using our software you can manage quite
                      easly.
                    </p>
                  </div>
                </div>
                {/* Icon block */}
                <div className="column is-3">
                  <div className="chat-icon-box">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-[3.7rem] m-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                        />
                      </svg>
                    </div>
                    <div className="title minimal-title m-white">
                      Printable Reports
                    </div>
                    <p className="box-content is-tablet-padded m-white">
                      You can print all the reports and letters like, admission
                      letter, fee slip, salary slip, job letter and result cards
                      etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Services section */}
        {/* CTA Banner */}
        <section className="section no-padding-bottom">
          <div className="container">
            <div className="columns is-vcentered">
              {/* CTA content */}
              <div className="column is-6">
                <div className="minimal-feature">
                  <h2 className="title is-5 minimal-title bold-text light-text no-margin">
                    Single Stop Solution For School Management
                  </h2>
                  <div className="feature-content light-text">
                    Managing any educational institute is not a piece of cake.
                    Managing students, staff, timetable, exams, class test,
                    attendance, fees collection, accounts, etc. It does not end
                    here. Parents are always worried about their child's
                    performance and they need satisfaction. They care about
                    their child's academic statics. Moreover, we have seen
                    schools using huge registers to mark the attendance of their
                    students and staff. And we have also seen that schools
                    manage their admission, exams data, class tests data, etc,
                    manually. We know it takes a lot of time and is very
                    difficult to manage.
                    <br />
                    Well! it's time to put check on these worries. eSkooly
                    presents you a free online school management software to
                    make conventional tasks easier. This is the one-stop
                    solution to manage, track and record everything within your
                    school or organization. Our free online school management
                    software includes admin, staff and students panel, exams
                    module, attendance module, fees collection module, salary
                    and expense management, class tests management, inventory
                    management, students and staff data record system, and many
                    more. It is very easy to use and manage because eskooly is a
                    free online school management software for end-users. If you
                    can send an email you can use eskooly.
                  </div>
                  <div className="pt-20 pb-20">
                    <a
                      href="signup.html"
                      className="button button-cta btn-outlined is-bold light-btn rounded"
                    >
                      Get started for free
                    </a>
                    <span className="conditions">Right now.</span>
                  </div>
                </div>
              </div>
              {/* /CTA content */}
              {/* City illustration */}
              <div className="column is-5 is-offset-1">
                <div
                  className="minimal-feature-image"
                  style={{ position: "relative" }}
                >
                  <img
                    className="why-img1 levitate delay-2"
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/17-min.png"
                    data-src="/images/illustrations/mockups/landing3/17-min.png"
                  />
                  <img
                    className="why-img2 levitate delay-4"
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/11-min.png"
                    data-src="/images/illustrations/mockups/landing3/11-min.png"
                  />
                  <img
                    className="why-img3 levitate delay-6"
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/21-min.png"
                    data-src="/images/illustrations/mockups/landing3/21-min.png"
                  />
                  <img
                    className="main-image"
                    loading="lazy"
                    src="https://eskooly.com/assets/images/illustrations/mockups/landing3/studentreport-min.png"
                    data-src="/images/illustrations/mockups/landing3/studentreport-min.png"
                  />
                </div>
              </div>
              {/* /City illustration */}
            </div>
          </div>
        </section>
        {/* /CTA Banner */}
        <section className="section no-padding-bottom">
          <div className="container">
            {/* Title */}
            <div className="section-title-wrapper">
              <div className="bg-number">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[14.5] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                  />
                </svg>
              </div>
              <h2 className="section-title-landing has-text-centered m-white">
                We build Trust.
              </h2>
              <div className="subtitle has-text-centered m-white">
                <b>45K+ Schools</b> use our product.
              </div>
            </div>
            {/* Grid */}
            <div className="content-wrapper">
              <div className="grid-clients five-grid">
                <div className="columns is-vcentered">
                  <div className="column is-hidden-mobile" />
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c2.png"
                        data-src="/images/logos/custom/c1.png"
                      />
                    </a>
                  </div>
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c3.png"
                        data-src="/images/logos/custom/c2.png"
                      />
                    </a>
                  </div>
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c4.png"
                        data-src="/images/logos/custom/c11.png"
                      />
                    </a>
                  </div>
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c5.png"
                        data-src="/images/logos/custom/c13.png"
                      />
                    </a>
                  </div>
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c6.png"
                        data-src="/images/logos/custom/c14.png"
                      />
                    </a>
                  </div>
                  <div className="column is-hidden-mobile" />
                </div>
                <div className="columns is-vcentered is-separator">
                  <div className="column is-hidden-mobile" />
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c7.png"
                        data-src="/images/logos/custom/c6.png"
                      />
                    </a>
                  </div>
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c8.png"
                        data-src="/images/logos/custom/c7.png"
                      />
                    </a>
                  </div>
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c9.png"
                        data-src="/images/logos/custom/c8.png"
                      />
                    </a>
                  </div>
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c10.png"
                        data-src="/images/logos/custom/c9.png"
                      />
                    </a>
                  </div>
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c11.png"
                        data-src="/images/logos/custom/c12.png"
                      />
                    </a>
                  </div>
                  <div className="column is-hidden-mobile" />
                </div>
                <div className="columns is-vcentered is-separator">
                  <div className="column is-hidden-mobile" />
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c12.png"
                        data-src="/images/logos/custom/c3.png"
                      />
                    </a>
                  </div>
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c13.png"
                        data-src="/images/logos/custom/c10.png"
                      />
                    </a>
                  </div>
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c14.png"
                        data-src="/images/logos/custom/c4.png"
                      />
                    </a>
                  </div>
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c1.png"
                        data-src="/images/logos/custom/c5.png"
                      />
                    </a>
                  </div>
                  {/* Client */}
                  <div className="column">
                    <a>
                      <img
                        className="client"
                        loading="lazy"
                        src="imgs/trust/c16.png"
                        data-src="/images/logos/custom/c16.png"
                      />
                    </a>
                  </div>
                  <div className="column is-hidden-mobile" />
                </div>
              </div>
              {/* CTA */}
              <div className="has-text-centered is-title-reveal pt-40 pb-40">
                <a
                  href="signup.html"
                  className="button button-cta btn-align bg-m-blue7 m-white raised rounded"
                  style={{ border: "none" }}
                >
                  Get started Now
                </a>
              </div>
              {/* /CTA */}
            </div>
          </div>
        </section>
        {/* /CTA Banner */}
        {/* Contact Section */}
        <div className="section is-medium no-padding-top" id="contact-us">
          <div className="container">
            {/* Title */}
            <div className="section-title-wrapper has-text-centered">
              <h2 className="title is-2 m-white">Drop us a Line.</h2>
              <h4 className="subtitle is-4 m-white">
                Ask us a question, or just say Hello.
              </h4>
            </div>
            <div className="columns">
              <div className="column is-6">
                {/* Contact form */}
                <div className="contact-form pt-20 m-white">
                  <form id="contactform">
                    <div className="columns is-multiline">
                      <div className="column is-6">
                        <div className="control">
                          <label>First name *</label>
                          <input
                            title="Enter"
                            className="input is-medium"
                            type="text"
                            id="na"
                            required
                          />
                        </div>
                      </div>
                      <div className="column is-6">
                        <div className="control">
                          <label>Last name *</label>
                          <input
                            title="Enter"
                            className="input is-medium"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div className="column is-6">
                        <div className="control">
                          <label>Email *</label>
                          <input
                            title="Enter"
                            className="input is-medium"
                            type="email"
                            id="em"
                            required
                          />
                        </div>
                      </div>
                      <div className="column is-6">
                        <div className="control">
                          <label>Phone</label>
                          <input
                            title="Enter"
                            className="input is-medium"
                            type="text"
                            id="we"
                          />
                        </div>
                      </div>
                      <div className="column is-12">
                        <div className="control">
                          <label>Message *</label>
                          <textarea
                            title="Enter"
                            placeholder="Write us a message..."
                            maxLength={500}
                            className="textarea"
                            rows={4}
                            id="me"
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="submit-wrapper" style={{ float: "right" }}>
                      <button
                        className="button button-cta is-bold btn-align bg-m-blue7 m-white raised"
                        style={{ border: "none" }}
                        id="sendmsg"
                        // onClick="step1(event);"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="column is-5 is-offset-1">
                {/* Contact info tabs */}
                <div className="contact-toggler">
                  <ul className="tabbed-links">
                    <li className="is-active" data-contact="contact-email">
                      Email
                    </li>
                    <li data-contact="contact-location">Location</li>
                    <li data-contact="contact-phone">Phone</li>
                  </ul>
                  <div className="contact-blocks">
                    {/* Tab content */}
                    <div
                      id="contact-email"
                      className="contact-block animated preFadeInUp fadeInUp"
                    >
                      <div className="contact-icon bg-m-blue7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>
                      </div>
                      <div className="contact-info">
                        <span className="m-white">Contact us by email</span>
                        <span>mail@eskooly.com</span>
                      </div>
                    </div>
                    {/* Tab content */}
                    <div
                      id="contact-location"
                      className="contact-block animated preFadeInUp fadeInUp is-hidden"
                    >
                      <div className="contact-icon bg-m-blue7">
                        <i className="fa fa-map" />
                      </div>
                      <div className="contact-info">
                        <span className="m-white">Visit us @ our Office</span>
                        <span>
                          1 Rowan Lodge, 1092 Chester Road Stratford,
                          Manchester, UK
                        </span>
                      </div>
                    </div>
                    {/* Tab content */}
                    <div
                      id="contact-phone"
                      className="contact-block animated preFadeInUp fadeInUp is-hidden"
                    >
                      <div className="contact-icon bg-m-blue7">
                        <i className="fa fa-phone" />
                      </div>
                      <div className="contact-info">
                        <span className="m-white">Call our Support team</span>
                        <span>+92 346 020 4447, +44 740 407 4252</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Illustration */}
                <img
                  loading="lazy"
                  src="https://eskooly.com/assets/images/illustrations/drawings/line-city.svg"
                  data-src="/images/illustrations/drawings/line-city.svg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Contact Section */}
        {/* Simple light footer */}
        <footer className="footer footer-light-medium">
          <div className="container">
            <div className="columns">
              {/* Column */}
              <div className="column is-4">
                <div className="pt-10 pb-10">
                  <img
                    className="small-footer-logo"
                    src="/images/logos/logoxx.png"
                    alt="eSkooly Logo"
                  />
                  <div className="footer-description pt-10 pb-10">
                    eSkooly is the world&apos;s best and #1 ranked free online
                    school management software. Our school management software
                    has more features than any school software in the market.
                  </div>
                </div>
                <div>
                  <span className="moto">
                    Copyright © eSkooly (SMC Private) Ltd. - All rights
                    reserved.
                  </span>
                </div>
              </div>
              {/* Column */}
              <div className="column is-6 is-offset-2">
                <div className="columns">
                  {/* Column */}
                  <div className="column">
                    <ul className="footer-column">
                      <li className="column-header">eSkooly</li>
                      <li className="column-item">
                        <a href="https://eskooly.com">Home</a>
                      </li>
                      <li className="column-item">
                        <a href="#">Pricing</a>
                      </li>
                      <li className="column-item">
                        <a href="signup.html">Get started</a>
                      </li>
                      <li className="column-item">
                        <a href="#">Help</a>
                      </li>
                    </ul>
                  </div>
                  {/* Column */}
                  <div className="column">
                    <ul className="footer-column">
                      <li className="column-header">Terms</li>
                      <li className="column-item">
                        <a href="terms&conditions.html">Terms of Service</a>
                      </li>
                      <li className="column-item">
                        <a href="privacypolicy.html">Privacy policy</a>
                      </li>
                      <li className="column-item">
                        <a href="saasterms.html">SaaS services</a>
                      </li>
                    </ul>
                  </div>
                  {/* Column */}
                  <div className="column">
                    <ul className="footer-column">
                      <li className="column-header" />
                      <li className="column-item">
                        <a href="https://play.google.com/store/apps/details?id=com.eskooly.app">
                          <img
                            src="/images/illustrations/mockups/landing3/google.png"
                            style={{ height: 45 }}
                          />
                        </a>
                      </li>
                      <li className="column-item">
                        <a href="https://apps.apple.com/pk/app/eskooly/id6448073356">
                          <img
                            src="/images/illustrations/mockups/landing3/apple.png"
                            style={{ height: 45 }}
                          />
                        </a>
                      </li>
                      <li>
                        <div className="social-links">
                          <a href="http://www.facebook.com/eskooly/">
                            <span className="icon">
                              <i className="fa fa-facebook" />
                            </span>
                          </a>
                          <a href="https://www.twitter.com/eskooly/">
                            <span className="icon">
                              <i className="fa fa-twitter" />
                            </span>
                          </a>
                          <a href="https://g.page/r/CavgvScb5-o7EA0">
                            <span className="icon">
                              <i className="fa fa-google" />
                            </span>
                          </a>
                          <a href="https://www.youtube.com/channel/UCJ1A8Xa4u31H2o7wzEhimRg">
                            <span className="icon">
                              <i className="fa fa-youtube" />
                            </span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* /Simple light footer */}
        {/* Video modal */}
        <div id="video-modal" className="modal modal-primary">
          <div className="modal-background" />
          <div className="modal-content">
            <div className="side-block is-title-reveal">
              <div className="background-wrapper">
                <div
                  id="video-embed"
                  className="video-wrapper"
                  data-url="https://www.youtube.com/watch?v=-cS8-8fhuD8"
                >
                  <div className="video-overlay" />
                  <div className="playbutton">
                    <div className="icon-play">
                      <i className="im im-icon-Play-Music" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="modal-close is-large is-hidden stop-video"
            aria-label="close"
          />
        </div>
        {/* Basic modal */}
        {/* Back To Top Button */}
        <div id="backtotop">
          <a href="#" />
        </div>
        {/* Concatenated jQuery and plugins */}
      </div>
    </>
  );
}
