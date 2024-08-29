import CustomLink from '@/components/shared/ui/CustomLink'
import Img from '@/components/shared/ui/Img'
import ParaGraph from '@/components/shared/ui/ParaGraph'
import { MailIcon } from 'lucide-react'
import React from 'react'

export default function Allowcation() {
  return (
    <>
      <div className="mt-8 text-white">
        <div className="flex justify-center space-x-8">
          <CustomLink href='' color="--white" text='Email' />
          <CustomLink href='' color="--white" text='Location' />
          <CustomLink href='' color="--white" text='Phone' />
        </div>
        <div className="mt-8 flex flex-col  items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-full">
              <MailIcon className="text-white w-6 h-6" />
            </div>
            <div>
              <ParaGraph fontWeight="600" text="Contact us by email" />
              <CustomLink fontWeight="400" href='' color="#acbae6" text='mail@eskooly.com' />
            </div>
          </div>
          <div className='w-[56.6rem] h-[17.5rem] ' >
            <Img objectCover="cover" margin="2rem 0 0 0" width="100%" height="106%" src="/imgs/dropUSLine/line-city.svg" />
          </div>
        </div>
      </div>
    </>
  )
}
