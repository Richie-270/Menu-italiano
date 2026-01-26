"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p className="font-light text-4xl text-center font-serif underline decoration-green-600 text-gray-600 mt-15">
        Nuestro Menu
      </p>

      <main className="w-full shadow-2xl max-w-[1200px] mx-auto p-4 sm:p-7 mt-10">
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
            <Link href="/menu/secondiPiatti">
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
