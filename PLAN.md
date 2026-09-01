# Plano de execução — site-izadora

Roteiro e checklist do desenvolvimento do site pessoal/acadêmico da Dra. Izadora Rhaynna Santos de Menezes. Atualizado a cada marco; cada fase concluída vira um commit.

## Contexto e decisões já tomadas

- **Stack**: Astro + Tailwind CSS v4, sem framework de UI (componentes `.astro` puros).
- **Idiomas**: inglês como padrão (`/`), português em `/pt/*`. Slugs de rota em inglês nas duas versões (`/about`, `/pt/about`) para simplificar o roteamento i18n do Astro.
- **Hospedagem**: GitHub Pages para começar (grátis, já versionado); migração futura para Cloudflare Pages/Netlify é trivial pois o output é estático.
- **Tom**: sóbrio/moderno como base, com humor leve e "fofura" com tema de química/ciência em microcopy, placeholders e alguns detalhes visuais — sem comprometer a seriedade acadêmica do conteúdo factual.
- **Dados reais**: currículo/trajetória via ORCID (0000-0003-1820-5410), FAPESP, doutorado atual na UFSCar (bolsa FAPESP vinculada ao auxílio 20/14741-6 do Prof. Ivo Teixeira) e doutorado concluído na Shinshu University (Japão). Sem CV em PDF público e sem e-mail de contato publicado — placeholders explícitos até serem enviados.
- **Conteúdo narrativo (bios, textos de seção)**: redigido a partir de fontes públicas, em terceira pessoa — deve ser revisado/personalizado pela própria Izadora antes de publicação definitiva.
- **Fotos**: 3 fotos reais recebidas (ver `src/assets/photos/`), mas por decisão do usuário (v3) só a foto casual está em uso no momento, só na Home (seção Sobre). As outras duas ficam disponíveis no repositório para quando ele liberar mais fotos.
- **E-mail de contato**: não encontrado publicamente; `person.email` fica `null` de propósito e a página de Contato mostra um placeholder em vez de arriscar publicar um endereço errado.
- **Tema claro/escuro**: sistema de tokens semânticos com os dois modos contrast-checados (WCAG AA) e toggle manual persistido em `localStorage`; escuro é o padrão para quem visita pela 1ª vez. Ver v2/v3 abaixo para o histórico (a 1ª tentativa, só com `prefers-color-scheme`, tinha bugs reais de contraste).
- **Fonte**: Literata (títulos + corpo) + IBM Plex Mono (rótulos pequenos) — ver v3 abaixo.

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

---

## v2 — Redesign (setembro 2026)

Pivot pedido pelo usuário: v1 estava densa demais ("muitos elementos diferentes"). Referências usadas: felipiadenildo.github.io (simplicidade, enxuto) e sites.google.com/view/risashinoda (home organizada como currículo, por blocos). Decisões que **substituem** as da v1:

- **Navegação**: header enxuto — `Home · Journey · Blog` + cluster de utilidades (ícones sociais discretos, alternância EN/PT, alternância de tema ☀️/🌙). As antigas páginas About/Research/Publications/Projects/Contact **deixaram de existir como rotas** — viraram seções da Home, cada uma com um `id` âncora, navegáveis por uma linha de "quick-jump" (estilo `Sobre · Formação · Pesquisa · ...`) logo abaixo do hero. Trade-off assumido: perde-se URL própria por assunto, ganha-se leitura corrida em formato currículo.
- **Home**: hero compacto (local, nome, cargo, uma frase, foto pequena) seguido de blocos no estilo CV — Sobre, Formação, Pesquisa, Publicações, Projetos, Participação & Reconhecimento, Contato — como listas com regra fina entre linhas, sem cards/sombra. "Prêmios" foi renomeado para "Participação & Reconhecimento" por honestidade: não há prêmios formais publicados dela, só atuação/seleções reais (SBQ, ACS, curso CNPEM).
- **Tema claro/escuro real**: sistema de tokens semânticos (`--color-canvas`, `--color-ink`, `--color-ink-muted`, `--color-accent`, `--color-accent-strong`, `--color-on-accent-strong`, `--color-highlight`, `--color-tint`) com par claro/escuro **contrast-checado (WCAG AA)** para cada combinação — ver comentários em `src/styles/global.css`. Alternância manual (não só `prefers-color-scheme`) via `ThemeToggle.astro`, persistida em `localStorage`, aplicada antes do primeiro paint por um script inline em `<head>` (evita flash de tema errado).
- **Paleta**: terracota removida (nunca chegou a ser usada). Só petróleo + âmbar como acento, usados com bem mais parcimônia que na v1.
- **Jornada**: redesenhada como trilha — conector SVG tracejado e curvo entre cada parada (efeito de "caminho de viagem"), ícones de linha desenhados à mão (não emoji, não bandeiras) por tema de cada parada, revelação suave via `IntersectionObserver` ao rolar. A foto com a kufia aparece como uma "polaroid" colada (leve rotação, sombra) só na parada atual — único momento "caderno/adesivo" do site inteiro, deliberadamente.
- **Blog**: página nova, vazia, mesmo tom de humor discreto.
- **Redes sociais**: só ORCID, Google Scholar e ResearchGate (confirmados). Não incluí placeholders reservados para LinkedIn/Instagram — perfis não confirmados publicamente, e a segurança venceu a completude. Se ela quiser, é fácil adicionar depois.
- **Tom de texto**: passei o conteúdo por uma revisão para reduzir metáforas empilhadas e construções "traduzidas" (ex.: cortei o gancho repetido de "carimbo no passaporte", frases tipo "não é X, mas Y"). Mantive humor químico, mas um por vez.

