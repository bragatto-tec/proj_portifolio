import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function buscarTodosProjetos() {
  const resposta = await client.getEntries({
    content_type: "projeto1",
  });

  return resposta.items;
}

export async function buscarProjetoPorSlug(slug) {
  const resposta = await client.getEntries({
    content_type: "projeto1",
    "fields.slug": slug,
    limit: 1,
  });

  if (resposta.items.length === 0) {
    return null;
  }

  return resposta.items[0];
}
