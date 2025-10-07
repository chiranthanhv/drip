import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { SiAmazon, SiFlipkart } from 'react-icons/si';


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric to-sky-600 flex items-center justify-center shadow">
                        <span className="font-bold text-black">D</span>
                    </div>
                    <div>
                        <div className="text-white font-semibold">Drip</div>
                        <div className="text-sm text-gray-400">Charge in Style</div>
                    </div>
                </div>


                <div className="flex items-center gap-4">
                    <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram size={20} /></a>
                    <a href="https://www.amazon.in" target="_blank" rel="noreferrer" className="hover:text-white"><SiAmazon size={20} /></a>
                    <a href="https://www.flipkart.com" target="_blank" rel="noreferrer" className="hover:text-white"><SiFlipkart size={20} /></a>
                </div>


                <div className="text-sm text-gray-500">&copy; 2025 Drip. All Rights Reserved.</div>
            </div>
        </footer>
    );
}