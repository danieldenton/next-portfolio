import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend(process.env.resendKey);

interface req {
  name: string;
  email: string;
  message: string;
}

export async function POST({
  name,
  email,
  message
}: req) {
  try {
    const { data, error } = await resend.emails.send({
      from: email,
      to: ["danieldentondev@gmail.com"],
      subject: "PORTFOLIO MESSAGE",
      html: `from: ${name}<br>${message}`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
