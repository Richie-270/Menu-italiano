"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Home() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

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
                  href="#inicio"
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300 relative group"
                >
                  Inicio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-rrom-green-600 via-white to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-700 hover:text-red-600 transition-colors duration-300 relative group"
                >
                  Menú
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-green-600 via-white to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300 relative group"
                >
                  Contacto
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-rrom-green-600 via-white to-red-600 group-hover:w-full transition-all duration-300"></span>
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
                  href="#inicio"
                  className="block py-2 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Menú
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="block py-2 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Contacto
                </a>
              </li>
              <li>
                <button className="w-full py-3 bg-green-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300">
                  Reservar
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative Italian Flag Line */}
        <div className="h-1 bg-linear-to-r from-green-600 via-white to-red-600"></div>
      </nav>


     
        <p className="font-light text-4xl text-center font-serif underline decoration-green-600 text-gray-600 mt-15">
          Nuestro Menu
        </p>
      

      <main className="w-full max-w-[1200px] mx-auto p-4 sm:p-7 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 mt-10">
          <div className="relative rounded-2xl h-[300px] sm:h-80 transition-transform duration-300 hover:scale-105 overflow-hidden">
            <Image
              src="/food-grid/pasta.jpg"
              className="object-cover rounded-2xl"
              fill
              alt="Pasta italiana"
            />
            <p className="text-white absolute top-3 sm:top-5 left-3 font-bold text-2xl sm:text-3xl drop-shadow-lg">
              Pasta
            </p>
            <Link href="/menu/pasta">
              <button className="px-4 py-2 sm:p-3 rounded-full bg-transparent border-2 text-white absolute bottom-3 right-3 sm:right-5 hover:bg-white hover:text-gray-800 hover:border-white transition-all duration-300 text-sm sm:text-base">
                ver más...
              </button>
            </Link>
          </div>

          <div className="relative rounded-2xl h-[300px] sm:h-80 transition-transform duration-300 hover:scale-105 overflow-hidden">
            <Image
              src="/food-grid/pizza.jpg"
              className="object-cover rounded-2xl"
              fill
              alt="Pizza italiana"
            />
            <p className="text-white absolute top-3 sm:top-5 left-3 font-bold text-2xl sm:text-3xl drop-shadow-lg">
              Pizza
            </p>
            <Link href="/menu/pizza">
              <button className="px-4 py-2 sm:p-3 rounded-full bg-transparent border-2 text-white absolute bottom-3 right-3 sm:right-5 hover:bg-white hover:text-gray-800 hover:border-white transition-all duration-300 text-sm sm:text-base">
                ver más...
              </button>
            </Link>
          </div>

          <div className="relative rounded-2xl h-[300px] sm:h-80 transition-transform duration-300 hover:scale-105 overflow-hidden">
            <Image
              src="/food-grid/antipasti.jpg"
              className="object-cover rounded-2xl"
              fill
              alt="Antipasti"
            />
            <p className="text-white absolute top-3 sm:top-5 left-3 font-bold text-2xl sm:text-3xl drop-shadow-lg">
              Antipasti
            </p>
            <Link href="/menu/antipasti">
              <button className="px-4 py-2 sm:p-3 rounded-full bg-transparent border-2 text-white absolute bottom-3 right-3 sm:right-5 hover:bg-white hover:text-gray-800 hover:border-white transition-all duration-300 text-sm sm:text-base">
                ver más...
              </button>
            </Link>
          </div>

          <div className="relative rounded-2xl h-[300px] sm:h-80 transition-transform duration-300 hover:scale-105 overflow-hidden">
            <Image
              src="/food-grid/secondi-piatti.jpg"
              className="object-cover rounded-2xl"
              fill
              alt="Secondi piatti"
            />
            <p className="text-white absolute top-3 sm:top-5 left-3 font-bold text-2xl sm:text-3xl drop-shadow-lg">
              Secondi Piatti
            </p>
            <Link href="/menu/secondi-piatti">
              <button className="px-4 py-2 sm:p-3 rounded-full bg-transparent border-2 text-white absolute bottom-3 right-3 sm:right-5 hover:bg-white hover:text-gray-800 hover:border-white transition-all duration-300 text-sm sm:text-base">
                ver más...
              </button>
            </Link>
          </div>

          <div className="relative rounded-2xl h-[300px] sm:h-80 transition-transform duration-300 hover:scale-105 overflow-hidden">
            <Image
              src="/food-grid/postre.jpg"
              className="object-cover rounded-2xl"
              fill
              alt="Postres"
            />
            <p className="text-white absolute top-3 sm:top-5 left-3 font-bold text-2xl sm:text-3xl drop-shadow-lg">
              Postres
            </p>
            <Link href="/menu/postres">
              <button className="px-4 py-2 sm:p-3 rounded-full bg-transparent border-2 text-white absolute bottom-3 right-3 sm:right-5 hover:bg-white hover:text-gray-800 hover:border-white transition-all duration-300 text-sm sm:text-base">
                ver más...
              </button>
            </Link>
          </div>

          <div className="relative rounded-2xl h-[300px] sm:h-80 transition-transform duration-300 hover:scale-105 overflow-hidden">
            <Image
              src="/food-grid/bebidas.jpg"
              className="object-cover rounded-2xl"
              fill
              alt="Bebidas"
            />
            <p className="text-white absolute top-3 sm:top-5 left-3 font-bold text-2xl sm:text-3xl drop-shadow-lg">
              Bebidas
            </p>
            <Link href="/menu/bebidas">
              <button className="px-4 py-2 sm:p-3 rounded-full bg-transparent border-2 text-white absolute bottom-3 right-3 sm:right-5 hover:bg-white hover:text-gray-800 hover:border-white transition-all duration-300 text-sm sm:text-base">
                ver más...
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
