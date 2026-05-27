import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = process.env.CONTACT_TO_EMAIL || "vaultpointsystems@outlook.com";
const FROM = process.env.CONTACT_FROM_EMAIL || "VaultPoint Systems <contact@vaultpoint.systems>";

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "Email service not configured." }, { status: 500 });
  }

  let body: { name?: string; email?: string; message?: string; company?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!name || name.length > 120) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }
  if (message.length < 5 || message.length > 5000) {
    return NextResponse.json({ ok: false, error: "Please enter a message." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const subject = `New contact from ${name}`;
  const text = `From: ${name} <${email}>\n\n${message}`;
  const html = `<p><strong>From:</strong> ${escape(name)} &lt;${escape(email)}&gt;</p><p style="white-space:pre-wrap">${escape(message)}</p>`;

  try {
    const result = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject,
      text,
      html,
    });
    if (result.error) {
      return NextResponse.json({ ok: false, error: "Could not send. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Could not send. Please try again." }, { status: 502 });
  }
}
