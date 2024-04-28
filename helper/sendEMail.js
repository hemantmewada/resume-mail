const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEMail = async (to, subject, text, html) => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.SMTP_USERNAME, // sender address
    // from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
  });
  return info;
  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};
module.exports = sendEMail;
