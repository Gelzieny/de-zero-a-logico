import { Module } from "../module";

export interface CourseLevel {
  id: string;
  levelTitle: string;
  levelSubtitle: string;
  modules: Module[];
}


export const mockCourseLevels: CourseLevel[] = [
  {
    id: 'level1',
    levelTitle: 'NÍVEL 1',
    levelSubtitle: 'Fundamentos da Lógica de Programação',
    modules: [
      {
        id: 'm1',
        title: 'Conceitos básicos de Lógica',
        description: 'Neste módulo, você aprenderá os fundamentos da lógica de programação, desde conectivos lógicos e tabelas verdade até a construção de algoritmos e desenvolvimento de programas. Exploraremos fluxogramas, pseudocódigo, controle de fluxo, variáveis, funções e arrays, preparando você para estruturar soluções eficientes. O aprendizado será consolidado com projetos práticos, como um jogo de adivinhação e um Jogo da Velha.',
        type: 'lesson',
        lessonsCount: 11,
        atividade: '1 ATIVIDADES',
        duration: '2H 19MIN',
      },
      {
        id: 'l1.1',
        title: 'Conectivos e Tabela Verdade',
        description: 'Aqui você vai encontrar alguns exercícios pra colocar em prática os conceitos aprendidos nas aulas.',
        type: 'project',
        projectId: 'tabela-verdade',
        dueDate: '20/06/2025',
        status: 'Concluído',
        url: "https://gelzieny.github.io/logica-programaco/conectivos-tabela-verdade/",
        urlGithub: "https://github.com/Gelzieny/logica-programaco/blob/main/conectivos-tabela-verdade/index.html"
      },

      {
        id: 'l1.2',
        title: 'Algoritmos',
        description: 'Aqui você vai encontrar alguns exercícios pra colocar em prática os conceitos aprendidos nas aulas.',
        type: 'project',
        projectId: 'algoritmos',
        dueDate: '28/06/2025',
        status: 'Não Iniciado',
        url: "",
        urlGithub: ""
      },
    ],
  },
  {
    id: 'level2',
    levelTitle: 'NÍVEL 2',
    levelSubtitle: 'Escrevendo o seu primeiro programa',
    modules: [
      {
        id: 'm2',
        title: 'Do pensamento lógico à prática',
        description: "Neste módulo, você aprenderá os princípios essenciais para começar enfim a programar. Vamos desde a preparação do ambiente até a construção de programas interativos, explorando variáveis, estruturas condicionais, loops e funções. Você desenvolverá projetos práticos, como um jogo de adivinhação, consolidando os conceitos enquanto escreve código de verdade.",
        type: 'lesson',
        lessonsCount: 15,
        atividade: '1 ATIVIDADES',
        duration: '4H 25MIN',
      },
      {
        id: 'l2.2',
        title: 'Primeiros programas',
        description: 'Aqui você vai encontrar alguns exercícios pra colocar em prática os conceitos aprendidos nas aulas.',
        type: 'project',
        projectId: 'tabela-verdade',
        dueDate: '27/07/2025',
        status: 'Não Iniciado',
        url: "",
        urlGithub: ""
      },
    ],
  },
  {
    id: 'level3',
    levelTitle: 'NÍVEL 3',
    levelSubtitle: 'Lendo, depurando e entendendo códigos',
    modules: [
      {
        id: 'm4',
        title: 'Depuração e leitura de código',
        description: 'Neste módulo, vamos desenvolver uma habilidade essencial para qualquer pessoa que programa: a capacidade de ler, entender e depurar códigos com segurança. Você vai descobrir por que a depuração é uma das ferramentas mais poderosas no processo de aprendizagem, entender como o código “pensa” ao ser executado, explorar técnicas de leitura eficiente e conhecer as principais ferramentas que ajudam a encontrar e corrigir erros. ',
        type: 'lesson',
        lessonsCount: 6,
        duration: '1H 31MIN',
      },
    ],
  },
  {
    id: 'level4',
    levelTitle: 'NÍVEL 4',
    levelSubtitle: 'Boas práticas e legibilidade de código',
    modules: [
      {
        id: 'm4',
        title: 'Clareza, manutenção e código que fala por si',
        description: 'Nesse módulo vamos entender por que a legibilidade é um dos pilares de um bom código e como aplicá-la no seu dia a dia. Vamos falar sobre organização visual, indentação, escrita clara, boas práticas e também dar os primeiros passos em refatoração - aprendendo a melhorar códigos já existentes. O objetivo é que você desenvolva não só para funcionar, mas para ser entendido, mantido e evoluído com facilidade.',
        type: 'lesson',
        lessonsCount: 5,
        duration: '1H 12MIN',
      },
    ],
  },
  {
    id: 'level5',
    levelTitle: 'NÍVEL 5',
    levelSubtitle: 'Desafios com raciocínio lógico',
    modules: [
      {
        id: 'm5',
        title: 'Exercícios para fixação',
        description: 'Neste módulo, vamos colocar a lógica em prática com desafios clássicos e envolventes que estimulam o raciocínio e a criatividade na resolução de problemas. Abordaremos conceitos como recursividade, decisões e possibilidades, além de desenvolver o pensamento exploratório por meio de exercícios como a Torre de Hanói, o Sapo na Lagoa e outros desafios lógicos. Prepare-se para treinar sua mente, aprender a pensar como um programador e fortalecer sua capacidade de encontrar soluções elegantes para problemas complexos.',
        type: 'lesson',
        lessonsCount: 5,
        duration: '1H 12MIN',
      },
    ],
  },

  {
    id: 'level6',
    levelTitle: 'Conteúdo Bônus',
    levelSubtitle: 'Estrutura de dados',
    modules: [
      {
        id: 'm6',
        title: 'Introdução à Estrutura de dados',
        description: 'Neste módulo, você vai mergulhar nas principais estruturas de dados utilizadas na programação. Vamos aprofundar o entendimento sobre os tipos de dados e explorar, na prática, como funcionam tuplas, listas, dicionários, conjuntos, pilhas, filas, listas encadeadas entre outros. Com exemplos claros e acessíveis, você vai entender quando e por que usar cada estrutura, além de desenvolver um raciocínio mais organizado e eficiente na hora de escrever seus algoritmos.',
        type: 'lesson',
        lessonsCount: 13,
        atividade: '2 ATIVIDADES',
        duration: '3H 20MIN',
      },
      // {
      //   id: 'l6.1',
      //   title: 'Conectivos e Tabela Verdade',
      //   description: 'Aqui você vai encontrar alguns exercícios pra colocar em prática os conceitos aprendidos nas aulas.',
      //   type: 'project',
      //   projectId: 'tabela-verdade',
      //   dueDate: '20/06/2025',
      //   status: 'Não Iniciado',
      // },
    ],
  }
];