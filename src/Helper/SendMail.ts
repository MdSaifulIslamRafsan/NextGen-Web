import nodemailer from "nodemailer";
import { hashSync } from "bcrypt-ts";
import User from "../models/userModel";

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export const SendEmail = async (
  email: string,
  emailType: string
): Promise<string> => {
  const token = hashSync(email, 10);
  if (emailType === "verify-email") {
    await User.findOneAndUpdate(
      { email },
      {
        verifyToken: token,
        verifyTokenExpiration: Date.now() + 60 * 60 * 10000,
      }
    );
  }

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Verify Your Email Address",
    html: `<div class="bg-gray-50 text-gray-900 p-4">
  <h2 class="text-2xl font-bold text-gray-800 mb-4">Welcome to Our Service!</h2>
  <p class="text-base text-gray-600 mb-6">
    Thank you for signing up. Please verify your email address by clicking the button below:
  </p>
  <a href="${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${token}"
     class="inline-block bg-blue-500 text-white font-medium text-base py-2 px-4 rounded-md text-center">
     Verify Email
  </a>
  <p class="text-sm text-gray-500 mt-6">
    If you did not create an account, you can safely ignore this email.
  </p>
  <p class="text-base text-gray-600">
    Best regards,<br>
    <strong>YourWebsite Team</strong>
  </p>
</div>
`,
  };
  let errorMessage;
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      errorMessage = error.toString();
    } else {
      console.log("Email sent: " + info.response);
      console.log("Email sent successfully"); 
    }
  });
  if (errorMessage) {
    return errorMessage;
  } else {
    return "Email sent successfully";
  }
};
