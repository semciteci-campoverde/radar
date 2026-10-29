/* Agenda e galeria do Ecossistema INOVACAMPOVERDE
   Como atualizar: acrescente um objeto em AGENDA (futuros) ou GALERIA (passados).
   Fotos: coloque os arquivos em ecossistema/fotos/ e cite o caminho relativo, ex.: "ecossistema/fotos/workshop-01.jpg"
*/
window.ECO_EVENTOS = {
  atualizado: "29/10/2026",
  agenda: [
    // Exemplo — substitua ou apague quando tiver o evento real:
    {
      id: "exemplo-reuniao-mensal",
      tipo: "reuniao",
      titulo: "Reunião do Ecossistema INOVACAMPOVERDE",
      data: "2026-11-05",
      hora: "09:00",
      local: "CEMP / Prefeitura — Campo Verde (a confirmar)",
      tema: "Alinhamento das ações de inovação e empreendedorismo no município",
      publico: "Empresas, startups, instituições de ensino e órgãos públicos",
      inscricao: "",
      status: "a_confirmar",
      notas: "Placeholder — atualize data, local e link quando a reunião for marcada."
    },
    {
      id: "exemplo-formacao",
      tipo: "formacao",
      titulo: "Formação / workshop do ecossistema (a definir)",
      data: "2026-11-20",
      hora: "14:00",
      local: "Campo Verde-MT (a confirmar)",
      tema: "Capacitação em inovação e tecnologia para o ecossistema local",
      publico: "Empreendedores, servidores e estudantes",
      inscricao: "",
      status: "a_confirmar",
      notas: "Placeholder — troque pelo workshop real e anexe fotos na galeria depois."
    }
  ],
  galeria: [
    // Depois do evento: copie o bloco, preencha e liste as fotos
    {
      id: "modelo-workshop",
      titulo: "Workshop do Ecossistema (modelo)",
      data: "2026-10-01",
      local: "Campo Verde-MT",
      resumo: "Espaço reservado para o próximo workshop. Após o evento, substitua este texto e adicione as fotos em ecossistema/fotos/.",
      fotos: [
        // "ecossistema/fotos/workshop-01.jpg",
        // "ecossistema/fotos/workshop-02.jpg"
      ],
      links: [],
      rascunho: true
    }
  ]
};
