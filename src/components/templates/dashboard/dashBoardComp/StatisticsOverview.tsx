// import React from 'react'
// import { ArrowUpIcon, ArrowDownIcon, UsersIcon, UserIcon, CreditCardIcon } from 'lucide-react'

// interface StatItemProps {
//   title: string
//   value: number
//   change: number
//   icon: React.ReactNode
// }

// const StatItem: React.FC<StatItemProps> = ({ title, value, change, icon }) => {
//   const isPositive = change >= 0
//   const changeColor = isPositive ? 'text-green-500' : 'text-red-500'
//   const changeIcon = isPositive ? <ArrowUpIcon className="w-3 h-3" /> : <ArrowDownIcon className="w-3 h-3" />

//   return (
//     <div className="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-w-[230px] w-full">
//       <div className="flex items-center mb-2">
//         <div className="p-2 bg-blue-100 rounded-full mr-3">
//           {icon}
//         </div>
//         <h3 className="text-sm font-semibold text-gray-800 leading-tight">{title}</h3>
//       </div>
//       <div className="flex items-baseline mt-2">
//         <span className="text-xl font-bold text-gray-900">{value}%</span>
//         <span className={`ml-2 text-xs font-medium ${changeColor} flex items-center`}>
//           {changeIcon}
//           {Math.abs(change)}%
//         </span>
//       </div>
//     </div>
//   )
// }

// const StatisTics: React.FC = () => {
//   const stats = [
//     { title: "Today Present Students", value: 85, change: 5, icon: <UsersIcon className="w-4 h-4 text-blue-500" /> },
//     { title: "Today Present Employees", value: 92, change: -2, icon: <UserIcon className="w-4 h-4 text-blue-500" /> },
//     { title: "This Month Fee Collection", value: 78, change: 10, icon: <CreditCardIcon className="w-4 h-4 text-blue-500" /> },
//   ]

//   return (
//     <div className="p-4 bg-gray-100 rounded-xl shadow-lg max-w-fit mx-auto">
//       <h2 className="text-lg font-bold text-gray-800 mb-4">Statistics Overview</h2>
//       <div className="flex flex-col sm:flex-row gap-4">
//         {stats.map((stat, index) => (
//           <StatItem key={index} {...stat} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default StatisTics;


// // StatisTics



















import React from 'react'
import { ArrowUpIcon, ArrowDownIcon, UsersIcon, UserIcon, CreditCardIcon } from 'lucide-react'

interface StatItemProps {
  title: string
  value: number
  change: number
  icon: React.ReactNode
}

const StatItem: React.FC<StatItemProps> = ({ title, value, change, icon }) => {
  const isPositive = change >= 0
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500'
  const changeIcon = isPositive ? <ArrowUpIcon className="w-3 h-3" /> : <ArrowDownIcon className="w-3 h-3" />

  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-[230px]">
      <div className="flex items-center mb-2">
        <div className="p-2 bg-blue-100 rounded-full mr-3">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-gray-800 leading-tight">{title}</h3>
      </div>
      <div className="flex items-baseline mt-2">
        <span className="text-xl font-bold text-gray-900">{value}%</span>
        <span className={`ml-2 text-xs font-medium ${changeColor} flex items-center`}>
          {changeIcon}
          {Math.abs(change)}%
        </span>
      </div>
    </div>
  )
}

const  StatisTics: React.FC = () => {
  const stats = [
    { title: "Today Present Students", value: 85, change: 5, icon: <UsersIcon className="w-4 h-4 text-blue-500" /> },
    { title: "Today Present Employees", value: 92, change: -2, icon: <UserIcon className="w-4 h-4 text-blue-500" /> },
    { title: "This Month Fee Collection", value: 78, change: 10, icon: <CreditCardIcon className="w-4 h-4 text-blue-500" /> },
  ]

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-lg max-w-fit mx-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Statistics Overview</h2>
      <div className="flex flex-col sm:flex-column gap-4">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </div>
  )
}

export default  StatisTics