### Fase 7 — Redesign (execução)
- [x] Sistema de tokens semânticos + tema claro/escuro com toggle manual
- [x] `ThemeToggle.astro`, `SocialLinks.astro` (ícones próprios, sem logos de terceiros)
- [x] Header/Footer reconstruídos (nav enxuto)
- [x] Home reconstruída como currículo (hero compacto + quick-jump + blocos)
- [x] Novos dados: `src/data/education.ts`, `src/data/participation.ts`
- [x] Journey redesenhada (trilha SVG, ícones por parada, foto "polaroid", scroll-reveal)
- [x] Blog (estado vazio, EN/PT)
- [x] Remoção das páginas antigas (about/research/publications/projects/contact) e componentes órfãos (`Pill.astro`, `SectionHeading.astro`)
- [x] Passe de naturalização de texto (menos metáfora empilhada, menos "traduções")
- [x] `astro check` + `npm run build` limpos após o redesign
- [x] Revisão visual local via browser: Home (claro/escuro), Journey (claro/escuro), Blog, EN + PT
- [ ] Confirmação visual em viewport mobile real (automação de browser não confirmou o resize — recomendo checar rapidamente no celular ou no DevTools)
- [x] Feedback do usuário — pediu ajustes pontuais, ver v3 abaixo

---

## v3 — Ajustes finos (setembro 2026)

Rodada de feedback pontual sobre o resultado da v2. Decisões confirmadas com o usuário (incluindo comparação ao vivo de fontes/cores via preview local):

- **Fonte**: Literata (títulos + corpo) — trocou Fraunces/Inter. Escolhida entre 5 opções comparadas lado a lado com texto real do site. IBM Plex Mono para rótulos pequenos (local, datas, tags), replicando o padrão da página de referência (felipiadenildo.github.io).
- **Modo claro**: sepia `#F4ECD8` ("papel de carta") — trocou o off-white anterior. Paleta recalculada e recontrastada (WCAG) para o novo tom, incluindo a caixa de placeholder (`--color-tint`) que precisou ficar mais saturada para não se confundir com o fundo.
- **Tema padrão**: escuro para quem visita pela 1ª vez (antes seguia a preferência do sistema).
- **Cargo atual**: corrigido de "postdoctoral researcher" para **doutoranda/doctoral researcher, UFSCar** — ela concluiu o doutorado na Shinshu University (Japão) e iniciou um **novo** doutorado na UFSCar, no laboratório do Prof. Ivo Teixeira. `education.ts` ganhou uma segunda entrada de doutorado; Jornada e Sobre foram reescritos para refletir isso.
- **Local no hero**: "São Carlos, SP — Brazil" → "São Carlos, São Paulo, Brazil/Brasil" (por extenso, sem travessão), igual ao formato da página de referência.
- **Foto**: só a casual, só na Home (dentro de Sobre, ao lado do texto — hero ficou só texto). A foto do jaleco e a da kufia saíram de uso por enquanto (ainda em `src/assets/photos/`, disponíveis pra quando ela liberar mais fotos). A "polaroid" da Jornada foi removida por causa disso.
- **Header**: nome "Izadora Menezes" removido da barra (só nav + utilidades); linha divisória removida; ícones sociais saíram do header (ficaram só em Contato e no rodapé); alternador EN/PT virou um segmented control de dois botões, no mesmo estilo da página de referência.
- **Seção Novidades**: adicionada à Home (primeira seção, antes de Sobre) — comparei com a estrutura da página da Risa Shinoda e essa era a peça que faltava. Conteúdo real, derivado do que já existia (publicação aceita, seleção CNPEM, início do doutorado atual).
- **Cabeçalhos de seção**: viraram rótulos pequenos em caixa alta/mono (em vez de heading serifado grande), para dar mais hierarquia entre "título de página" e "título de seção".

### Fase 8 — Ajustes finos (execução)
- [x] Pesquisa da fonte/estrutura da página de referência (computed styles via devtools) — Newsreader descartada em favor de comparação ao vivo; Literata escolhida
- [x] Preview local (fonte + paleta) servido via `http.server` para o usuário conferir antes de aplicar
- [x] Troca de fontes (Literata + IBM Plex Mono), remoção de Fraunces/Inter dos deps
- [x] Paleta clara recalculada para sepia, recontrastada (WCAG AA)
- [x] Tema escuro como padrão
- [x] Correção doutorado (dados + textos em Home/Jornada/Sobre, EN e PT)
- [x] Formato do local no hero
- [x] Foto: só casual, só na Home/Sobre; removida da Jornada
- [x] Header simplificado (sem nome, sem borda, sem ícones sociais) + `LangToggle.astro` novo
- [x] Ícones sociais movidos para Contato + rodapé
- [x] Seção Novidades (`news.ts` + `NewsList.astro`)
- [x] `astro check` + `npm run build` limpos
- [x] Revisão visual local: Home/Jornada claro+escuro, EN+PT
- [ ] Confirmação mobile real (mesma limitação de ferramenta da v2)
