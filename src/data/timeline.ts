// Sourced from ORCID employment/education records and FAPESP, Sept 2026.

export type TimelineEntry = {
  period: string;
  place: string;
  icon: string;
  title: { en: string; pt: string };
  body: { en: string; pt: string };
};

export const timeline: TimelineEntry[] = [
  {
    period: "2009 – 2011",
    place: "Belo Horizonte, Brazil",
    icon: "🧫",
    title: { en: "Technical diploma in Chemistry", pt: "Técnico em Química" },
    body: {
      en: "CEFET-MG — where the periodic table first stopped being homework and started being interesting.",
      pt: "CEFET-MG — onde a tabela periódica deixou de ser lição de casa e passou a ser interessante.",
    },
  },
  {
    period: "2012 – 2017",
    place: "Belo Horizonte, Brazil",
    icon: "🎓",
    title: { en: "B.Sc. in Chemistry, UFMG", pt: "Bacharelado em Química, UFMG" },
    body: {
      en: "Worked with Prof. Flávia C. C. Moura on nanostructured metal oxides for water treatment — early proof that tiny particles can do big jobs.",
      pt: "Trabalhou com a Prof.ª Flávia C. C. Moura em óxidos metálicos nanoestruturados para tratamento de água — prova precoce de que partículas minúsculas resolvem problemas grandes.",
    },
  },
  {
    period: "Feb 2013",
    place: "San Luis, Argentina",
    icon: "🌎",
    title: { en: "Research stay abroad, #1", pt: "Intercâmbio de pesquisa, #1" },
    body: {
      en: "A month at Universidad Nacional de San Luis synthesizing ordered mesoporous materials with Prof. Karim Sapag — passport stamp number one.",
      pt: "Um mês na Universidad Nacional de San Luis sintetizando materiais mesoporosos ordenados com o Prof. Karim Sapag — primeiro carimbo no passaporte.",
    },
  },
  {
    period: "2014 – 2015",
    place: "Liverpool, United Kingdom",
    icon: "✈️",
    title: { en: "Exchange year, University of Liverpool", pt: "Ano de intercâmbio, University of Liverpool" },
    body: {
      en: "A year of chemistry (and rain) with Prof. Jose A. Lopez-Sanchez's group.",
      pt: "Um ano de química (e chuva) no grupo do Prof. Jose A. Lopez-Sanchez.",
    },
  },
  {
    period: "2018",
    place: "Belo Horizonte, Brazil",
    icon: "🧪",
    title: { en: "M.Sc. in Inorganic Chemistry, UFMG", pt: "Mestrado em Química Inorgânica, UFMG" },
    body: {
      en: "Wrapped up a master's in nine months flat — brief, intense, and full of glassware.",
      pt: "Concluiu o mestrado em nove meses — breve, intenso e cheio de vidraria.",
    },
  },
  {
    period: "2019 – 2023",
    place: "Nagano, Japan",
    icon: "🗾",
    title: { en: "Doctor of Engineering, Shinshu University", pt: "Doutorado em Engenharia, Shinshu University" },
    body: {
      en: "Four years with Prof. Katsumi Kaneko studying gas adsorption on graphene oxide — the longest, and coldest-winters, leg of the journey.",
      pt: "Quatro anos com o Prof. Katsumi Kaneko estudando adsorção de gases em óxido de grafeno — a etapa mais longa da jornada, e a de invernos mais frios.",
    },
  },
  {
    period: "2022 – 2023",
    place: "Brazil",
    icon: "🇧🇷",
    title: { en: "Project manager, Brazilian Chemical Society", pt: "Gerente de projeto, Sociedade Brasileira de Química" },
    body: {
      en: 'Helped run the SBQ "Sustainable Brazil" action plan — proof that a chemist can also run a spreadsheet.',
      pt: 'Ajudou a coordenar o plano de ação "Química para um Brasil Sustentável" da SBQ — prova de que uma química também sabe rodar uma planilha.',
    },
  },
  {
    period: "Nov 2023 — present",
    place: "São Carlos, Brazil",
    icon: "🔬",
    title: { en: "Postdoctoral researcher, UFSCar", pt: "Pesquisadora de pós-doutorado, UFSCar" },
    body: {
      en: "Back in Brazil, FAPESP fellow in Prof. Ivo F. Teixeira's group, designing single-atom photocatalysts — and making regular use of the Sirius synchrotron and electron-microscopy facilities at CNPEM.",
      pt: "De volta ao Brasil, bolsista FAPESP no grupo do Prof. Ivo F. Teixeira, desenhando fotocatalisadores single-atom — e usando com frequência o síncrotron Sirius e a microscopia eletrônica do CNPEM.",
    },
  },
];
