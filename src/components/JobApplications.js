import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { getApplicants } from '../api/discover';

export default function JobApplications({setCountApp}) {
    // const [applicants, setApplicant] = useState([]);
    const [loading, setLoading] = useState(false);
    const [applicants, setApplicants] = useState([]);

    async function fetchApplicants(){
        setLoading(true)
        const list = await getApplicants();
        setLoading(false);
        setApplicants(list);
        setCountApp(list.length);
    }

    function showResume(resume){
        window.open(`http://localhost:8080/resumes/${resume}`, "_blank", "noreferrer")
    }

    useEffect(()=>{
        fetchApplicants();
    },[])


  return (
    <>{loading ? 
        <div className='flex items-center justify-center h-[70vh] w-full'>
            <Loader />
        </div> : <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg w-full h-[80vh] md:h-[70vh] overflow-auto'>
            
            {
                applicants.map((applicant, index) => (
                    <div className='px-4 py-6 bg-white shadow-lg rounded-lg flex flex-col justify-betwee h-fit' key={index}>
                        <div>
                            <div className='text-xl font-semibold'>Name : {applicant.name}</div>
                            <div className=''>Email : {applicant.email}</div>
                            <div className=''>Contact No : {applicant.contact}</div>
                        </div>
                        <button className='mt-4 w-fit bg-orange-600 text-white text-base hover:bg-orange-700 px-3 py-2' onClick={()=>showResume(applicant.resume)}>View Resume</button>
                    </div>
                ))
            }
        </div>}
        </>
  )
}
