import React from 'react';
import { Helmet } from 'react-helmet';


export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
            <Helmet>
                <title>About — Drip</title>
                <meta name="description" content="Drip is an Indian brand crafting smart, stylish accessories for modern tech users." />
            </Helmet>


            <h1 className="text-3xl font-bold mb-4">About Drip</h1>
            <p className="text-gray-300 mb-4">Drip is an Indian brand crafting smart, stylish accessories for modern tech users. We focus on minimal, premium designs that are built to last. Our vision is to make everyday tech feel personal and beautiful — accessories that work as hard as you do, while elevating your device's look.</p>
            <p className="text-gray-300">Designed for youth and the young-at-heart, Drip blends form and function. We're starting with iPhone chargers and plan to expand into earbuds, power banks, smartwatches and more — all following the same quality-first philosophy.</p>
        </div>
    );
}