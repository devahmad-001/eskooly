'use client'
// import React from 'react'
// import { Home, Phone, Globe, MapPin, Flag, RefreshCw } from 'lucide-react'

// export default function Component() {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm max-w-5xl mx-auto">
//       <div className="flex items-center mb-6">
//         <h1 className="text-xl font-semibold text-gray-800">General Settings</h1>
//         <Home className="mx-2 h-5 w-5 text-blue-600" />
//         <span className="text-blue-600">Institute Profile</span>
//       </div>

//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold text-gray-800">Update Profile</h2>
//         <div className="flex items-center space-x-2">
//           <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
//           <span className="text-sm text-gray-600">Required*</span>
//           <div className="w-3 h-3 bg-gray-300 rounded-full ml-4"></div>
//           <span className="text-sm text-gray-600">Optional</span>
//         </div>
//         <button className="bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-md">
//           Profile View
//         </button>
//       </div>

//       <div className="grid grid-cols-2 gap-8">
//         <div className="space-y-6">
//           <div className="border rounded-lg p-4">
//             <label className="block text-sm font-semibold text-indigo-600 mb-2">Institute Logo*</label>
//             <div className="flex items-center justify-center mb-4">
//               <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
//                 YOUR LOGO HERE
//               </div>
//             </div>
//             <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md">
//               Change Logo
//             </button>
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-indigo-600 mb-2">Name of Institute*</label>
//             <input
//               type="text"
//               placeholder="Institute Name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-indigo-600 mb-2">Target Line*</label>
//             <input
//               type="text"
//               placeholder="Target Line"
//               className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//         </div>

//         <div className="space-y-6">
//           <div>
//             <label className="block text-sm font-semibold text-indigo-600 mb-2">Phone Number*</label>
//             <input
//               type="tel"
//               placeholder="Phone No"
//               className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-gray-600 mb-2">Website</label>
//             <input
//               type="url"
//               placeholder="Website URL"
//               className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-indigo-600 mb-2">Address*</label>
//             <input
//               type="text"
//               placeholder="Address"
//               className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-indigo-600 mb-2">Country*</label>
//             <select className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none bg-white">
//               <option value="">Select Country</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 flex justify-center">
//         <button className="bg-amber-400 hover:bg-amber-500 text-gray-800 font-semibold px-6 py-2 rounded-full flex items-center">
//           <RefreshCw className="mr-2 h-5 w-5" />
//           Update Profile
//         </button>
//       </div>

//       <div className="mt-8 bg-gray-50 p-6 rounded-lg flex">
//         <div className="w-1/3">
//           <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-4">
//             YOUR LOGO HERE
//           </div>
//         </div>
//         <div className="w-2/3">
//           <h3 className="text-xl font-semibold text-gray-800 mb-1">Your Institute Name</h3>
//           <p className="text-sm text-amber-500 mb-4">Institute Target Line</p>
//           <div className="space-y-2 text-sm text-gray-600">
//             <div className="flex items-center">
//               <Phone className="mr-2 h-4 w-4" />
//               <span>XXXXXXXXXX</span>
//             </div>
//             <div className="flex items-center">
//               <Globe className="mr-2 h-4 w-4" />
//               <span>fa837072@gmail.com</span>
//             </div>
//             <div className="flex items-center">
//               <Globe className="mr-2 h-4 w-4" />
//               <span>-------------------</span>
//             </div>
//             <div className="flex items-center">
//               <MapPin className="mr-2 h-4 w-4" />
//               <span>-------------------</span>
//             </div>
//             <div className="flex items-center">
//               <Flag className="mr-2 h-4 w-4" />
//               <span>-------</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




// 


// import React, { useState } from 'react'
// import { ChevronDown } from 'lucide-react'

// const InputField = ({ label, placeholder, required = false, prefix = '' }) => (
//   <div className="mb-4 relative">
//     <div className={`absolute top-0 left-4 px-2 py-1 text-xs font-semibold ${required ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-700'} rounded-full -translate-y-1/2`}>
//       {label}
//     </div>
//     <div className="flex">
//       {prefix && (
//         <span className="inline-flex items-center px-3 rounded-l-full border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
//           {prefix}
//         </span>
//       )}
//       <input
//         type="text"
//         placeholder={placeholder}
//         className={`w-full px-4 py-3 border border-gray-300 ${prefix ? 'rounded-r-full' : 'rounded-full'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//       />
//     </div>
//   </div>
// )

