import Box from '@/components/shared/ui/FlexBox'
import Heading from '@/components/shared/ui/Heading'
import Img from '@/components/shared/ui/Img'
import ParaGraph from '@/components/shared/ui/ParaGraph'
import Span from '@/components/shared/ui/Span'
import React from 'react'

export default function WelcomeBox() {
    return (
        <>

            <Box position='relative' width='640px'  border='1px solid #ff808b' height='120px' >
                <Box position='absolute' padding='0 0 1rem 0' borderRadius='0.5rem' backgroundColor=' --t-pink' top='1.7rem' left='0' right='0' bottom='0' display=' flex' justifyContent='space-around' alignItems='end'>
                    <Box>
                        <Heading text='Welcome to Admin Dashboard' fontFamily='sans-serif' fontSize='0.95rem' fontWeight='700' color="--dark-pink" />
                        <ParaGraph fontSize='0.96rem' text="Your Account is not Verified yet!" color=" --dark-grey" />
                        <ParaGraph fontSize='0.96rem' color=" --dark-grey" text={<>
                            Please Verify your email address.
                            <Span fontSize='0.90rem' color="--blue" text='Verify Now' />
                        </>} />
                    </Box>
                    <Box width='183px' height='100px'>
                        <Img width='100%' height='100%' src='/images/dashboard/admin-message.png' />
                    </Box>
                </Box>
            </Box>

        </>
    )
}
