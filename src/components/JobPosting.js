import React, { useState } from 'react'
import { postJob } from '../api/discover';
import toast, { Toaster } from 'react-hot-toast';


export default function JobPosting() {
    const [role, setRole] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    async function handlePostJob(){
        if(!role || !description){
            toast.error('Job must have role and description');
            return;
        }
        setLoading(true);
        const res = await postJob({role,description});
        if(res.success){
            toast.success('Job posted');
            setRole('');
            setDescription('');
        }else {
            toast.error("Failed to post job. Please try again.");
        }
        setLoading(false);
    }
  return (
    <div className='p-4 bg-white shadow-lg rounded-lg'>
            <Toaster />
            <h2 className='text-2xl font-semibold mb-4'>Post a Job</h2>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='role'>Role</label>
                <input
                    type='text'
                    id='role'
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>Description</label>
                <textarea
                    id='description'
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button
                className='bg-orange-600 text-white hover:bg-orange-700 px-4 py-2 rounded'
                onClick={handlePostJob}disabled={loading}>
                                    {loading ? "Submitting..." : "Submit"}
            </button>
        </div>
  )
}
