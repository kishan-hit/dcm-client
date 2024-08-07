import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if(password !== cpassword){
            toast.error("Password didn't match" )
            return;
        }

        try {
            setLoading(true)
            await axios.post('http://localhost:8080/auth/register', { name, email, password });
            setLoading(false)
            setIsOtpSent(true);
            setError('');
        } catch (err) {
            setLoading(false)
            setError(err.response.data.message);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();

        try {
            setLoading(true)
            await axios.post('http://localhost:8080/auth/verify-otp', { email, otp });
            setLoading(false)
            navigate('/login');
        } catch (err) {
            setLoading(false)
            setError(err.response.data.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Toaster />
            {!isOtpSent ? (
                <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold mb-4">Register</h2>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded"
                            value={cpassword}
                            onChange={(e) => setcPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
                        {loading? "Register..." : "Register"}
                    </button>
                </form>
            ) : (
                <form onSubmit={handleVerifyOtp} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="mb-4">
                        <label className="block text-gray-700">OTP</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
                        {loading ? "Verifying..." : "Verify OTP"}
                    </button>
                </form>
            )}
        </div>
    );
}

export default Signup;
