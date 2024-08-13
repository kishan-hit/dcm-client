import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import JobPosting from '../components/JobPosting';
import JobApplications from '../components/JobApplications';
import { getRoles } from '../api/discover';
import Loader from '../components/Loader';

export default function Careers() {
    const [activeTab, setActiveTab] = useState('jobApplications');
    const [jobList, setJobList] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);  // New state for the selected job
    const [loading, setLoading] = useState(false);

    async function fetchJobs() {
        setLoading(true)
        const list = await getRoles();
        setJobList(list);
        setLoading(false)
    }

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleViewApplicants = (job) => {
        setSelectedJob(job);
        setActiveTab('jobApplications');  // Switch to the job applications tab
    };

    return (
        <div className='z-0 tracking-wide md:tracking-wide bg-gray-200'>
            <Navbar page="careers" />
            <div className='mt-[5.8rem]'>
                <div className='section overflow-hidden md:py-8 lg:py-10'>
                    <div className='flex justify-center space-x-4 py-4'>
                        <button
                            className={`px-4 py-2 ${activeTab === 'jobApplications' ? 'bg-orange-600 text-white' : 'bg-white text-orange-600'} rounded`}
                            onClick={() => setActiveTab('jobApplications')}
                        >
                            Job Applications
                        </button>
                        <button
                            className={`px-4 py-2 ${activeTab === 'jobPosting' ? 'bg-orange-600 text-white' : 'bg-white text-orange-600'} rounded`}
                            onClick={() => setActiveTab('jobPosting')}
                        >
                            Post a Job
                        </button>
                    </div>
                    <div className='px-3 md:px-16 lg:px-40 pb-2'>
                        {activeTab === 'jobApplications' && selectedJob &&
                            <JobApplications role={selectedJob.role} setSelectedJob={setSelectedJob} />
                        }
                        {activeTab === 'jobApplications' && !selectedJob &&
                            <>
                                {loading ? <div className='flex items-center justify-center h-[70vh] w-full'>
                                    <Loader /></div> :
                                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

                                        {jobList.map((job, index) => (
                                            <div
                                                key={index}
                                                className='flex flex-col bg-white rounded-lg shadow-lg p-4 space-y-4'
                                            >
                                                <div className='font-bold text-xl'>{job.role}</div>
                                                <div
                                                    className='bg-orange-600 text-white hover:bg-orange-700 px-4 py-2 w-fit cursor-pointer'
                                                    onClick={() => handleViewApplicants(job)}
                                                >
                                                    View Applicants
                                                </div>
                                            </div>
                                        ))}
                                    </div>}
                            </>
                        }
                        {activeTab === 'jobPosting' && <JobPosting />}
                    </div>
                </div>
            </div>
        </div>
    );
}
