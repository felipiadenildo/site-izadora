// Degree-granting education only (reverse chronological). Non-degree stays
// like the Argentina/Liverpool stays live in the Journey page instead.
// Source: ORCID 0000-0003-1820-5410 and direct confirmation, September 2026.
// Note: two doctorates — the Shinshu one was completed in 2023; the UFSCar
// one is a separate, new doctorate started afterward, in progress.

export type EducationEntry = {
  period: string;
  degree: { en: string; pt: string };
  institution: string;
  place: string;
  current?: boolean;
};

export const education: EducationEntry[] = [
  {
    period: "2023 – present",
    degree: { en: "Ph.D. in Chemistry (in progress)", pt: "Doutorado em Química (em andamento)" },
    institution: "UFSCar",
    place: "São Carlos, Brazil",
    // current: true,
  },
  {
    period: "2019 – 2023",
    degree: { en: "Doctor of Engineering", pt: "Doutorado em Engenharia" },
    institution: "Shinshu University",
    place: "Nagano, Japan",
  },
  {
    period: "2018",
    degree: { en: "M.Sc., Inorganic Chemistry", pt: "Mestrado em Química Inorgânica" },
    institution: "UFMG",
    place: "Belo Horizonte, Brazil",
  },
  {
    period: "2012 – 2017",
    degree: { en: "B.Sc., Chemistry", pt: "Bacharelado em Química" },
    institution: "UFMG",
    place: "Belo Horizonte, Brazil",
  },
  {
    period: "2009 – 2011",
    degree: { en: "Technical diploma, Chemistry", pt: "Técnico em Química" },
    institution: "CEFET-MG",
    place: "Belo Horizonte, Brazil",
  },
];
