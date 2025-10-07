import React, { useState } from 'react';
import { Helmet } from 'react-helmet';


export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');


    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Please enter your name';
        if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = 'Please enter a valid email';
        if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters';
        setErrors(e);
        return Object.keys(e).length === 0;
    };


    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!validate()) return;
        setSuccess('Thanks — your message has been received. We will reply to support@drip.in shortly.');
        setForm({ name: '', email: '', message: '' });
        setErrors({});
    };


    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
            <Helmet>
                <title>Contact — Drip</title>
                <meta name="description" content="Contact Drip — support@drip.in" />
            </Helmet>


            <h1 className="text-3xl font-bold mb-4">Get in touch</h1>
            <p className="text-gray-300 mb-6">Questions, partnership inquiries or support — drop us a message. Brand Email: <span className="font-medium text-electric">support@drip.in</span></p>


            {success && <div className="mb-4 p-3 rounded-md bg-green-800 text-green-200">{success}</div>}


            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`w-full px-4 py-2 bg-white/3 border rounded-md focus:outline-none ${errors.name ? 'border-red-500' : 'border-white/10'}`} />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>


                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`w-full px-4 py-2 bg-white/3 border rounded-md focus:outline-none ${errors.email ? 'border-red-500' : 'border-white/10'}`} />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>


                <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className={`w-full px-4 py-2 bg-white/3 border rounded-md focus:outline-none ${errors.message ? 'border-red-500' : 'border-white/10'}`} />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>


                <button type="submit" className="px-6 py-3 rounded-md bg-electric text-black font-semibold hover:shadow-lg transition">Send Message</button>
            </form>
        </div>
    );
}