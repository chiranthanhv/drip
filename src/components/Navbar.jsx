import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import dripLogo from '../assets/drip-logo.png'; // ✅ logo import

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="bg-black/80 backdrop-blur-sm sticky top-0 z-40 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-24">
                    
                    {/* ===== LOGO ===== */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={dripLogo}
                            alt="Drip Logo"
                            className="object-contain"
                            style={{
                                height: '100px',
                                width: 'auto',
                                maxHeight: '100px',
                            }}
                        />
                    </Link>

                    {/* ===== DESKTOP NAV ===== */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((l) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                className={({ isActive }) =>
                                    `text-base font-medium hover:text-electric transition ${
                                        isActive ? 'text-electric' : ''
                                    }`
                                }
                            >
                                {l.label}
                            </NavLink>
                        ))}

                        <a
                            href="https://www.amazon.in/s?k=iphone+charger"
                            target="_blank"
                            rel="noreferrer"
                            className="ml-4 inline-block px-5 py-2 rounded-md bg-electric/10 border border-electric text-electric hover:bg-electric hover:text-black transition"
                        >
                            Shop Now
                        </a>
                    </div>

                    {/* ===== MOBILE MENU TOGGLE ===== */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen((s) => !s)}
                            aria-label="Menu"
                            className="p-2 rounded-md"
                        >
                            {open ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ===== MOBILE MENU ===== */}
            {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="md:hidden px-4 pb-4"
                >
                    <div className="flex flex-col gap-3">
                        {links.map((l) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                onClick={() => setOpen(false)}
                                className="block text-white/90 p-2 rounded-md hover:bg-white/5"
                            >
                                {l.label}
                            </NavLink>
                        ))}
                        <a
                            href="https://www.amazon.in/s?k=iphone+charger"
                            target="_blank"
                            rel="noreferrer"
                            className="block text-center px-4 py-2 mt-2 rounded-md bg-electric/10 border border-electric text-electric hover:bg-electric hover:text-black transition"
                        >
                            Shop Now
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
