import { Resend } from 'resend';
import { EmailTemplate } from '@/app/components/email-template';

const resend = new Resend(process.env.resendKey);

interface IProps {
  name: string
  email: string
  message: string
}

export async function POST(props: IProps) {
  const { name, email, message } = props
  try {
    const { data, error } = await resend.emails.send({
      from: email,
      to: ['danieldentondev@gmail.com'],
      subject: 'Hello world',
      html: `from: ${name} ${email}`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
