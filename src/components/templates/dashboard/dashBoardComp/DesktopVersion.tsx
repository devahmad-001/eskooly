import React from 'react'
import Box from '@/components/shared/ui/FlexBox'
import Heading from '@/components/shared/ui/Heading'
import Img from '@/components/shared/ui/Img'
import ParaGraph from '@/components/shared/ui/ParaGraph'

export default function DesktopVersion() {
    return (
        <>
            <Box position='relative' width='330px' height='120px' >
                <Box position='absolute' padding='0 0 1rem 0' borderRadius='0.5rem' backgroundColor='--light-pink' top='1.7rem' left='0' right='0' bottom='0' display=' flex' justifyContent='space-around' alignItems='end'>
                    <Box>

                        <Box>
                            <Heading text='Desktop Version' fontFamily='sans-serif' fontSize='0.85rem' fontWeight='700' color="--white" />
                            <ParaGraph fontSize='0.7rem' text={<>
                                *Download & install eSkooly
                                <br />
                                on your PC.
                            </>} color=" --dark-grey" />
                        </Box>
                        <Box display='flex' >
                            <Img />
                            <Img />
                        </Box>
                    </Box>
                    <Box width='106px' height='92px'>
                        <Img width='100%' height='100%' src='/images/dashboard/desktopversion.png' />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
