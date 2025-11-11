import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { nome, email, message } = await request.json();

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["bia.bragatto@gmail.com"],
    subject: `Nova Mensagem do Portfólio de ${nome}`,
    text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${message}`,
  });
}
