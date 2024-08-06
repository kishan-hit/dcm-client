import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import JobPosting from '../components/JobPosting';
import JobApplications from '../components/JobApplications';

export default function Careers() {
    const [activeTab, setActiveTab] = useState('jobApplications');
    const [countApp, setCountApp] = useState(0);

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
                            Job Applications ({countApp})
                        </button>
                        <button
                            className={`px-4 py-2 ${activeTab === 'jobPosting' ? 'bg-orange-600 text-white' : 'bg-white text-orange-600'} rounded`}
                            onClick={() => setActiveTab('jobPosting')}
                        >
                            Post a Job
                        </button>
                    </div>
                    <div className='px-3 md:px-16 lg:px-40 pb-2'>
                        {activeTab === 'jobApplications' && <JobApplications setCountApp={setCountApp} />}
                        {activeTab === 'jobPosting' && <JobPosting />}
                    </div>
                </div>
            </div>
        </div>
    );
}
