import React from 'react';
import { motion } from 'framer-motion';


export default function ProductCard({ title, subtitle, price, img, cta }) {
    return (
        <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }} className="card-glow rounded-2xl p-5 shadow-lg flex flex-col items-center text-center">
            <img src={img} alt={title} className="w-full h-44 object-contain mb-4 rounded-md" />
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-300 mb-3">{subtitle}</p>
            <div className="flex gap-2 items-center mb-4">
                <span className="text-electric font-bold">{price}</span>
            </div>
            <a href={cta} target="_blank" rel="noreferrer" className="mt-auto inline-block px-4 py-2 rounded-md bg-electric text-black font-semibold hover:scale-105 transition">
                Buy on Amazon
            </a>
        </motion.div>
    );
}