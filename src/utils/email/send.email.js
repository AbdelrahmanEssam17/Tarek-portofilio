import nodemailer from "nodemailer";

export const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

export const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
  attachments = [],
}) => {
  const transporter = createTransporter();
  const receiverEmail = process.env.RECEIVER_EMAIL || process.env.EMAIL;

  const emailSubject = subject?.trim()
    ? `[Portfolio Contact] ${subject.trim()}`
    : `New Contact Message from ${name}`;

  const htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f1f5f9;
          margin: 0;
          padding: 32px 16px;
          color: #1e293b;
        }

        .container {
          max-width: 620px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }

        .header {
          background-color: #0f172a;
          color: #ffffff;
          padding: 32px 28px;
          text-align: left;
          border-bottom: 4px solid #3b82f6;
        }

        .header h2 {
          margin: 0;
          font-size: 25px;
          line-height: 1.4;
          font-weight: 700;
        }

        .content {
          padding: 30px 28px;
        }

        .field {
          margin-bottom: 24px;
        }

        .field-label {
          font-weight: bold;
          color: #64748b;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .field-value {
          font-size: 15px;
          line-height: 1.7;
          color: #0f172a;
          overflow-wrap: anywhere;
        }

        .field-value strong {
          font-size: 17px;
        }

        .field-value a {
          color: #2563eb;
          text-decoration: none;
        }

        .message-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-left: 4px solid #3b82f6;
          padding: 18px;
          border-radius: 4px 8px 8px 4px;
          white-space: pre-wrap;
          overflow-wrap: anywhere;
          font-size: 15px;
          line-height: 1.8;
          color: #334155;
        }

        .footer {
          background-color: #f8fafc;
          padding: 22px 28px;
          font-size: 12px;
          line-height: 1.8;
          color: #64748b;
          text-align: center;
          border-top: 1px solid #e2e8f0;
        }

        @media only screen and (max-width: 480px) {
          body {
            padding: 12px 8px;
          }

          .header {
            padding: 26px 20px;
          }

          .header h2 {
            font-size: 22px;
          }

          .content {
            padding: 24px 20px;
          }

          .message-box {
            padding: 14px;
          }

          .footer {
            padding: 18px 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Message from Portfolio</h2>
        </div>

        <div class="content">
          <div class="field">
            <div class="field-label">Sender Name</div>
            <div class="field-value"><strong>${name}</strong></div>
          </div>

          <div class="field">
            <div class="field-label">Sender Email</div>
            <div class="field-value">
              <a href="mailto:${email}">${email}</a>
            </div>
          </div>

          <div class="field">
            <div class="field-label">Subject</div>
            <div class="field-value">${subject || "No Subject Provided"}</div>
          </div>

          <div class="field">
            <div class="field-label">Message</div>
            <div class="message-box">${message}</div>
          </div>
        </div>

        <div class="footer">
          Received via Portfolio Contact Form &bull;
          Reply directly to this email to reach
          <strong>${name}</strong> (${email}).
        </div>
      </div>
    </body>
  </html>
  `;

  const info = await transporter.sendMail({
    from: `"${name} (Portfolio)" <${process.env.EMAIL}>`,
    replyTo: email,
    to: receiverEmail,
    subject: emailSubject,
    text: `From: ${name} (${email})\nSubject: ${subject || "No Subject Provided"}\n\nMessage:\n${message}`,
    html: htmlContent,
    attachments,
  });

  return info;
};
