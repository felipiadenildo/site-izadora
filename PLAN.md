# Plano de execução — site-izadora

Roteiro e checklist do desenvolvimento do site pessoal/acadêmico da Dra. Izadora Rhaynna Santos de Menezes. Atualizado a cada marco; cada fase concluída vira um commit.

## Contexto e decisões já tomadas

- **Stack**: Astro + Tailwind CSS v4, sem framework de UI (componentes `.astro` puros).
- **Idiomas**: inglês como padrão (`/`), português em `/pt/*`. Slugs de rota em inglês nas duas versões (`/about`, `/pt/about`) para simplificar o roteamento i18n do Astro.
- **Hospedagem**: GitHub Pages para começar (grátis, já versionado); migração futura para Cloudflare Pages/Netlify é trivial pois o output é estático.
- **Tom**: sóbrio/moderno como base, com humor leve e "fofura" com tema de química/ciência em microcopy, placeholders e alguns detalhes visuais — sem comprometer a seriedade acadêmica do conteúdo factual.
- **Dados reais**: currículo/trajetória via ORCID (0000-0003-1820-5410), FAPESP, projeto de pós-doc (bolsa 20/14741-6). 3 fotos reais fornecidas (ver `src/assets/photos/`). Sem CV em PDF público e sem foto de "media kit" formal — placeholders explícitos até serem enviados.
- **Conteúdo narrativo (bios, textos de seção)**: redigido a partir de fontes públicas, em terceira pessoa — deve ser revisado/personalizado pela própria Izadora antes de publicação definitiva.
- **Fotos reais**: 3 fotos enviadas pelo usuário foram integradas — jaleco no Sirius/LNLS (hero + destaque em Pesquisa/Jornada), foto casual (About) e foto com kufia (avatar circular na Jornada).
- **E-mail de contato**: não encontrado publicamente; `person.email` fica `null` de propósito e a página de Contato mostra um placeholder em vez de arriscar publicar um endereço errado.
- **Dark mode**: removido do CSS por ora — a versão automática via `prefers-color-scheme` tinha problemas reais de contraste (texto petrol-900 sobre fundo escuro) porque nem todo uso semântico de cor tinha uma contraparte escura. Fica como melhoria futura, feita com o devido cuidado (tokens semânticos + toggle manual), não como media query solta.

## Fases

### Fase 0 — Setup do projeto
- [x] Pesquisa (sites acadêmicos, presença online, práticas de UX)
- [x] Scaffold Astro (`minimal` template) + Tailwind v4 + sitemap
- [x] README.md e PLAN.md
- [x] Design tokens (paleta, tipografia) em `src/styles/global.css` (`@theme`)
- [x] i18n config no `astro.config.mjs` + estrutura de rotas (EN na raiz de `src/pages/`, PT em `src/pages/pt/`)

### Fase 1 — Fundação (layout e navegação)
- [x] `BaseLayout.astro` (head, meta, lang, OG tags)
- [x] `Header.astro` (nav + troca de idioma, menu mobile) e `Footer.astro`
- [x] Componente `UnderConstruction.astro` (placeholder com humor científico, reutilizável)
- [x] Estilos globais, escala tipográfica, tema claro (dark mode adiado — ver nota acima)

### Fase 2 — Conteúdo estruturado
- [x] `src/data/publications.ts` (6 publicações via ORCID, com DOIs reais)
- [x] `src/data/timeline.ts` (jornada CEFET-MG → UFMG → Argentina → Reino Unido → Japão → UFSCar)
- [x] `src/data/person.ts` (fatos, CatalIza, interesses de pesquisa)
- [x] `src/i18n/ui.ts` strings de UI (en/pt)
- [x] Fotos processadas em `src/assets/photos/` (otimizadas automaticamente pelo Astro Image em build)

### Fase 3 — Páginas (EN e PT)
- [x] Home
- [x] About / Sobre
- [x] Journey / Jornada (timeline visual) — não está no nav principal (evitar poluição); acessível via card na Home e link em About
- [x] Research / Pesquisa
- [x] Publications / Publicações
- [x] Projects / Projetos
- [x] Contact / Contato
- [x] 404 (com humor, bilíngue)

### Fase 4 — Qualidade
- [x] `npm run build` sem erros, `astro check` sem erros/avisos
- [x] Revisão visual local via browser (dev server) — todas as páginas em EN e PT, desktop
- [ ] Revisão visual em mobile real (tentativa via automação não confirmou viewport — recomenda-se um teste manual rápido num celular ou DevTools)
- [x] Acessibilidade básica: skip-link, `alt` em todas as imagens, foco visível, `aria-current` no nav
- [x] SEO básico: sitemap (`@astrojs/sitemap`), meta description por página, canonical, Open Graph
- [ ] OG image dedicada (hoje sem imagem de compartilhamento social)

### Fase 5 — Deploy
- [x] Workflow GitHub Actions (`.github/workflows/deploy.yml`)
- [ ] Confirmar com o usuário antes de criar/push para repositório remoto no GitHub
- [ ] Habilitar GitHub Pages e validar a URL pública

### Fase 6 — Pendências para a Izadora
- [ ] Revisar/ajustar textos de bio (voz em 1ª pessoa onde fizer sentido)
- [ ] Enviar foto de "media kit" formal (opcional, hero atual já usa fotos reais)
- [ ] Enviar CV em PDF (EN/PT) para substituir o placeholder de download
- [ ] Confirmar afiliação atual e projeto em andamento (dados podem mudar)
- [ ] Decidir sobre domínio próprio (ver conversa)
