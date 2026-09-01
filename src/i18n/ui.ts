export const defaultLang = "en";
export const langs = ["en", "pt"] as const;
export type Lang = (typeof langs)[number];

export const ui = {
  en: {
    "site.role": "Chemist — Photocatalysis & Single-Atom Catalysis",
    "site.underConstruction": "This page is still growing crystals",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.research": "Research",
    "nav.publications": "Publications",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.journey": "Journey",
    "nav.langSwitch": "Português",
    "nav.skipToContent": "Skip to content",

    "hero.eyebrow": "Postdoctoral Researcher, UFSCar (FAPESP fellow)",
    "hero.tagline": "Chemist turning sunlight into chemical reactions — one single atom at a time.",
    "hero.subtext":
      "Izadora studies how single metal atoms anchored on carbon nitrides can drive photocatalysis — using light, instead of heat and harsh reagents, to make chemistry more sustainable.",
    "hero.ctaResearch": "See the research",
    "hero.ctaCV": "Download CV",
    "hero.ctaContact": "Get in touch",
    "hero.photoAlt": "Izadora in a lab coat at the Sirius synchrotron facility (CNPEM)",

    "home.highlights": "At a glance",
    "home.currentRole": "Currently",
    "home.currentRoleBody":
      "Postdoctoral researcher at UFSCar, FAPESP fellow, working with Prof. Ivo F. Teixeira on single-atom photocatalysts.",
    "home.latestPub": "Latest publication",
    "home.featuredProject": "Featured project",
    "home.featuredProjectBody":
      "CataliIza — a tool that turns raw GC-MS chromatography data into something a chemist can actually read without losing a Friday afternoon.",
    "home.journeyTeaser.title": "Three continents, one periodic table",
    "home.journeyTeaser.body":
      "From a technical high school in Minas Gerais to a synchrotron lab in Japan — see how the path unfolded.",
    "home.journeyTeaser.cta": "Read the journey",
    "home.snapshotTitle": "In short",
    "home.readMore": "Read the full story",
    "home.viewAll": "View all",

    "about.title": "About",
    "about.eyebrow": "The slightly longer version",
    "about.quickFacts": "Quick facts",
    "about.factDegree": "Doctor of Engineering, Shinshu University (Japan), 2023",
    "about.factField": "Field: inorganic & materials chemistry, heterogeneous catalysis",
    "about.factInstitution": "Universidade Federal de São Carlos (UFSCar)",
    "about.factOrigin": "Born and (mostly) raised in Minas Gerais, Brazil",
    "about.funFactTitle": "Fun fact",
    "about.funFact":
      "Her doctoral research took her from Belo Horizonte to San Luis, Liverpool and Nagano before bringing her back to Brazil — a PhD with more stamps in the passport than most travel bloggers.",
    "about.cvTitle": "Curriculum Vitae",
    "about.cvComingSoon":
      "The PDF version is still recrystallizing — check back soon, or ask directly via the contact page.",
    "about.journeyCta": "See the full timeline →",

    "journey.title": "Journey",
    "journey.eyebrow": "How a technical-school student in Minas Gerais ended up doing photocatalysis in Brazil, by way of Argentina, England and Japan",
    "journey.intro":
      "Academic careers rarely move in a straight line. This one zig-zagged across three continents and picked up a taste for synchrotron light along the way.",

    "research.title": "Research",
    "research.eyebrow": "Making light do the heavy lifting",
    "research.currentProject": "Current project",
    "research.currentProjectBody":
      "Graphitic carbon nitrides as platforms for single-atom photocatalysis — designing catalysts atom by atom to convert sunlight into useful chemical transformations, with fewer of the harsh conditions traditional catalysis relies on.",
    "research.grantLabel": "FAPESP grant",
    "research.advisorLabel": "Host researcher",
    "research.institutionLabel": "Institution",
    "research.interestsTitle": "Research interests",
    "research.methodsTitle": "Methods & tools she reaches for",
    "research.methodsBody":
      "Gas adsorption analysis, thermal/kinetic characterization, electron microscopy and synchrotron-based techniques (Sirius/LNLS, CNPEM) — plus the occasional GC-MS chromatogram that needs taming (hence CataliIza).",

    "publications.title": "Publications",
    "publications.eyebrow": "Peer-reviewed, mostly about making molecules behave",
    "publications.viewProfile": "Full list on ORCID",
    "publications.viewScholar": "Google Scholar profile",
    "publications.forthcoming": "In press",

    "projects.title": "Projects",
    "projects.eyebrow": "Where chemistry meets code",
    "projects.viewRepo": "View repository",
    "projects.comingSoonTitle": "A new experiment is brewing",
    "projects.comingSoonBody":
      "This flask is still empty — the next project will be poured in here once it's ready to be seen by human eyes.",

    "contact.title": "Contact",
    "contact.eyebrow": "Say hello, propose a collaboration, or just talk chemistry",
    "contact.emailTitle": "Email",
    "contact.profilesTitle": "Academic & professional profiles",
    "contact.note":
      "There's no contact form yet (static sites and forms are a whole other reaction pathway) — the academic profiles below are the most reliable way to reach her for now.",

    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Built with Astro & Tailwind CSS.",
    "footer.backToTop": "Back to top",

    "notfound.title": "404 — Reagent not found",
    "notfound.body":
      "Whatever you were looking for didn't survive the reaction. It may have evaporated, or never existed on this bench.",
    "notfound.cta": "Back to a known compound (home)",

    "underconstruction.default":
      "This section is still synthesizing — come back after it's had time to crystallize.",
  },
  pt: {
    "site.role": "Química — Fotocatálise e Catálise Single-Atom",
    "site.underConstruction": "Esta página ainda está crescendo cristais",

    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.research": "Pesquisa",
    "nav.publications": "Publicações",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "nav.journey": "Jornada",
    "nav.langSwitch": "English",
    "nav.skipToContent": "Pular para o conteúdo",

    "hero.eyebrow": "Pesquisadora de Pós-Doutorado, UFSCar (bolsista FAPESP)",
    "hero.tagline": "Química que transforma luz do sol em reação química — um átomo de cada vez.",
    "hero.subtext":
      "Izadora estuda como átomos metálicos isolados ancorados em nitretos de carbono podem conduzir reações de fotocatálise — usando luz, em vez de calor e reagentes agressivos, para tornar a química mais sustentável.",
    "hero.ctaResearch": "Ver a pesquisa",
    "hero.ctaCV": "Baixar currículo",
    "hero.ctaContact": "Falar com ela",
    "hero.photoAlt": "Izadora de jaleco no síncrotron Sirius (CNPEM)",

    "home.highlights": "Resumo rápido",
    "home.currentRole": "Atualmente",
    "home.currentRoleBody":
      "Pesquisadora de pós-doutorado na UFSCar, bolsista FAPESP, trabalhando com o Prof. Ivo F. Teixeira em fotocatalisadores single-atom.",
    "home.latestPub": "Publicação mais recente",
    "home.featuredProject": "Projeto em destaque",
    "home.featuredProjectBody":
      "CataliIza — uma ferramenta que transforma dados brutos de cromatografia GC-MS em algo que um químico consegue de fato ler sem perder uma tarde inteira.",
    "home.journeyTeaser.title": "Três continentes, uma tabela periódica",
    "home.journeyTeaser.body":
      "De uma escola técnica em Minas Gerais a um laboratório síncrotron no Japão — veja como o caminho se desenhou.",
    "home.journeyTeaser.cta": "Ler a jornada",
    "home.snapshotTitle": "Resumindo",
    "home.readMore": "Ler a história completa",
    "home.viewAll": "Ver todas",

    "about.title": "Sobre",
    "about.eyebrow": "A versão um pouco mais longa",
    "about.quickFacts": "Fatos rápidos",
    "about.factDegree": "Doutorado em Engenharia, Shinshu University (Japão), 2023",
    "about.factField": "Área: química inorgânica e de materiais, catálise heterogênea",
    "about.factInstitution": "Universidade Federal de São Carlos (UFSCar)",
    "about.factOrigin": "Nascida e (majoritariamente) criada em Minas Gerais, Brasil",
    "about.funFactTitle": "Curiosidade",
    "about.funFact":
      "O doutorado a levou de Belo Horizonte a San Luis, Liverpool e Nagano antes de trazê-la de volta ao Brasil — um doutorado com mais carimbos no passaporte do que muito blogueiro de viagem.",
    "about.cvTitle": "Currículo",
    "about.cvComingSoon":
      "A versão em PDF ainda está recristalizando — volte em breve, ou pergunte diretamente pela página de contato.",
    "about.journeyCta": "Ver a linha do tempo completa →",

    "journey.title": "Jornada",
    "journey.eyebrow": "Como uma estudante de escola técnica em Minas Gerais foi parar na fotocatálise no Brasil, passando por Argentina, Inglaterra e Japão",
    "journey.intro":
      "Carreira acadêmica raramente é uma linha reta. Essa aqui fez ziguezague por três continentes e pegou gosto por luz síncrotron no caminho.",

    "research.title": "Pesquisa",
    "research.eyebrow": "Fazendo a luz puxar o peso pesado",
    "research.currentProject": "Projeto atual",
    "research.currentProjectBody":
      "Nitretos de carbono grafítico como plataformas para fotocatálise single-atom — desenhando catalisadores átomo por átomo para converter luz solar em transformações químicas úteis, com menos das condições agressivas de que a catálise tradicional depende.",
    "research.grantLabel": "Bolsa FAPESP",
    "research.advisorLabel": "Pesquisador anfitrião",
    "research.institutionLabel": "Instituição",
    "research.interestsTitle": "Interesses de pesquisa",
    "research.methodsTitle": "Métodos e ferramentas do dia a dia",
    "research.methodsBody":
      "Análise de adsorção de gases, caracterização térmica/cinética, microscopia eletrônica e técnicas de luz síncrotron (Sirius/LNLS, CNPEM) — além de, ocasionalmente, domar um cromatograma de GC-MS (daí o CataliIza).",

    "publications.title": "Publicações",
    "publications.eyebrow": "Revisadas por pares, majoritariamente sobre fazer moléculas se comportarem",
    "publications.viewProfile": "Lista completa no ORCID",
    "publications.viewScholar": "Perfil no Google Scholar",
    "publications.forthcoming": "No prelo",

    "projects.title": "Projetos",
    "projects.eyebrow": "Onde a química encontra o código",
    "projects.viewRepo": "Ver repositório",
    "projects.comingSoonTitle": "Um novo experimento está em preparo",
    "projects.comingSoonBody":
      "Este balão ainda está vazio — o próximo projeto será vertido aqui assim que estiver pronto para olhos humanos.",

    "contact.title": "Contato",
    "contact.eyebrow": "Diga oi, proponha uma colaboração, ou só bata um papo sobre química",
    "contact.emailTitle": "E-mail",
    "contact.profilesTitle": "Perfis acadêmicos e profissionais",
    "contact.note":
      "Ainda não há formulário de contato (sites estáticos e formulários são outra rota de reação inteira) — os perfis acadêmicos abaixo são a forma mais confiável de falar com ela por enquanto.",

    "footer.rights": "Todos os direitos reservados.",
    "footer.builtWith": "Feito com Astro & Tailwind CSS.",
    "footer.backToTop": "Voltar ao topo",

    "notfound.title": "404 — Reagente não encontrado",
    "notfound.body":
      "O que quer que você procurava não sobreviveu à reação. Pode ter evaporado, ou nunca ter existido nesta bancada.",
    "notfound.cta": "Voltar a um composto conhecido (início)",

    "underconstruction.default":
      "Esta seção ainda está em síntese — volte depois que ela tiver tempo de cristalizar.",
  },
} as const;
