import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend(process.env.resendKey);

export async function POST(name: string, email: string, message: string) {
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
