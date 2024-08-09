import Heading from '@/components/shared/ui/Heading'
import ParaGraph from '@/components/shared/ui/ParaGraph'
import React from 'react'
import FeaturesDescription from './FeaturesDescription'
import { featuresData } from '../../../../../Type'

export default function FeaturesBox() {
  return (
    <>
    <Heading textAlign='center' text='Features Of School Management Software' padding='0.7rem 0rem' fontWeight='600' fontFamily={`Nexa Bold, sans-serif`} fontSize='2.3rem' color='#fff' lineHeight='1.125rem'/>
    <ParaGraph color='#fff' textAlign='center' fontSize='1rem' text='eSkooly is a complete and feature-rich school management software for all educational institutes. This school management software is for learning, administration, and management activities in schools, colleges, universities, tuition centers, or training centers. Our free school management system manages everything starting from admission to attendance and exams to result in cards.'/>
    <FeaturesDescription  />
    </>
  )
}
