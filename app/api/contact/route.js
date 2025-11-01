import nodemailer from "nodemailer";
import { Document, Packer, Paragraph, TextRun } from "docx";
import fs from "fs";
import path from "path";
import os from "os";

export async function POST(request) {
  const data = await request.json();

  try {
    // 🧾 1. Create a Word document (.docx)
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [new TextRun({ text: "WHOLESALES APLICATION", bold: true, size: 28 })],
            }),
            new Paragraph({ text: " " }),
            ...Object.entries(data).map(([key, value]) =>
              new Paragraph({
                children: [
                  new TextRun({ text: `${key}: `, bold: true }),
                  new TextRun(value ? value.toString() : "—"),
                ],
              })
            ),
          ],
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);
    const tempDir = os.tmpdir();                 // built-in OS temp folder
    const filePath = path.join(tempDir, `inquiry-${Date.now()}.docx`);
    fs.writeFileSync(filePath, buffer)

    // 📧 2. Configure your GoDaddy SMTP
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    // ✉️ 3. Compose the email
    const mailOptions = {
      from: `"Lulu & Remi Contact" <${process.env.EMAIL_USER}>`,
      to: "admin@lulunremi.com",
      subject: `📄 WHOLESALES APLICATION from ${data.name || data.businessName || "Unknown"}`,
      text: `
You’ve received a new form submission on Lulu & Remi.

Fields:
${Object.entries(data)
  .map(([key, value]) => `${key}: ${value || "—"}`)
  .join("\n")}
      `,
      attachments: [
        {
          filename: "inquiry.docx",
          path: filePath,
        },
      ],
    };

    // 🚀 4. Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send message." }),
      { status: 500 }
    );
  }
}
