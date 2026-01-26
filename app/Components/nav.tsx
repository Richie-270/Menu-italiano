"use client";
import React from 'react'
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Nav() {

    const [isMenuOpen, setMenuOpen] = useState(false);;

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    };

    return (
        <>
            <nav className="w-full bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">

                            <Image
                                src="/food-grid/Logo.png"
                                className="object-fill rounded-xl flex items-center justify-center shadow-lg"
                                width={50}
                                height={50}
                                alt="logo"
                            />

                            <div className="flex flex-col">
                                <span className="text-xl font-serif font-bold text-gray-800">Borcelle</span>
                                <span className="text-xs text-gray-600 italic">Cucina Italiana</span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex space-x-8 text-lg font-medium">
                            <li>
                                <a
                                    href="#menu"
                                    className="text-gray-700 hover:text-red-600 transition-colors duration-300 relative group"
                                >
                                    Menú
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-green-600 via-white to-red-600 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                        </ul>

                        {/* Botón de Reserva Desktop */}
                        <button className="hidden md:block px-6 py-2 bg-green-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            Reservar
                        </button>

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-gray-700 hover:text-green-600 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <ul className="py-4 space-y-4">
                            <li>
                                <a
                                    href="#menu"
                                    className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors text-center duration-200"
                                    onClick={toggleMenu}
                                >
                                    Menú
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Decorative Italian Flag Line */}
                <div className="h-1 bg-linear-to-r from-green-600 via-white to-red-600"></div>
            </nav>
        </>
    )
}
