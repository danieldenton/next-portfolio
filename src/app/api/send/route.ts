require('dotenv')
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEN_API_KEY);

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'danielmdenton@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});