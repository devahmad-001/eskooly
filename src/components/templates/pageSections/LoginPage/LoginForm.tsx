import IconBtn from '@/components/shared/ui/IconBtn'
import Button from '@/components/shared/ui/Button'
import CustomLink from '@/components/shared/ui/CustomLink'
import ParaGraph from '@/components/shared/ui/ParaGraph'
import Image from 'next/image'
import Input from '@/components/shared/ui/Input'



const LoginForm: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="flex justify-center mb-4">
          <Image src="/images/logos/logineskooly.png" alt="eSkooly Logo" width={150} height={50} />
        </div>
        <ParaGraph text="I do not have an account yet" textAlign='center' color='--secondary-grey' margin='0 0 2rem 0' />
        {/* <div className='flex flex justify-center space-x-4 mb-6' >
          logos student employee people
        </div> */}
        <form className="w-full max-w-sm">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="User name"
              // padding='0.5rem 0.75rem'
              // width='100%'
              // border='1px'
              // borderColor=' --dim-grey'
              // borderRadius='0.375rem '
              // paddingLeft='2.5rem'
              // outLine=" 2px solid transparent"
              // outLineOffset="2px"
              // focusOutline='2px solid transparent'
              // focusOutlineOffset="2px"
              // focusBoxShadow=''
className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </span>
          </div>

          <div className="relative mb-4">
            <input
              type="text"

              placeholder="User name"

              className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>            </span>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="remember-me"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>
          <Button
            text='Login in'
            backgroundColor=' --secondary-blue'
            hoverBackgroundColor='--light-blue'
            color='--white'
            fontWeight='700'
            padding='0.5rem 1rem'
            borderRadius='0.25rem'
            outLine='2px solid transparent'
            outlineOffset='2px'
            width='100%'
          />

          <div className="text-center mt-4">
            <CustomLink text="Forgot password?" href={"/"} fontWeight="" fontSize="0.875rem" lineHeight="1.25rem" color="rgb(29 78 216)" />
          </div>
        </form>
      </div>

      {/* Right side - Start managing now */}
      <div className="hidden md:flex md:w-1/2 bg-blue-500 text-white p-8 flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4">Start managing now</h2>
        <p className="text-center mb-8">
          Stop struggling with common tasks and focus on the real choke points. Discover a full featured & 100% Free School management platform.
        </p>
        <CustomLink href='/' text={<>
          <IconBtn
            text="Get started"
            maxWidth="10rem"
            borderRadius="31.25rem"
            padding="1.375rem 2.3rem"
            color="--white"
            cursor="pointer"
            justifyContent="center"
            textAlign="center"
            whiteSpace="nowrap"
            textDecoration="--white"
            boxSizing="border-box"
            appearance="none"
            fontSize="0.813rem"
            height="2.9rem"
            alignItems="center"
            displayflex="inline-flex"
            lineHeight="1.313rem"
            position="relative"
            verticalAlign="top"
            userSelect="none"
            transition="all 0.5s ease"
            hoverOpacity="1"
            hoverBoxShadow=" rgba(0, 0, 0, 0.6) 0rem 0.875rem 1.625rem -0.75rem,
     rgba(0, 0, 0, 0.15) 0px 4px 23px 0px,
     rgba(0, 0, 0, 0.3) 0px 8px 10px -5px"
            hoverBackground="--black-"
            hoverBorder="2px solid black"
            hoverColor="--black-"
            heigth="3rem"
            border="2px solid white"
          />
        </>} />
        <div className="mt-8 max-w-[600px] max-h-[300px] ">
          <img src="/images/illustrations/drawings/login4.png" alt="Management Illustration" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  )
}
export default LoginForm;