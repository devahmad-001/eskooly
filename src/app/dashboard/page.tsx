import React from 'react'
import SchoolDataCard from '../../components/templates/dashBoard/SchoolDataCard'
import ChartBox from '../../components/templates/dashBoard/ChartBox'
import SchoolRecordCard from '../../components/templates/dashBoard/SchoolRecordCard'
import WelcomeBox from '../../components/templates/dashBoard/WelcomeBox'
import CalenderBox from '../../components/templates/dashBoard/CalenderBox'
import SmsGateWayCard from '../../components/templates/dashBoard/SmsGateWayCard'
import DesktopVersion from '../../components/templates/dashBoard/DesktopVersion'
import Box from '@/components/shared/ui/FlexBox'
export default function Dashboard() {
    return (
        <>
            <Box display='flex' alignItems='center' flexDirection='column' >
                <SchoolDataCard />
                <WelcomeBox />
                <ChartBox />
                <SchoolRecordCard />
                <CalenderBox />
                <SmsGateWayCard />
                <DesktopVersion />
            </Box>

        </>
    )
}
