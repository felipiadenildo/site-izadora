# site-izadora

Página pessoal/acadêmica da **Dra. Izadora Rhaynna Santos de Menezes** — pesquisadora em química (fotocatálise / catálise single-atom).

## Contexto

Este site é separado do repositório [CatalIza](https://github.com/felipiadenildo/CatalIza) — CatalIza é a plataforma/produto de automação de dados de laboratório (um dos projetos da Dra. Izadora), enquanto este repositório é a presença pessoal/acadêmica dela como pesquisadora. Um deve linkar/citar o outro como conteúdo, sem dependência de código entre eles.

## Stack

Astro + Tailwind CSS v4, conteúdo bilíngue (EN padrão / PT-BR), deploy estático (GitHub Pages).

Veja [`PLAN.md`](./PLAN.md) para o roteiro de desenvolvimento e progresso.

## Desenvolvimento

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # gera ./dist
npm run preview   # serve o build de produção localmente
```

## Estrutura

```text
/
├── public/              assets estáticos (favicon, fotos otimizadas em build)
├── src/
│   ├── assets/           fotos originais (processadas pelo Astro Image)
│   ├── components/       componentes reutilizáveis (.astro)
│   ├── data/              conteúdo estruturado bilíngue (bio, timeline, publicações, projetos)
│   ├── i18n/              strings de UI (en/pt) + helpers de rota
│   ├── layouts/           layout base (head, header, footer)
│   └── pages/
│       ├── en/            rotas em inglês (padrão, sem prefixo em "/")
│       └── pt/             rotas em português (prefixo "/pt/")
└── PLAN.md               roteiro e checklist de execução
```
