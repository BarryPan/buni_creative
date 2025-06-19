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
    <section className="bg-[#2B2A30] text-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-[36px] font-semibold mb-4 font-[Montserrat]">Ready to move forward?</h2>
        <p className="mb-10 text-[16px] text-gray-300">
          Whether you're exploring an idea or ready to build, we're here to listen.
          Leave your email and a quick note, and we’ll be in touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
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
            className="border px-8 py-2 mt-4 hover:bg-white hover:text-black transition"
          >
            Submit
          </button>

          {status && <p className="text-sm mt-2">{status}</p>}
        </form>
      </div>

    </section>
  );
}
