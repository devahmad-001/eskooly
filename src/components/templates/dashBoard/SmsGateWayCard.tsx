import React from 'react'
import Box from '@/components/shared/ui/FlexBox'
import Heading from '@/components/shared/ui/Heading'
import Img from '@/components/shared/ui/Img'
import ParaGraph from '@/components/shared/ui/ParaGraph'

export default function SmsGateWayCard() {
  return (
    <>
      <Box position='relative' width='350px' height='120px' >
        <Box position='absolute' padding='0 0 1rem 0' borderRadius='0.5rem' backgroundColor='--dark-purple' top='1.7rem' left='0' right='0' bottom='0' display=' flex' justifyContent='space-around' alignItems='end'>
          <Box>
            <Heading text='Free SMS Gateway' fontFamily='sans-serif' fontSize='0.85rem' fontWeight='700' color="--white" />
            <ParaGraph fontSize='0.7rem' text={<>
              Send Unlimited Free SMS <br />
              on Mobile Numbers.
            </>} color=" --dark-grey" />
          </Box>
          <Box width='55px' height='105px'>
            <Img width='100%' height='100%' src='/images/dashboard/msg1.png' />
          </Box>
        </Box>
      </Box>
    </>
  )
}
