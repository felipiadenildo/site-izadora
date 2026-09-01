// Service, outreach and selective programs — not formal prizes (none found
// publicly, so this stays honest about what it is). Source: ORCID, FAPESP,
// CNPEM public course listings, September 2026.

export type ParticipationEntry = {
  period: string;
  title: { en: string; pt: string };
  org: string;
};

export const participation: ParticipationEntry[] = [
  {
    period: "2024",
    title: { en: "Selected participant, Introduction to Electron Microscopy course", pt: "Selecionada, curso de Introdução à Microscopia Eletrônica" },
    org: "CNPEM",
  },
  {
    period: "2022 – 2023",
    title: { en: "Project manager, \"Sustainable Brazil\" action plan", pt: "Gerente de projeto, plano de ação \"Química para um Brasil Sustentável\"" },
    org: "Brazilian Chemical Society (SBQ)",
  },
  {
    period: "2016",
    title: { en: "Ambassador, BOOST Workshop leadership program", pt: "Embaixadora, programa de liderança BOOST Workshop" },
    org: "American Chemical Society (ACS)",
  },
];
