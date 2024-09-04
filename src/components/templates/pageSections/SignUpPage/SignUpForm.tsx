'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typed from 'typed.js'

const Logo: React.FC = () => (
  <div className="flex justify-start mb-8">
    <Image src="/images/logos/logoxx.png" alt="eSkooly Logo" width={150} height={50} />
  </div>
)

interface InputFieldProps {
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange, icon }) => (
  <div className="relative mb-4">
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-md py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
      {icon}
    </span>
  </div>
)

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)

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

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sign up attempted', { email, password, confirmPassword, acceptTerms })
    // Add your sign up logic here
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Registration form */}
      <div className="w-full md:w-[33%] flex flex-col justify-center bg-blue-900 p-8">
        <div className="max-w-md w-full mx-auto">
          <Logo />
          <h2 className="text-3xl font-bold text-white mb-8">Register your account</h2>
          <form onSubmit={handleSignUp}>
            <InputField
              type="email"
              placeholder="Your Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
            />
            <InputField
              type="password"
              placeholder="Choose Password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>}
            />
            <InputField
              type="password"
              placeholder="Confirm Password *"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              icon={<svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>}
            />
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="accept-terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="accept-terms" className="ml-2 block text-sm text-gray-300">
                Accept our <a href="#" className="text-blue-400 hover:underline">Terms & Conditions</a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-300"
            >
              Sign up
            </button>
          </form>
          <div className="text-center mt-4">
            <Link href="/login" className="text-sm text-gray-300 hover:underline">
              have an account ? Login
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Start managing now */}
      <div className="hidden md:flex md:w-[67%] bg-gray-900 text-white p-8 flex-col justify-center items-center">
        <div className="max-w-md text-center">
          <h2 className="text-4xl font-bold mb-4">Start managing <span className="text-blue-400">free</span> now !</h2>
          <p className="mb-8">
            eSkooly is a 100% free online <span ref={el}>School </span> Cent management software for a lifetime with no limitations.
          </p>
          <div className='w-[100%] ' >
            <img src="/images/sign-up/signup.png" alt="Management Illustration" style={{width:"100%",height:"100%"}}/>
          </div>
        </div>
      </div>

      {/* Login button in top right corner */}
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <span className="text-gray-300">Already have an account ?</span>
        <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-300">
          Login
        </Link>
      </div>
    </div>
  )
}

export default SignUpForm