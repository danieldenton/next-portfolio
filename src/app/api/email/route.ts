import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);
const allowedDomains = ["https://danieldentondev.com", "https://www.danieldentondev.com"]

export async function POST(req: any, res: NextApiResponse) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    allowedDomains
  );
  const { name, email, message } = req.body;
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
