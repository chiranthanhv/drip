import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { SiAmazon, SiFlipkart } from 'react-icons/si';

// ✅ Import local images
import heroImg from '../assets/heroSection.jpg';
import lightningCharger from '../assets/lightningChargerCable.png';
import cTypeCharger from '../assets/cTypeChargerCable.jpg';

const products = [
    {
        id: 1,
        title: 'iPhone Lightning Charger',
        subtitle: 'Fast, sleek, and MFi certified design',
        price: '₹799',
        img: lightningCharger,
        cta: 'https://www.amazon.in/s?k=iphone+lightning+charger',
    },
    {
        id: 2,
        title: 'iPhone USB-C Charger',
        subtitle: 'High-speed USB-C to Lightning cable',
        price: '₹899',
        img: cTypeCharger,
        cta: 'https://www.amazon.in/s?k=iphone+usb-c+charger',
    },
];

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Drip — Charge in Style | Home</title>
                <meta
                    name="description"
                    content="Drip — stylish iPhone chargers and mobile accessories. Charge in style with premium build."
                />
            </Helmet>

            {/* Hero Section */}
            <header className="bg-gradient-to-b from-black/95 to-black/80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 flex flex-col md:flex-row items-center gap-10">
                    {/* Hero Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <div className="text-electric font-semibold">Drip</div>
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mt-4">
                            Charge in Style. Power that Flows.
                        </h1>
                        <p className="mt-4 text-gray-300 max-w-xl">
                            Premium iPhone chargers crafted for the modern user — sleek, durable and fast. Designed in India for today's tech-savvy generation.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <a
                                href="#products"
                                className="px-6 py-3 rounded-lg bg-electric text-black font-semibold hover:shadow-xl transition"
                            >
                                Shop Now
                            </a>
                            <a
                                href="#available"
                                className="px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition"
                            >
                                Where to Buy
                            </a>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 w-full"
                    >
                        <div className="bg-white/3 border border-white/6 rounded-3xl p-6 shadow-2xl">
                            <img
                                src={heroImg}
                                alt="Drip Charger Hero"
                                className="w-full h-80 sm:h-96 md:h-[400px] object-contain rounded-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Products Section */}
            <section id="products" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
                <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((p) => (
                        <ProductCard key={p.id} {...p} />
                    ))}
                </div>
            </section>

            {/* Available On Section */}
            <section id="available" className="bg-white/2 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-semibold">Available on</h3>
                        <p className="text-gray-300">Find Drip products on India's top marketplaces.</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <a
                            href="https://www.amazon.in"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition"
                        >
                            <SiAmazon size={28} />
                            <span className="hidden sm:inline-block">Amazon</span>
                        </a>
                        <a
                            href="https://www.flipkart.com"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition"
                        >
                            <SiFlipkart size={28} />
                            <span className="hidden sm:inline-block">Flipkart</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
