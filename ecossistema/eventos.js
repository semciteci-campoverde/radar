/* Agenda e galeria do Ecossistema INOVACAMPOVERDE
   Como atualizar: acrescente um objeto em AGENDA (futuros) ou GALERIA (passados).
   Fotos: coloque os arquivos em ecossistema/fotos/ e cite o caminho relativo, ex.: "ecossistema/fotos/workshop-01.jpg"
*/
window.ECO_EVENTOS = {
  atualizado: "29/10/2026",
  agenda: [
    {
      id: "workshop-objetivos-2026-11-03",
      tipo: "formacao",
      titulo: "5º Workshop — Como alcançaremos nossos objetivos",
      data: "2026-11-03",
      hora: "18:00",
      local: "Online",
      tema: "Como alcançaremos nossos objetivos",
      publico: "Ecossistema INOVACAMPOVERDE · Campo Verde-MT",
      inscricao: "",
      status: "confirmado",
      notas: "5º workshop do ecossistema · modalidade online · 03/11/2026 às 18h."
    },
    {
      id: "digitalburguer-2026-11-11",
      tipo: "evento",
      titulo: "DigitalBurguer",
      data: "2026-11-11",
      hora: "19:00",
      local: "Espaço Classic · Campo Verde-MT",
      tema: "Encontro DigitalBurguer para empresas e pessoas convidadas",
      publico: "Empresas e pessoas convidadas (evento fechado)",
      inscricao: "",
      status: "confirmado",
      notas: "Evento fechado — somente convidados · 11/11/2026 às 19h."
    },
    {
      id: "lancamento-plano-acao-ecossistema",
      tipo: "evento",
      titulo: "Lançamento do Plano de Ação do Ecossistema",
      data: "",
      hora: "",
      local: "Campo Verde-MT (a definir)",
      tema: "Apresentação e lançamento do Plano de Ação do Ecossistema de Inovação de Campo Verde (INOVACAMPOVERDE)",
      publico: "Ecossistema local · empresas, instituições e poder público",
      inscricao: "",
      status: "a_confirmar",
      notas: "Data a definir."
    },


    // Exemplo — substitua ou apague quando tiver o evento real:
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
