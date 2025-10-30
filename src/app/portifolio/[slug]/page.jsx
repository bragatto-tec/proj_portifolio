"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "./projeto.module.css";

export default function ProjetoPage() {
  const params = useParams();
  const slug = params.slug;
  const [projeto, setProjeto] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch(`/api/projetos/${slug}`)
        .then((resposta) => resposta.json())
        .then((dados) => {
          if (dados.sucesso) {
            setProjeto(dados.projeto);
          }
          setCarregando(false);
        });
    }
  }, [slug]);

  if (!projeto) {
    return (
      <article className={styles.container}>
        <div style={{ textAlign: "center", padding: "4rem" }}>
          <p>Projeto não encontrado</p>
        </div>
      </article>
    );
  }

  const titulo = projeto.fields?.Titulo || projeto.fields?.titulo;
  const paragrafo1 =
    projeto.fields?.["Paragrafo 1"] || projeto.fields?.paragrafo1;
  const paragrafo2 =
    projeto.fields?.["Paragrafo 2"] || projeto.fields?.paragrafo2;
  const imagemUrl = projeto.fields?.imagemDestaque?.fields?.file?.url;

  return (
    <article className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.images}>
          {imagemUrl && <img src={`https:${imagemUrl}`} alt={titulo} />}
        </div>

        <div className={styles.desc}>
          <h1>{titulo}</h1>
          <hr className={styles.neon} />
          <p>{paragrafo1}</p>
          <p>{paragrafo2}</p>
        </div>
      </div>
    </article>
  );
}
