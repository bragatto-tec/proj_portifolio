import { NextResponse } from "next/server";
import { buscarProjetoPorSlug } from "@/lib/contentful";

export async function GET(request, { params }) {
  const { slug } = params;
  const projeto = await buscarProjetoPorSlug(slug);

  return NextResponse.json({
    sucesso: true,
    projeto: projeto,
  });
}
