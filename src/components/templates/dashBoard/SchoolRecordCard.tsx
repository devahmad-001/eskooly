import Box from '@/components/shared/ui/FlexBox'
import Heading from '@/components/shared/ui/Heading'
import { CancelIcon, SadFaceIcon } from '@/components/shared/ui/Icons'
import ParaGraph from '@/components/shared/ui/ParaGraph'
import React from 'react'
import { presentRecord } from '../../../../Type'

export default function SchoolRecordCard() {
    return (
        <>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' rowGap='2rem'>

                {
                    presentRecord.map((data) => {
                        return (
                            <>
                                <Box borderRadius='0.26rem' display='flex' padding='1.2rem' flexDirection='column' justifyContent='space-around' hoverBoxShadow=' 0px 0px 19px 11px rgba(199,198,204,1)' width='42.5rem' height='10rem' backgroundColor='--white' margin='0 auto' >
                                    <Box display='flex' justifyContent='space-between' alignItems='center' >
                                        <Heading color={data.titleColor} fontFamily='sans-serif' fontSize='medium' fontWeight='700' text={data.title} />
                                        <CancelIcon width='1.2rem' height="1.2rem" color='grey' />
                                    </Box>
                                    <Box width='100%' display='flex' alignItems='center' justifyContent='center' flexDirection='column' >
                                        <SadFaceIcon color=" rgb(255, 128, 139)" />
                                        <ParaGraph fontSize='0.98rem' fontWeight='500' text={data.status} color="--dark-pink" />
                                    </Box>
                                </Box>
                            </>

                        )
                    })
                }
            </Box>

        </>
    )
}
