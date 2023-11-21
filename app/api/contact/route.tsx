import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., 'Gmail'
  auth: {
    user: "himanshushahi0478@gmail.com",
    pass: process.env.MY_PASSWORD,
  },
});

export async function POST(req:NextRequest) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) {
    return NextResponse.json({
      success: false,
      message: "All Field Are Required",
    });
  }

  const mailOptions = {
    from: `${name} <${email}>`,
    to: "himanshushahi0478@gmail.com",
    subject: "Message From Web Scraper",
    html: `
        <p style="color: #555; font-size: 16px; margin-bottom: 10px;">
         <strong>Name:</strong> ${name}
        </p>
        <p style="color: #555; font-size: 16px; margin-bottom: 10px;">
        <strong>Email:</strong> ${email}
        </p>
        <p style="color: #555; font-size: 16px;"><strong>Message:</strong>${message}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error Sending Message",
      },
      { status: 400 }
    );
  }
}
