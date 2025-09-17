import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

// Free email via EmailJS (no server cost). Set env vars on Netlify:
// EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  } as const;

  try {
    const payload = JSON.parse(event.body || "{}");
    const { name, email, message } = payload;
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing fields" }),
      };
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Email service not configured" }),
      };
    }

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: { name, email, message },
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: "Email send failed", details: text }),
      };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (e: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e?.message || "Unknown error" }),
    };
  }
};