// const Select = ({ label, required = false, options }) => (
//   <div className="mb-4 relative">
//     <div className={`absolute top-0 left-4 px-2 py-1 text-xs font-semibold ${required ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-700'} rounded-full -translate-y-1/2 z-10`}>
//       {label}
//     </div>
//     <div className="relative">
//       <select className="w-full px-4 py-3 border border-gray-300 rounded-full appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//       <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//     </div>
//   </div>
// )

// export default function Component() {
//   const [feeParticulars, setFeeParticulars] = useState([
//     { label: 'MONTHLY TUITION FEE', amount: 'FIXED', editable: false },
//     { label: 'ADMISSION FEE', amount: '0', editable: true },
//     { label: 'REGISTRATION FEE', amount: '0', editable: true },
//     { label: 'ART MATERIAL', amount: '0', editable: true },
//     { label: 'TRANSPORT', amount: '0', editable: true },
//   ])

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
//       <h2 className="text-2xl font-bold mb-6">Change Fee Particulars</h2>
//       <div className="flex items-center gap-4 mb-6">
//         <div className="flex items-center">
//           <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
//           <span className="text-sm text-gray-600">Editable</span>
//         </div>
//         <div className="flex items-center">
//           <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
//           <span className="text-sm text-gray-600">Fixed</span>
//         </div>
//       </div>

//       <Select
//         label="Fee Particulars for"
//         required={true}
//         options={['All Students']}
//       />

//       {feeParticulars.map((fee, index) => (
//         <div key={index} className="grid grid-cols-2 gap-4 mb-4">
//           <InputField
//             label="Particular Label"
//             placeholder={fee.label}
//             required={true}
//           />
//           <InputField
//             label="Prefix Amount"
//             placeholder={fee.amount}
//             required={true}
//             prefix="₹"
//           />
//         </div>
//       ))}

//       <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-full hover:bg-indigo-700 transition duration-200 mt-6">
//         Save Changes
//       </button>
//     </div>
//   )
// }





// import React, { useState } from 'react'
// import { Image, ChevronDown } from 'lucide-react'

// const InputField = ({ label, placeholder, required = false }) => (
//   <div className="mb-4 relative">
//     <div className={`absolute top-0 left-4 px-2 py-1 text-xs font-semibold ${required ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-700'} rounded-full -translate-y-1/2 z-10`}>
//       {label}
//     </div>
//     <input
//       type="text"
//       placeholder={placeholder}
//       className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//     />
//   </div>
// )

// export default function Component() {
//   const [entries, setEntries] = useState(10)
//   const [search, setSearch] = useState('')

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow">
//       <div className="grid grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-2xl font-bold mb-6">Add New Bank</h2>
//           <div className="flex items-center gap-4 mb-6">
//             <div className="flex items-center">
//               <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
//               <span className="text-sm text-gray-600">Required*</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
//               <span className="text-sm text-gray-600">Optional</span>
//             </div>
//           </div>

//           <div className="mb-4 relative">
//             <div className="absolute top-0 left-4 px-2 py-1 text-xs font-semibold bg-indigo-500 text-white rounded-full -translate-y-1/2 z-10">
//               Bank Logo*
//             </div>
//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center">
//               <Image className="w-16 h-16 text-gray-400 mb-4" />
//               <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition duration-200">
//                 Choose Logo
//               </button>
//             </div>
//             <div className="text-xs text-gray-500 mt-2 text-right">Max size 500KB</div>
//           </div>

//           <InputField label="Bank Name*" placeholder="Your Bank Name" required={true} />
//           <InputField label="Bank/Branch Address*" placeholder="Bank Address" required={true} />
//           <InputField label="Account Number*" placeholder="Bank Account No" required={true} />
//         </div>

//         <div>
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex items-center">
//               <span className="mr-2">Show</span>
//               <div className="relative">
//                 <select
//                   value={entries}
//                   onChange={(e) => setEntries(Number(e.target.value))}
//                   className="appearance-none bg-white border border-gray-300 rounded px-3 py-1 pr-8 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 >
//                   <option value={10}>10</option>
//                   <option value={25}>25</option>
//                   <option value={50}>50</option>
//                 </select>
//                 <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
//               </div>
//               <span className="ml-2">entries</span>
//             </div>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search:"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="pl-3 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </div>
//           </div>

//           <div className="bg-white shadow rounded-lg overflow-hidden">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-indigo-500 text-white">
//                   <th className="px-6 py-3 text-left">Bank Name</th>
//                   <th className="px-6 py-3 text-left">Logo</th>
//                   <th className="px-6 py-3 text-left">Account No.</th>
//                   <th className="px-6 py-3 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
//                     No data available in table
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
//             <div>Showing 0 to 0 of 0 entries</div>
//             <div className="flex space-x-2">
//               <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">Previous</button>
//               <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">Next</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }