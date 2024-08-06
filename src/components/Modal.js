import React from 'react';

const Modal = ({ query, onClose }) => {
    if (!query) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Query Details</h2>
                    <button onClick={onClose} className="text-gray-700 hover:text-gray-900 text-3xl">&times;</button>
                </div>
                <div className="mb-4">
                    <p><strong>Name:</strong> {query.name}</p>
                    <p><strong>Email:</strong> {query.email}</p>
                    <p><strong>Contact No:</strong> {query.contactNo}</p>
                    <p><strong>Query:</strong> {query.query}</p>
                </div>
                <button onClick={onClose} className="bg-orange-600 text-white px-4 py-2 hover:bg-orange-700">Close</button>
            </div>
        </div>
    );
};

export default Modal;
