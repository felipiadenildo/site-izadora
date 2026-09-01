// Degree-granting education only (reverse chronological). Non-degree stays
// like the Argentina/Liverpool stays live in the Journey page instead.
// Source: ORCID 0000-0003-1820-5410, September 2026.

export type EducationEntry = {
  period: string;
  degree: { en: string; pt: string };
  institution: string;
  place: string;
};

export const education: EducationEntry[] = [
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
