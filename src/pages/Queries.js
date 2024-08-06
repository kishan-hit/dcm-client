import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import { getQueries } from '../api/discover';

export default function Queries() {
    const [customerQueries, setCustomerQueries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedQuery, setSelectedQuery] = useState(null);

    const handleViewClick = (query) => {
        setSelectedQuery(query);
    };

    const handleCloseModal = () => {
        setSelectedQuery(null);
    };

    async function fetchQueries(){
        setLoading(true);
        const queries = await getQueries();
        setLoading(false);
        setCustomerQueries(queries);
    }

    useEffect(()=>{
        fetchQueries();
    },[])

    return (
        <div className='z-0 tracking-wide md:tracking-wide bg-gray-200'>
            <Navbar page="queries" />
            <div className='mt-[5.8rem]'>
                <div className='section py-4 md:py-8 lg:py-10 overflow-hidden'>
                    <div className='flex justify-between py-2 px-3 md:px-16 lg:px-40 font-semibold text-2xl'>
                        <div className=''>Customer Queries</div>
                        <div className='text-gray-500'>Total Queries: <span className='text-orange-600'>{customerQueries.length}</span></div>
                    </div>
                    <div className='rounded-lg w-full px-3 md:px-16 lg:px-40 flex flex-col gap-2 h-[80vh] md:h-[70vh] overflow-auto'>
                        {loading ? (
                            <div className='flex items-center justify-center h-[70vh]'>
                                <Loader />
                            </div>
                        ) : (
                            customerQueries.map((query, index) => (
                                <div className='p-2 w-full flex justify-between items-center gap-6 shadow-lg bg-white rounded-lg' key={index}>
                                    <div className='flex flex-col justify-center items-start'>
                                        <div className='text-xl'>{query.name}</div>
                                        <div className='text-base text-gray-500'>{query.query.slice(0,70)+'...'}</div>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <button
                                            onClick={() => handleViewClick(query)}
                                            className='bg-orange-600 text-white hover:bg-orange-700 text-base px-3 py-2'
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            {selectedQuery && <Modal query={selectedQuery} onClose={handleCloseModal} />}
        </div>
    );
}
