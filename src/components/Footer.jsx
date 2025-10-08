import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { SiAmazon, SiFlipkart } from 'react-icons/si';
import dripLogo from '../assets/drip-logo.png'; // ✅ import your logo

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* ===== LOGO + BRAND TEXT ===== */}
                <div className="flex items-center gap-4 text-center md:text-left">
                    <img
                        src={dripLogo}
                        alt="Drip Logo"
                        className="object-contain"
                        style={{
                            height: '80px', 
                            width: 'auto',
                            maxHeight: '80px',
                        }}
                    />
                    <div>
                        <div className="text-white font-semibold text-lg logo">Drip</div>
                        <div className="text-sm text-gray-400">Charge in Style</div>
                    </div>
                </div>

                {/* ===== SOCIAL ICONS ===== */}
                <div className="flex items-center gap-5">
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="hover:text-electric transition"
                    >
                        <FaInstagram size={22} />
                    </a>
                    <a
                        href="https://www.amazon.in"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Amazon"
                        className="hover:text-electric transition"
                    >
                        <SiAmazon size={22} />
                    </a>
                    <a
                        href="https://www.flipkart.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Flipkart"
                        className="hover:text-electric transition"
                    >
                        <SiFlipkart size={22} />
                    </a>
                </div>

                {/* ===== COPYRIGHT + DEVELOPER INFO ===== */}
                <div className="text-sm text-gray-500 text-center md:text-right space-y-1">
                    <div>&copy; {new Date().getFullYear()} <span className="text-electric">Drip</span>. All Rights Reserved.</div>
                    <div>Owned by: Chiranthan Enterprises, S1 Second Floor, #3 Jashwik, Ashritha Nest, Manasi Nagara, Mysore, KA, IN 510019</div>
                    <div>Website Developed by: <a href="https://venthancs.com" target="_blank" rel="noreferrer" className="text-electric hover:underline">Venthan Consultancy Services</a></div>
                </div>
            </div>
        </footer>
    );
}
