// import { email } from "nodemailer/env.js";
// const email = { email: "lennardj@missionreadyhq.com", password: "Sag27091" };

require("dotenv").config();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const mailOptions = {
  from: `Lennard John ${process.env.EMAIL}`,
  to: "lennardvincentjohn@gmail.com",
  subject: "Exercise color test",
  text: "Plaintext version of the message",
  html: "<body><h1 style='background-color:blue; color:red;'>Testing these colours</h1><button>hi</button></body>",
};

transporter.sendMail(mailOptions);
console.log("Starting");
