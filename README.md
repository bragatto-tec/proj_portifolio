# Portfólio - Beatriz Bragatto

## 📋 Sobre o Projeto

Este é um portfólio pessoal desenvolvido com **Next.js 15** para gerenciamento de conteúdo dinâmico dos projetos.

## 🏗️ Arquitetura do Projeto

Dentro de `app/` representa uma rota do site. Temos páginas principais (home, portfólio, contato), páginas dinâmicas para projetos individuais e rotas de API que fazem a interligação com o Contentful.

A pasta `lib/` contém as funções de integração com o Contentful.

## 🔄 Rotas de API

### Rota de Listagem de Projetos
Fica em `/api/projetos`, esta rota é responsável por buscar todos os projetos do Contentful e retornar em formato JSON. Quando a página de portfólio é carregada, ela busca nesta API.

### Rota de Projeto Individual
Fica em `/api/projetos/[slug]`, esta rota recebe um identificador (slug) e busca apenas aquele projeto específico no Contentful.

### Funções de Busca

**Buscar Todos os Projetos** - Consulta o Contentful e retorna todos os itens do tipo "projeto1", que é como o conteúdo está organizado no CMS.

**Buscar Projeto por Slug** - Pesquisa um projeto específico usando o campo slug como filtro, retornando apenas um resultado.

## 🔧 Variáveis de Ambiente

O arquivo `.env.local` armazena as credenciais do Contentful de forma segura na raiz do projeto. Essas variáveis são acessadas pelo código mas nunca são expostas publicamente.


## 🔄 Comparação: Projeto 1 vs Projeto 2 

#### **1. Renderização**
- **Projeto 1:** Páginas estáticas carregadas diretamente do servidor
- **Projeto 2:** Combina Server Components (renderizados no servidor) e Client Components (interativos no navegador)

#### **2. Dados**
- **Projeto 1:** Hardcoded - dados escritos diretamente no HTML
- **Projeto 2:** Dinâmicos - dados buscados de uma API que consulta o CMS

#### **3. Roteamento**
- **Projeto 1:** Cada página é um arquivo físico (portifolio.html, projeto1.html)
- **Projeto 2:** Rotas automáticas baseadas na estrutura de pastas + rotas dinâmicas com parâmetros

#### **4. Componentes**
- **Projeto 1:** Não existe o conceito - código HTML se repete em múltiplos arquivos
- **Projeto 2:** Componentes React reutilizáveis - escreve uma vez, usa em qualquer lugar

#### **5. Estado e Interatividade**
- **Projeto 1:** Manipulação direta do DOM com JavaScript vanilla
- **Projeto 2:** Sistema de estado gerenciado com React hooks (useState, useEffect)

#### **6. API**
- **Projeto 1:** Não possui - tudo é estático
- **Projeto 2:** API Routes integradas que comunicam com o Contentful


### 🎯 Evolução

O Projeto 1 representa o ponto de partida - HTML, CSS e JavaScript puro. O Projeto 2 é a evolução natural: usa frameworks, separação de responsabilidades, gerenciamento de estado e integração com serviços externos.

A transição do Projeto 1 para o Projeto 2 mostra crescimento pois saiu de páginas estáticas com conteúdo fixo para uma aplicação dinâmica com gerenciamento de conteúdo, rotas automáticas e componentes reutilizáveis.


