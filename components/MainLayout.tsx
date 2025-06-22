'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import LogoTitle from '@/public/logotitle.svg';
import LogoFooter from '@/public/Logo.svg';
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar (full width) */}
      <header className="sticky top-0 z-50 bg-white border-b">
          <div className="h-[88px] px-4 lg:px-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Link href="#home">
                <Image src={LogoTitle} alt="Buni logo" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <nav className="flex gap-8 text-base font-[Montserrat] font-semibold">
                <Link href="#service" className="px-2 py-1 rounded hover:bg-gray-100 transition">Service</Link>
                <Link href="#gallery" className="px-2 py-1 rounded hover:bg-gray-100 transition">Work</Link>
                <Link href="#shapeus" className="px-2 py-1 rounded hover:bg-gray-100 transition">Philosophy</Link>
                <Link href="#process" className="px-2 py-1 rounded hover:bg-gray-100 transition">Process</Link>
                <Link href="#contact" className="px-2 py-1 rounded hover:bg-gray-100 transition">Contact</Link>
              </nav>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden ml-auto">
              <button onClick={() => setIsOpen(!isOpen)}>
                <Bars3Icon className="w-6 h-6" />
              </button>
            </div>
          </div>

        {/* Mobile Menu (overlay dropdown) */}
        {isOpen && (
          <div className="absolute top-[88px] left-0 w-full bg-white shadow-md flex flex-col items-center py-4 z-50 font-mont">
            <Link href="#service" className="py-2" onClick={() => setIsOpen(false)}>Service</Link>
            <Link href="#gallery" className="py-2" onClick={() => setIsOpen(false)}>Work</Link>
            <Link href="#shapeus" className="py-2" onClick={() => setIsOpen(false)}>Philosophy</Link>
            <Link href="#process" className="py-2" onClick={() => setIsOpen(false)}>Process</Link>
            <Link href="#contact" className="py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
          {children}
      </main>

    </div>
  );
}
