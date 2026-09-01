// Sourced from ORCID (0000-0003-1820-5410) works list, September 2026.
// Titles/journals are kept in their original language (English) regardless
// of site locale, as is standard for a publications list.

export type Publication = {
  year: number;
  title: string;
  journal: string;
  doi: string;
  forthcoming?: boolean;
};

export const publications: Publication[] = [
  {
    year: 2026,
    title:
      "Light-driven olefin epoxidation via poly(Triazine Imide): A route towards sustainable epoxide production",
    journal: "Applied Catalysis B: Environment and Energy",
    doi: "10.1016/j.apcatb.2026.126839",
    forthcoming: true,
  },
  {
    year: 2025,
    title:
      "Programa Qui+S: Principais Desafios da Química para Impactar a Sustentabilidade no Brasil até 2050",
    journal: "Revista Virtual de Química",
    doi: "10.21577/1984-6835.20250034",
  },
  {
    year: 2023,
    title:
      "Shedding light on the mechanism of graphene oxide thermal decomposition: A kinetic study using isoconversional method and artificial neural network",
    journal: "Thermochimica Acta",
    doi: "10.1016/j.tca.2023.179454",
  },
  {
    year: 2022,
    title: "Effect of preheating temperature on adsorption of N2 and Ar on graphene oxide",
    journal: "Chemical Physics Letters",
    doi: "10.1016/j.cplett.2022.140091",
  },
  {
    year: 2021,
    title:
      "Multifunctional glycerol/citric acid crosslinked polymer hydrophilic gel with absorptive and reducing properties",
    journal: "New Journal of Chemistry",
    doi: "10.1039/d0nj06138g",
  },
  {
    year: 2020,
    title: "Biphasic reaction of glycerol and oleic acid: Byproducts formation and phase transfer autocatalytic effect",
    journal: "Catalysis Today",
    doi: "10.1016/j.cattod.2019.02.011",
  },
];
