import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast'
import { ToastContainer } from 'react-toastify';


export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(!name) {
            toast.error('Please provide your full name');
            return;
        }

        if(!email){
            toast.error('Please provide your email address');
            return;
        }

        if(!tel){
            toast.error('Please provide your phone number');
            return;
        }

        toast.success('Thanks for reaching out!');
    }
    return (
        <div>
            <div className="relative flex items-center justify-center min-h-[700px] bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {/* Contact Information */}
                        <div className="p-6 bg-gray-100 rounded-lg">
                            <h1 className="text-4xl text-gray-800 font-extrabold">Get in touch:</h1>
                            <p className="text-lg text-gray-600 mt-2">Fill in the form to start a conversation</p>

                            <div className="flex items-center mt-6 text-gray-600">
                                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="ml-4 font-semibold">Acme Inc, Street, State, Postal Code</p>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <p className="ml-4 font-semibold">+44 1234567890</p>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <p className="ml-4 font-semibold">info@acme.org</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded-lg space-y-4">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                onChange={(event) => setName(event.target.value)}
                                className="w-full py-3 px-4 border rounded-lg focus:border-orange-500 focus:outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={(event) => setEmail(event.target.value)}
                                className="w-full py-3 px-4 border rounded-lg focus:border-orange-500 focus:outline-none"
                            />
                            <input
                                type="tel"
                                maxLength={10}
                                name="tel"
                                id="tel"
                                onChange={(event) => setTel(event.target.value)}
                                placeholder="Telephone Number"
                                className="w-full py-3 px-4 border rounded-lg focus:border-orange-500 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="w-full py-3 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-600 transition"
                            >
                                Submit
                            </button>
                            <ToastContainer/>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>

    );
}
