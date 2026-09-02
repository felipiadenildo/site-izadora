# site-izadora

[English](#english) · [Português](#português)

## English

Personal and academic page for **Dr. Izadora Rhaynna Santos de Menezes**, a chemistry researcher working on photocatalysis and single-atom catalysis.

### Context

This site is separate from the [CatalIza](https://github.com/felipiadenildo/CatalIza) repository. CatalIza is the lab data automation platform, one of Dr. Izadora's projects, while this repository is her personal and academic presence as a researcher. The two should link and reference each other as content, with no code dependency between them.

### Stack

Astro with Tailwind CSS v4, bilingual content (English by default, Portuguese as the alternative), static deploy on GitHub Pages.

See [`PLAN.md`](./PLAN.md) for the development roadmap and progress.

### Development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # serves the production build locally
```

### Structure

```text
/
├── public/              static assets (favicon, photos optimized at build time)
├── src/
│   ├── assets/           original photos (processed by Astro Image)
│   ├── components/       reusable components (.astro)
│   ├── data/              structured bilingual content (bio, timeline, publications, projects)
│   ├── i18n/              UI strings (en/pt) and route helpers
│   ├── layouts/           base layout (head, header, footer)
│   └── pages/
│       ├── en/            English routes (default, no prefix on "/")
│       └── pt/             Portuguese routes (prefixed "/pt/")
└── PLAN.md               development roadmap and checklist
```

---

## Português

Página pessoal e acadêmica da **Dra. Izadora Rhaynna Santos de Menezes**, pesquisadora em química que trabalha com fotocatálise e catálise single-atom.

### Contexto

Este site é separado do repositório [CatalIza](https://github.com/felipiadenildo/CatalIza). CatalIza é a plataforma de automação de dados de laboratório, um dos projetos da Dra. Izadora, enquanto este repositório é a presença pessoal e acadêmica dela como pesquisadora. Os dois devem se linkar e se citar como conteúdo, sem dependência de código entre eles.

### Stack

Astro com Tailwind CSS v4, conteúdo bilíngue (inglês padrão, português como alternativa), deploy estático no GitHub Pages.

Veja [`PLAN.md`](./PLAN.md) para o roteiro de desenvolvimento e progresso.

### Desenvolvimento

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # gera ./dist
npm run preview   # serve o build de produção localmente
```

### Estrutura

```text
/
├── public/              assets estáticos (favicon, fotos otimizadas em build)
├── src/
│   ├── assets/           fotos originais (processadas pelo Astro Image)
│   ├── components/       componentes reutilizáveis (.astro)
│   ├── data/              conteúdo estruturado bilíngue (bio, timeline, publicações, projetos)
│   ├── i18n/              strings de UI (en/pt) e helpers de rota
│   ├── layouts/           layout base (head, header, footer)
│   └── pages/
│       ├── en/            rotas em inglês (padrão, sem prefixo em "/")
│       └── pt/             rotas em português (prefixo "/pt/")
└── PLAN.md               roteiro e checklist de execução
```
