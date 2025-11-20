import nodemailer from "nodemailer";
import ejs from "ejs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
const __dirname = process.cwd();
console.log(__dirname)

console.log(__dirname)

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function sendContactEmail(
  email: string,
  name: string,
  subject: string,
  phone: string,
  message: string,
  company?: string
) {

   const templatePath = path.join(
    process.cwd(),
    "src",
    "email",
    "templates",
    "sendContactEmail.template.html"
  );
  const mailOption = {
    from: process.env.GMAIL_ADDRESS,
    to: "contact@smartnex.tech",
    subject: "Portfolio Email",
    html: await ejs.renderFile( templatePath, {
      email,
      name,
      subject,
      phone,
      message,
      company
    }),
  };

  try {
    await transporter.sendMail(mailOption);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}