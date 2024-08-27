import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const res = NextResponse.next();
  res.headers.set(
    "Access-Control-Allow-Origin",
    "https://www.danieldentondev.com"
  );
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
