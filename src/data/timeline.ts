// Sourced from ORCID employment/education records and FAPESP, Sept 2026.
// `icon` keys into the icon set drawn in Journey.astro.

export type TimelineIcon =
  | "notebook"
  | "flask"
  | "compass"
  | "umbrella"
  | "clipboard"
  | "torii"
  | "flaskRays";

export type TimelineEntry = {
  period: string;
  place: string;
  icon: TimelineIcon;
  current?: boolean;
  title: { en: string; pt: string };
  body: { en: string; pt: string };
};

export const timeline: TimelineEntry[] = [
  {
    period: "2009 – 2011",
    place: "Belo Horizonte, Brazil",
    icon: "notebook",
    title: { en: "Technical diploma in Chemistry", pt: "Técnico em Química" },
    body: {
      en: "CEFET-MG — where the periodic table stopped being homework and became interesting.",
      pt: "CEFET-MG — onde a tabela periódica deixou de ser lição de casa e passou a ser interessante.",
    },
  },
  {
    period: "2012 – 2017",
    place: "Belo Horizonte, Brazil",
    icon: "flask",
    title: { en: "B.Sc. in Chemistry, UFMG", pt: "Bacharelado em Química, UFMG" },
    body: {
      en: "Research with Prof. Flávia C. C. Moura on nanostructured metal oxides for water treatment.",
      pt: "Pesquisa com a Prof.ª Flávia C. C. Moura em óxidos metálicos nanoestruturados para tratamento de água.",
    },
  },
  {
    period: "Feb 2013",
    place: "San Luis, Argentina",
    icon: "compass",
    title: { en: "Research stay, Universidad Nacional de San Luis", pt: "Estágio de pesquisa, Universidad Nacional de San Luis" },
    body: {
      en: "A month synthesizing ordered mesoporous materials with Prof. Karim Sapag.",
      pt: "Um mês sintetizando materiais mesoporosos ordenados com o Prof. Karim Sapag.",
    },
  },
  {
    period: "2014 – 2015",
    place: "Liverpool, United Kingdom",
    icon: "umbrella",
    title: { en: "Exchange year, University of Liverpool", pt: "Ano de intercâmbio, University of Liverpool" },
    body: {
      en: "A year with Prof. Jose A. Lopez-Sanchez's group — plenty of rain included.",
      pt: "Um ano no grupo do Prof. Jose A. Lopez-Sanchez — com direito a bastante chuva.",
    },
  },
  {
    period: "2018",
    place: "Belo Horizonte, Brazil",
    icon: "flask",
    title: { en: "M.Sc. in Inorganic Chemistry, UFMG", pt: "Mestrado em Química Inorgânica, UFMG" },
    body: {
      en: "Nine months of coursework and lab work — short, intense, a lot of glassware.",
      pt: "Nove meses de disciplinas e bancada — curto, intenso, muita vidraria.",
    },
  },
  {
    period: "2019 – 2023",
    place: "Nagano, Japan",
    icon: "torii",
    title: { en: "Doctor of Engineering, Shinshu University", pt: "Doutorado em Engenharia, Shinshu University" },
    body: {
      en: "Four years with Prof. Katsumi Kaneko studying gas adsorption on graphene oxide — the longest stretch of the journey, through some genuinely cold winters.",
      pt: "Quatro anos com o Prof. Katsumi Kaneko estudando adsorção de gases em óxido de grafeno — a etapa mais longa da jornada, com invernos de verdade frios.",
    },
  },
  {
    period: "2022 – 2023",
    place: "Brazil",
    icon: "clipboard",
    title: { en: "Project manager, Brazilian Chemical Society", pt: "Gerente de projeto, Sociedade Brasileira de Química" },
    body: {
      en: "Helped run the SBQ's \"Sustainable Brazil\" action plan.",
      pt: "Ajudou a coordenar o plano de ação \"Química para um Brasil Sustentável\" da SBQ.",
    },
  },
  {
    period: "Nov 2023 — present",
    place: "São Carlos, Brazil",
    icon: "flaskRays",
    current: true,
    title: { en: "Postdoctoral researcher, UFSCar", pt: "Pesquisadora de pós-doutorado, UFSCar" },
    body: {
      en: "Back in Brazil as a FAPESP fellow in Prof. Ivo F. Teixeira's group, designing single-atom photocatalysts — with regular use of the Sirius synchrotron and electron microscopy at CNPEM.",
      pt: "De volta ao Brasil como bolsista FAPESP no grupo do Prof. Ivo F. Teixeira, desenhando fotocatalisadores single-atom — com uso frequente do síncrotron Sirius e da microscopia eletrônica do CNPEM.",
    },
  },
];
