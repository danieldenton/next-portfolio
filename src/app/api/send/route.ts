import { Resend } from "resend";
import { NextApiRequest } from "next";


export default async function POST(req: NextApiRequest) {
  const { name, email, message } = req.body;
  const resend = new Resend(process.env.resendKey);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ["danieldentondev@gmail.com"],
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