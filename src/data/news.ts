// Short, dated highlights — a compact "what's recent" view built from data
// already in publications.ts / participation.ts / timeline.ts, kept here as
// its own reverse-chronological list rather than re-derived at render time.

export type NewsEntry = {
  period: string;
  text: { en: string; pt: string };
  href?: string;
};

export const news: NewsEntry[] = [
  {
    period: "2026",
    text: {
      en: "Paper accepted in Applied Catalysis B: Environment and Energy, on light-driven olefin epoxidation.",
      pt: "Artigo aceito na Applied Catalysis B: Environment and Energy, sobre epoxidação de olefinas via luz.",
    },
    href: "https://doi.org/10.1016/j.apcatb.2026.126839",
  },
  {
    period: "2024",
    text: {
      en: "Selected for CNPEM's Introduction to Electron Microscopy course.",
      pt: "Selecionada para o curso de Introdução à Microscopia Eletrônica do CNPEM.",
    },
  },
  {
    period: "Nov 2023",
    text: {
      en: "Started doctoral research at UFSCar, FAPESP fellow in Prof. Ivo F. Teixeira's lab.",
      pt: "Iniciou o doutorado na UFSCar, bolsista FAPESP no laboratório do Prof. Ivo F. Teixeira.",
    },
  },
];
