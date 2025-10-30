import { NextResponse } from 'next/server';
import { buscarTodosProjetos } from '@/lib/contentful';

export async function GET() {
    const projetos = await buscarTodosProjetos();
    
    return NextResponse.json({
        sucesso: true,
        projetos: projetos
    });
}