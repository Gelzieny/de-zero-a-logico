export interface CourseLessonModule {
  id: string;
  title: string;
  description: string;
  type: 'lesson';
  duration?: string; 
  lessonsCount?: number; 
  optional?: boolean;
  atividade?: string;
}

export interface ProjectModule {
  id: string;
  title: string;
  description: string;
  type: 'project';
  projectId: string; // ID do projeto, usado como parâmetro
  status: 'Concluído' | 'Em Andamento' | 'Não Iniciado';
  dueDate: string;
  url: string;
  urlGithub: string;
}


export type Module = CourseLessonModule | ProjectModule;