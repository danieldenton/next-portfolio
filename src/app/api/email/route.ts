import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.resendKey);

export async function POST(req: NextRequest) {
  const res = NextResponse.next(); // Create a response object for setting headers
  res.headers.set("Access-Control-Allow-Origin", "https://danieldentondev.com")
  res.headers.set("Access-Control-Allow-Methods", "POST");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  const { name, email, message } = await req.json()
  try {
    const { data, error } = await resend.emails.send({
      from: "Daniel <danie@danieldentondev.com>",
      to: "ME <danieldentondev@gmail.com>",
      subject: `Portfolio Message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
