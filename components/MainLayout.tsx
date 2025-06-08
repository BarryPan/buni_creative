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
            <div className="hidden lg:flex flex-1 justify-center">
              <nav className="flex gap-8 text-base font-[Montserrat] font-semibold">
                <Link href="#service">Service</Link>
                <Link href="#gallery">Gallery</Link>
                <Link href="#process">Process</Link>
                <Link href="mailto:panda061325@gmail.com">Contact</Link>
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
            <Link href="#gallery" className="py-2" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="#process" className="py-2" onClick={() => setIsOpen(false)}>Process</Link>
            <Link href="#contact" className="py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
          {children}
      </main>

      {/* Footer (full width) */}
      <footer className="border-t mt-20 py-12">
          <div className="px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-between text-sm text-neutral-700 gap-8">
            {/* Left: Text + Button */}
            <div className="text-center lg:text-left">
              <p className="text-[32px] font-semibold font-[Montserrat] mb-4">
                Ready to move forward? Let’s talk.
              </p>
              <Link href="mailto:panda061325@gmail.com">
                <button className="border border-black px-6 py-2 mt-[2px] text-base font-medium font-[Nunito_Sans] hover:bg-black hover:text-white transition">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Right: Logo + Copyright */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
              {/*<Image src={LogoFooter} alt="Buni logo" />*/}
              <p className="text-xs text-neutral-500 mt-2">©2025 Buni Creative Studio</p>
            </div>
          </div>
      </footer>
    </div>
  );
}
