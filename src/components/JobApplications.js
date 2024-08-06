import React, { useEffect, useState } from 'react'
import Loader from './Loader'

export default function JobApplications({setCountApp}) {
    // const [applicants, setApplicant] = useState([]);
    const [loading, setLoading] = useState(false);

    const applicants = [
        {
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            contactNo: "+1234567890"
        },
        {
            name: "Bob Smith",
            email: "bob.smith@example.com",
            contactNo: "+1987654321"
        },
        {
            name: "Charlie Brown",
            email: "charlie.brown@example.com",
            contactNo: "+1122334455"
        },
        {
            name: "Diana Prince",
            email: "diana.prince@example.com",
            contactNo: "+2233445566"
        },
        {
            name: "Evan Davis",
            email: "evan.davis@example.com",
            contactNo: "+3344556677"
        },
        {
            name: "Fiona Adams",
            email: "fiona.adams@example.com",
            contactNo: "+4455667788"
        },
        {
            name: "George Harris",
            email: "george.harris@example.com",
            contactNo: "+5566778899"
        },
        {
            name: "Hannah Lee",
            email: "hannah.lee@example.com",
            contactNo: "+6677889900"
        },
        {
            name: "Isaac Martinez",
            email: "isaac.martinez@example.com",
            contactNo: "+7788990011"
        },
        {
            name: "Jessica Thompson",
            email: "jessica.thompson@example.com",
            contactNo: "+8899001122"
        }
    ];

    useEffect(()=>{
        setCountApp(applicants.length);
    },[])


  return (
    <>{loading ? 
        <div className='flex items-center justify-center h-[70vh] w-full'>
            <Loader />
        </div> : <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg w-full h-[80vh] md:h-[70vh] overflow-auto'>
            
            {
                applicants.map((applicant, index) => (
                    <div className='p-4 bg-white shadow-lg rounded-lg flex flex-col justify-between' key={index}>
                        <div>
                            <div className='text-xl font-semibold'>Name : {applicant.name}</div>
                            <div className=''>Email : {applicant.email}</div>
                            <div className=''>Contact No : {applicant.contactNo}</div>
                        </div>
                        <button className='mt-4 w-fit bg-orange-600 text-white text-base hover:bg-orange-700 px-3 py-2'>View Resume</button>
                    </div>
                ))
            }
        </div>}
        </>
  )
}
