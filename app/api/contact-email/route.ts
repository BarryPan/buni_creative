import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { fullName, email, message } = await req.json();
  console.log(process.env.SMTP_USER)
  console.log('Hello')
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.SMTP_USER, // e.g. yourcompany@gmail.com
      pass: process.env.SMTP_PASS, // your App password from Gmail
    },
  });

  const mailOptions = {
    from: `"Buni Creative Studio" <${process.env.SMTP_USER}>`,
    to: email,
    cc: process.env.SMTP_USER,
    subject: 'Thank you for reaching out to Buni Creative Studio',
    text: `Hi ${fullName},

We have received your message. We will try to get back to you as soon as possible. During the time, please feel free to reply back to this email if you have any question.

--------
Origin Message
User Full Name: ${fullName}
Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send failed:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
