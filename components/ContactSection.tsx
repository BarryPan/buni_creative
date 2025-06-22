'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, email, message }),
    });

    if (res.ok) {
      setStatus('Email sent!');
      setFullName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Failed to send.');
    }
  };

  return (
    <section className="bg-[#312F37] text-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-[36px] font-semibold mb-4 font-[Montserrat]">Ready to move forward?</h2>
        <p className="mb-10 text-[16px]">
          Whether you're exploring an idea or ready to build, we're here to listen.
          Leave your email and a quick note, and we’ll be in touch.
        </p>

        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col md:flex-row gap-[32px] pb-[32px]">
            <div className="flex-1">
              <label className="block text-[16px] mb-1 text-left font-light">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 text-black text-[16px] bg-white"
                placeholder="Enter name..."
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-[16px] mb-1 text-left font-light">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 text-black text-[16px] bg-white"
                placeholder="Enter email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[16px] mb-1 text-left font-light">Your Message</label>
            <textarea
              className="w-full px-4 py-2 text-black text-[16px] bg-white"
              placeholder="What do you need..."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-[195px] h-[56px] mt-10 px-6 py-2 text-base font-medium font-[Nunito_Sans] text-[18px] text-white bg-[#312F37] border border-white hover:bg-white hover:text-black transition"
          >
            Submit
          </button>

          {status && <p className="text-sm mt-2">{status}</p>}
        </form>

        {/* ⬇️ 加入 LOGO + COPYRIGHT 區塊 */}
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          {/* Logo SVG placeholder */}
          <div className="mb-2">
            <svg width="111" height="30" viewBox="0 0 111 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.33008 18.0576H15.3584C16.5825 17.3789 17.4121 16.0741 17.4121 14.5752C17.4119 12.3774 15.6295 10.5957 13.4316 10.5957H10.5713L10.9443 8.60645H13.4316C16.7285 8.60645 19.4012 11.2785 19.4014 14.5752C19.4014 16.2899 18.6773 17.835 17.5195 18.9238C19.2441 19.9705 20.3965 21.8656 20.3965 24.0303C20.3965 27.2438 17.8574 29.8637 14.6758 29.9941V29.9971H14.6064C14.5469 29.9988 14.4867 30 14.4268 30V29.9971H3.97949L8.20801 8.60645H10.1982L8.33008 18.0576ZM35.168 14.4746C36.5822 13.4648 38.3161 12.8682 40.1914 12.8682C44.9477 12.8682 48.8032 16.6939 48.8037 21.4131C48.8037 26.1327 44.948 29.96 40.1914 29.96C35.4349 29.9598 31.5791 26.1326 31.5791 21.4131V8.5957H35.168V14.4746ZM59.5703 21.4131C59.5703 24.166 61.8193 26.3991 64.5938 26.3994C67.3685 26.3994 69.6191 24.1662 69.6191 21.4131V13.5801H73.207V21.4131C73.207 26.1327 69.3501 29.96 64.5938 29.96C59.8374 29.9597 55.9814 26.1325 55.9814 21.4131V13.5801H59.5703V21.4131ZM88.9971 13.2246C93.7532 13.2249 97.6094 17.051 97.6094 21.7705V29.6035H94.0215V21.7705C94.0215 19.0175 91.7716 16.7844 88.9971 16.7842C86.2225 16.7843 83.9727 19.0175 83.9727 21.7705V29.6035H80.3838V21.7705C80.3838 17.051 84.2408 13.2247 88.9971 13.2246ZM109.667 29.6035H106.078V13.5801H109.667V29.6035ZM1.74121 25.5195C2.70275 25.5196 3.48231 26.2992 3.48242 27.2607C3.48242 28.2223 2.70282 29.0019 1.74121 29.002C0.779586 29.002 0 28.2223 0 27.2607C0.000111665 26.2992 0.779655 25.5195 1.74121 25.5195ZM13.6768 23.0234C13.7359 23.0277 13.7958 23.0348 13.8555 23.0479C14.526 23.1948 14.9511 23.8577 14.8047 24.5283C14.6578 25.1992 13.9942 25.6243 13.3232 25.4775C13.2635 25.4645 13.206 25.4457 13.1504 25.4248L12.9355 26.4033C12.9925 26.4206 13.0512 26.4363 13.1104 26.4492C14.3181 26.7137 15.5119 25.949 15.7764 24.7412C16.0404 23.5338 15.2758 22.3407 14.0684 22.0762C14.0091 22.0632 13.9497 22.053 13.8906 22.0449L13.6768 23.0234ZM40.1914 16.4287C37.4172 16.4289 35.1684 18.6605 35.168 21.4131C35.168 24.1661 37.4169 26.3992 40.1914 26.3994C42.9661 26.3994 45.2158 24.1662 45.2158 21.4131C45.2153 18.6604 42.9658 16.4287 40.1914 16.4287ZM13.9297 13.083C14.4791 13.0832 14.9248 13.5287 14.9248 14.0781C14.9248 14.6275 14.4791 15.0731 13.9297 15.0732C13.3802 15.0732 12.9346 14.6276 12.9346 14.0781C12.9346 13.5286 13.3802 13.083 13.9297 13.083ZM107.873 7.52734C109.26 7.52748 110.385 8.64314 110.385 10.0195C110.385 11.396 109.26 12.5126 107.873 12.5127C106.486 12.5126 105.36 11.396 105.36 10.0195C105.36 8.64312 106.486 7.52744 107.873 7.52734ZM10.1982 7.95898H8.20801L5.22363 6.4668L4.47754 2.63672H5.47266L10.1982 7.95898ZM13.1836 4.22852L12.6855 7.95898H10.9443L8.85547 5.47168L8.45703 0H9.45215L13.1836 4.22852Z" fill="white"/>
              </svg>
          </div>
          <p className="text-[12px]">©2025 Buni Creative Studio</p>
        </div>
      </div>
    </section>
  );
}
