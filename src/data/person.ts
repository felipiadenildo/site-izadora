// Facts sourced from ORCID (0000-0003-1820-5410), FAPESP (BV) and public
// institutional pages, September 2026. Update here if her affiliation or
// role changes — everything else on the site reads from this file.

export const person = {
  name: "Izadora Rhaynna Santos de Menezes",
  shortName: "Izadora Menezes",
  citationName: "Izadora R. S. Menezes",
  nameVariants: [
    "Izadora Rhaynna Santos de Menezes",
    "Izadora R. S. Menezes",
    "Izadora Santos de Menezes",
    "Izadora Menezes",
  ],
  // No public email was found during research — leave null until Izadora
  // provides one. The contact page shows a placeholder instead of a mailto
  // link when this is null, rather than risk publishing a wrong address.
  email: null as string | null,
  orcid: "0000-0003-1820-5410",
  orcidUrl: "https://orcid.org/0000-0003-1820-5410",
  scholarUrl: "https://scholar.google.com/citations?user=x_P6XIkAAAAJ",
  researchGateUrl: "https://www.researchgate.net/profile/Izadora-R-S-Menezes",
  fapespUrl: "https://bv.fapesp.br/pt/pesquisador/728532/izadora-rhaynna-santos-de-menezes/",
  currentInstitution: "Universidade Federal de São Carlos (UFSCar)",
  currentInstitutionUrl: "https://www2.ufscar.br/",
  advisor: "Prof. Dr. Ivo Freitas Teixeira",
  grantNumber: "FAPESP 20/14741-6",
  grantUrl:
    "https://bv.fapesp.br/pt/auxilios/108831/nitretos-de-carbono-grafitico-como-plataformas-para-single-atom-fotocatalise-usando-principios-de-de/",
  researchInterests: [
    "Photocatalysis",
    "Single-atom catalysis",
    "Graphitic carbon nitrides",
    "Heterogeneous catalysis",
    "Nanostructured materials",
    "Sustainable / green chemistry",
    "Gas adsorption & porous materials",
  ],
} as const;

export const catalizaProject = {
  name: "CataliIza",
  description: {
    en: "A tool that parses and organizes GC-MS (gas chromatography–mass spectrometry) chromatography data — built to save a chemist's afternoon.",
    pt: "Uma ferramenta que processa e organiza dados de cromatografia GC-MS (cromatografia gasosa acoplada à espectrometria de massa) — feita para poupar a tarde de um químico.",
  },
  repoUrl: "https://github.com/felipiadenildo/CatalIza",
  stack: ["Python", "FastAPI", "React", "TypeScript"],
} as const;
