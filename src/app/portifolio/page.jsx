"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./portifolio.module.css";

export default function PortifolioPage() {
  const [projetos, setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("/api/projetos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        if (dados.sucesso) {
          setProjetos(dados.projetos);
        }
        setCarregando(false);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll(`.${styles.card}`);
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add(styles.visible);
        }, index * 100);
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [projetos]);

  const projetosValidos = projetos
    .filter((p) => p.fields?.tituloCard && p.fields?.slug)
    .sort((a, b) => {
      const ordemA = a.fields.ordem || 999;
      const ordemB = b.fields.ordem || 999;
      return ordemA - ordemB;
    });

  return (
    <article className={styles.content}>
      <section className={styles.grid}>
        {projetosValidos.map((projeto) => {
          const tituloCard = projeto.fields.tituloCard;
          const slug = projeto.fields.slug;
          const descricao = projeto.fields.descricaoCurta;
          const imagemUrl = projeto.fields.imagemCapa?.fields?.file?.url;

          return (
            <div key={projeto.sys.id} className={styles.card}>
              {imagemUrl && <img src={`https:${imagemUrl}`} alt={tituloCard} />}
              <div className={styles["card-info"]}>
                <h3>{tituloCard}</h3>
                {descricao && <p>{descricao}</p>}
                <Link
                  href={`/portifolio/${slug}`}
                  className={styles["card-link"]}
                >
                  Ver Projeto →
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
}
