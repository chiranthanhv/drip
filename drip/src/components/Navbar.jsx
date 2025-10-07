import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const links = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
    ];


    return (
        <nav className="bg-black/80 backdrop-blur-sm sticky top-0 z-40">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric to-sky-600 flex items-center justify-center shadow-lg">
                            <span className="font-bold text-black">D</span>
                        </div>
                        <span className="text-xl font-semibold logo">Drip</span>
                    </Link>


                    <div className="hidden md:flex items-center gap-6">
                        {links.map(l => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                className={({ isActive }) => `text-sm font-medium hover:text-electric transition ${isActive ? 'text-electric' : ''}`}
                            >
                                {l.label}
                            </NavLink>
                        ))}


                        <a href="https://www.amazon.in/s?k=iphone+charger" target="_blank" rel="noreferrer" className="ml-4 inline-block px-4 py-2 rounded-md bg-electric/10 border border-electric text-electric hover:bg-electric hover:text-black transition">
                            Shop Now
                        </a>
                    </div>


                    <div className="md:hidden">
                        <button onClick={() => setOpen(s => !s)} aria-label="Menu" className="p-2 rounded-md">
                            {open ? <FiX size={22} /> : <FiMenu size={22} />}
                        </button>
                    </div>
                </div>
            </div>


            {open && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="md:hidden px-4 pb-4">
                    <div className="flex flex-col gap-3">
                        {links.map(l => (
                            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="block text-white/90 p-2 rounded-md hover:bg-white/5">
                                {l.label}
                            </NavLink>
                        ))}
                        <a href="https://www.amazon.in/s?k=iphone+charger" target="_blank" rel="noreferrer" className="block text-center px-4 py-2 mt-2 rounded-md bg-electric/10 border border-electric text-electric hover:bg-electric hover:text-black transition">
                            Shop Now
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}