import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors"

const resend = new Resend(process.env.resendKey);
const allowedDomains = ["https://danieldentondev.com", "https://www.danieldentondev.com"]

const cors = Cors({
  methods: ["POST"],
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function,
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}


export async function POST(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);
  // res.setHeader(
  //   "Access-Control-Allow-Origin",
  //   allowedDomains
  // );
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
