import React from 'react'
import SchoolDataCard from '@/components/templates/dashboard/dashBoardComp/SchoolDataCard'
import ChartBox from '@/components/templates/dashboard/dashBoardComp/ChartBox'
import SchoolRecordCard from '@/components/templates/dashboard/dashBoardComp/SchoolRecordCard'
import WelcomeBox from '@/components/templates/dashboard/dashBoardComp/WelcomeBox'
import CalenderBox from '@/components/templates/dashboard/dashBoardComp/CalenderBox'
import SmsGateWayCard from '@/components/templates/dashboard/dashBoardComp/SmsGateWayCard'
import DesktopVersion from '@/components/templates/dashboard/dashBoardComp/DesktopVersion'
import Box from '@/components/shared/ui/FlexBox'
import StatisTics from './dashBoardComp/StatisticsOverview'
export default function Dashboard() {
    return (
        <>
            <div className='flex flex-col row-x-4 ' >
                <SchoolDataCard />
                <Box display='flex' justifyContent='flex-end' columnGap='1rem'  >
                    <Box display='flex' rowGap='2rem' alignItems='center' flexDirection='column' >
                        <WelcomeBox />
                        <ChartBox />
                        <SchoolRecordCard />
                    </Box>
                    <Box display='flex' justifyContent='start' flexDirection='column' >
                        <StatisTics />
                        <SmsGateWayCard />
                        <DesktopVersion />
                        <CalenderBox />
                    </Box>
                </Box>
            </div>
        </>
    )
}
