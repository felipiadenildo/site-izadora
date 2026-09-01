export const defaultLang = "en";
export const langs = ["en", "pt"] as const;
export type Lang = (typeof langs)[number];

export const ui = {
  en: {
    "site.role": "Chemist — photocatalysis & single-atom catalysis",

    "nav.home": "Home",
    "nav.journey": "Journey",
    "nav.blog": "Blog",
    "nav.langSwitch": "Português",
    "nav.skipToContent": "Skip to content",

    "theme.toLight": "Switch to light mode",
    "theme.toDark": "Switch to dark mode",

    "hero.location": "São Carlos, SP — Brazil",
    "hero.role": "Postdoctoral researcher, UFSCar — FAPESP fellow",
    "hero.tagline": "Chemist researching how light can drive chemical reactions, atom by atom.",
    "hero.photoAlt": "Izadora in a lab coat at the Sirius synchrotron facility (CNPEM)",

    "jump.about": "About",
    "jump.education": "Education",
    "jump.research": "Research",
    "jump.publications": "Publications",
    "jump.projects": "Projects",
    "jump.participation": "Participation",
    "jump.contact": "Contact",

    "section.about": "About",
    "section.education": "Education",
    "section.research": "Research",
    "section.publications": "Publications",
    "section.projects": "Projects",
    "section.participation": "Participation & recognition",
    "section.contact": "Contact",

    "about.body1":
      "Izadora works on catalysis and materials chemistry, focused on using light instead of heat to drive chemical reactions. She's currently a postdoctoral researcher at UFSCar, on a FAPESP fellowship, designing single-atom catalysts anchored on carbon nitrides.",
    "about.body2":
      "Her path here went through UFMG, a research stay in Argentina, an exchange year in the UK, and a PhD at Shinshu University in Japan.",
    "about.journeyCta": "Read the full journey",

    "research.summary":
      "Graphitic carbon nitrides as platforms for single-atom photocatalysis — designing catalysts atom by atom to convert sunlight into useful chemical reactions.",
    "research.grantLabel": "FAPESP grant",
    "research.advisorLabel": "Host researcher",
    "research.interestsLabel": "Research interests",

    "publications.viewAll": "All publications on ORCID",
    "publications.forthcoming": "In press",
    "publications.openLink": "Open publication",

    "projects.viewRepo": "View repository",
    "projects.nextNote": "Next project isn't public yet.",

    "contact.note": "No contact form for now — reach out through one of these.",
    "contact.emailPending": "Contact email not published yet.",
    "contact.cvLabel": "CV (PDF)",
    "contact.cvPending": "Coming soon.",

    "footer.rights": "All rights reserved.",
    "footer.backToTop": "Back to top",

    "journey.intro":
      "A research career rarely moves in a straight line. This one went through three countries before landing back in Brazil.",

    "blog.empty.eyebrow": "Nothing here yet",
    "blog.empty.body":
      "No posts published yet. This page is ready for when there's something worth writing about.",

    "notfound.title": "404 — Reagent not found",
    "notfound.body": "Whatever you were looking for isn't on this bench. It may have moved, or never existed.",
    "notfound.cta": "Back to home",

    "underconstruction.default": "Still being put together — check back soon.",
  },
  pt: {
    "site.role": "Química — fotocatálise e catálise single-atom",

    "nav.home": "Início",
    "nav.journey": "Jornada",
    "nav.blog": "Blog",
    "nav.langSwitch": "English",
    "nav.skipToContent": "Pular para o conteúdo",

    "theme.toLight": "Mudar para modo claro",
    "theme.toDark": "Mudar para modo escuro",

    "hero.location": "São Carlos, SP — Brasil",
    "hero.role": "Pesquisadora de pós-doutorado, UFSCar — bolsista FAPESP",
    "hero.tagline": "Química que pesquisa como a luz pode conduzir reações químicas, átomo por átomo.",
    "hero.photoAlt": "Izadora de jaleco no síncrotron Sirius (CNPEM)",

    "jump.about": "Sobre",
    "jump.education": "Formação",
    "jump.research": "Pesquisa",
    "jump.publications": "Publicações",
    "jump.projects": "Projetos",
    "jump.participation": "Participação",
    "jump.contact": "Contato",

    "section.about": "Sobre",
    "section.education": "Formação",
    "section.research": "Pesquisa",
    "section.publications": "Publicações",
    "section.projects": "Projetos",
    "section.participation": "Participação & reconhecimento",
    "section.contact": "Contato",

    "about.body1":
      "Izadora trabalha com catálise e química de materiais, com foco em usar luz — em vez de calor — para conduzir reações químicas. Atualmente é pesquisadora de pós-doutorado na UFSCar, bolsista FAPESP, desenvolvendo catalisadores single-atom ancorados em nitretos de carbono.",
    "about.body2":
      "O caminho até aqui passou pela UFMG, uma temporada de pesquisa na Argentina, um ano de intercâmbio no Reino Unido e um doutorado na Shinshu University, no Japão.",
    "about.journeyCta": "Ler a jornada completa",

    "research.summary":
      "Nitretos de carbono grafítico como plataformas para fotocatálise single-atom — catalisadores desenhados átomo por átomo para converter luz solar em reações químicas úteis.",
    "research.grantLabel": "Bolsa FAPESP",
    "research.advisorLabel": "Pesquisador anfitrião",
    "research.interestsLabel": "Interesses de pesquisa",

    "publications.viewAll": "Todas as publicações no ORCID",
    "publications.forthcoming": "No prelo",
    "publications.openLink": "Abrir publicação",

    "projects.viewRepo": "Ver repositório",
    "projects.nextNote": "O próximo projeto ainda não é público.",

    "contact.note": "Sem formulário de contato por enquanto — pode chamar por um destes.",
    "contact.emailPending": "E-mail de contato ainda não publicado.",
    "contact.cvLabel": "Currículo (PDF)",
    "contact.cvPending": "Em breve.",

    "footer.rights": "Todos os direitos reservados.",
    "footer.backToTop": "Voltar ao topo",

    "journey.intro":
      "Uma carreira de pesquisa raramente segue linha reta. Essa passou por três países até voltar para o Brasil.",

    "blog.empty.eyebrow": "Nada por aqui ainda",
    "blog.empty.body":
      "Nenhum post publicado ainda. Esta página já está pronta pra quando houver algo que valha a pena escrever.",

    "notfound.title": "404 — Reagente não encontrado",
    "notfound.body": "O que você procurava não está nesta bancada. Pode ter mudado de lugar, ou nunca ter existido.",
    "notfound.cta": "Voltar ao início",

    "underconstruction.default": "Ainda em preparo — volte em breve.",
  },
} as const;
