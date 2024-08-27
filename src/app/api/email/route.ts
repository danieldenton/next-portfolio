import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.resendKey);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;
  try {
    const { data, error } = await resend.emails.send({
      from: "Daniel <danieldentondev@gmail.com>",
      to: ["danieldentondev@gmail.com@gmail.com"],
      subject: `Portfolio Message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return res.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
