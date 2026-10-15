import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      job,
      company,
      city,
      details,
      description,
      service,
      budget,
      source = "website-inquiry",
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const inquiryDetails = details || description || "No detailed message provided.";
    const roleOrCompany = job || company || "Not specified";
    const location = city || "Not specified";
    const selectedService = service || "General Website / Software";
    const estimatedBudget = budget || "To be discussed";
    const timestamp = new Date().toISOString();

    // 1. Always record inquiries locally so NO inquiry is ever lost
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, "inquiries.json");
      let existingInquiries = [];
      if (fs.existsSync(filePath)) {
        try {
          const fileData = fs.readFileSync(filePath, "utf-8");
          existingInquiries = JSON.parse(fileData);
        } catch {
          existingInquiries = [];
        }
      }
      existingInquiries.push({
        id: `inq_${Date.now()}`,
        timestamp,
        name,
        email,
        roleOrCompany,
        location,
        selectedService,
        estimatedBudget,
        details: inquiryDetails,
        source,
      });
      fs.writeFileSync(filePath, JSON.stringify(existingInquiries, null, 2), "utf-8");
      console.log(`[INQUIRY RECORDED] New lead from ${name} (${email}) saved to data/inquiries.json`);
    } catch (fsErr) {
      console.warn("Could not write inquiry to local file:", fsErr);
    }

    // 2. Check for Gmail SMTP Environment Variables
    const gmailUser = process.env.GMAIL_USER || process.env.SMTP_EMAIL;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD;
    const recipientEmail =
      process.env.NOTIFICATION_EMAIL ||
      gmailUser ||
      "hello.aspirev@gmail.com";

    // If Gmail credentials are provided, send live email via Nodemailer
    if (gmailUser && gmailAppPassword) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF9F5; margin: 0; padding: 24px; color: #10221E; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; border: 1px solid #E5E0D5; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
            .header { background: #1A3E38; padding: 24px 32px; color: #ffffff; }
            .badge { display: inline-block; background: rgba(163, 229, 212, 0.2); border: 1px solid #A3E5D4; color: #A3E5D4; padding: 4px 12px; border-radius: 999px; font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; }
            .title { font-size: 20px; font-weight: 700; margin: 12px 0 4px; color: #ffffff; }
            .subtitle { font-size: 13px; color: #D2EAE3; margin: 0; }
            .content { padding: 32px; }
            .lead-row { margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #EFECE6; }
            .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #526E65; margin-bottom: 4px; }
            .value { font-size: 15px; font-weight: 600; color: #10221E; }
            .message-box { background: #FAF9F5; border: 1px solid #E5E0D5; border-radius: 12px; padding: 18px; margin-top: 20px; font-size: 14px; line-height: 1.6; color: #3E534D; }
            .footer { padding: 20px 32px; background: #FAF9F5; border-top: 1px solid #E5E0D5; font-size: 12px; color: #7A9E96; text-align: center; }
            .btn { display: inline-block; background: #1A3E38; color: #ffffff !important; padding: 12px 24px; border-radius: 999px; text-decoration: none; font-weight: 600; font-size: 13px; margin-top: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <span class="badge">[ New Project Inquiry ]</span>
              <h1 class="title">Aspirev Technologies Intake</h1>
              <p class="subtitle">Direct submission from ${source}</p>
            </div>
            <div class="content">
              <div class="lead-row">
                <div class="label">Client Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="lead-row">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #1A3E38;">${email}</a></div>
              </div>
              <div class="lead-row">
                <div class="label">Role / Company</div>
                <div class="value">${roleOrCompany}</div>
              </div>
              <div class="lead-row">
                <div class="label">Location</div>
                <div class="value">${location}</div>
              </div>
              <div class="lead-row">
                <div class="label">Service Interest & Budget</div>
                <div class="value">${selectedService} · ${estimatedBudget}</div>
              </div>
              <div>
                <div class="label">Project Scope & Requirements</div>
                <div class="message-box">
                  ${inquiryDetails.replace(/\n/g, "<br/>")}
                </div>
              </div>
              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${email}?subject=Re:%20Aspirev%20Technologies%20Project%20Discovery%20-%20${encodeURIComponent(name)}" class="btn">
                  Reply Directly to ${name}
                </a>
              </div>
            </div>
            <div class="footer">
              Aspirev Technologies · Sent automatically from aspirev.com<br/>
              Lead captured at ${timestamp}
            </div>
          </div>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: `"Aspirev Inquiries" <${gmailUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `[New Inquiry] ${name} - ${selectedService}`,
        html: htmlContent,
      });

      console.log(`[EMAIL DISPATCHED] Successfully sent email to ${recipientEmail}`);

      return NextResponse.json({
        success: true,
        emailSent: true,
        message: "Inquiry successfully delivered to your Gmail.",
      });
    }

    // If Gmail credentials are not configured yet, record safely and return clear status
    return NextResponse.json({
      success: true,
      emailSent: false,
      isConfigured: false,
      message:
        "Inquiry received and logged to data/inquiries.json. To deliver directly to your Gmail inbox, add GMAIL_USER and GMAIL_APP_PASSWORD to .env.local.",
    });
  } catch (error: any) {
    console.error("Error handling contact inquiry:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry.", details: error?.message },
      { status: 500 }
    );
  }
}
