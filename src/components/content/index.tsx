import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { CourseLessonModule, ProjectModule } from "../module";
import { CourseLevel } from "../niveis";

interface CourseContentProps {
  courseLevels: CourseLevel[];
}

export function Content({ courseLevels }: CourseContentProps) {

  return (
    <div className="flex-1 overflow-y-auto pr-0 md:pr-4 mb-6 md:mb-0">
      {courseLevels.map((level) => (
        <div key={level.id} className="mb-8">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">{level.levelTitle}</h2>
          <h3 className="text-2xl font-bold text-gray-100 mb-6">{level.levelSubtitle}</h3>

          {level.modules.map((module) => (
            <div key={module.id} className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700 shadow-lg">
              {module.type === 'lesson' ? (
                <div className="flex items-start mb-4 flex-col sm:flex-row">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-500 mr-4 flex-shrink-0 mb-4 sm:mb-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-100 flex flex-wrap items-center">
                      {module.title}
                      {(module as CourseLessonModule).lessonsCount && <span className="ml-0 sm:ml-3 mt-1 sm:mt-0 px-2 py-0.5 bg-purple-600 rounded-full text-xs font-bold text-white">MÓDULO</span>}
                      {(module as CourseLessonModule).lessonsCount && <span className="ml-0 sm:ml-2 mt-1 sm:mt-0 px-2 py-0.5 bg-gray-700 rounded-full text-xs text-gray-300">{module.lessonsCount} AULAS</span>}
                      {(module as CourseLessonModule).duration && <span className="ml-0 sm:ml-2 mt-1 sm:mt-0 px-2 py-0.5 bg-gray-700 rounded-full text-xs text-gray-300">{module.duration}</span>}
                      {(module as CourseLessonModule).optional && <span className="ml-2 px-2 py-0.5 bg-gray-700 rounded-full text-xs text-gray-300">OPCIONAL</span>}
                    </h4>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">{module.description}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start mb-4 flex-col sm:flex-row">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-purple-500 mr-4 flex-shrink-0 mb-4 sm:mb-0">
                    <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-100 flex flex-wrap items-center">
                      {(module as ProjectModule).title}
                      <span className={`ml-3 mt-1 md:mt-0 px-2 py-0.5 ${(module as ProjectModule).status === 'Concluído' ? 'bg-green-600' :
                        (module as ProjectModule).status === 'Em Andamento' ? 'bg-yellow-600' :
                          'bg-gray-600'
                        } rounded-full text-xs font-bold text-white`}>{(module as ProjectModule).status.toUpperCase()}</span>
                      <span className="ml-2 mt-1 md:mt-0 px-2 py-0.5 bg-gray-700 rounded-full text-xs text-gray-300">Prazo: {(module as ProjectModule).dueDate}</span>
                    </h4>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">{(module as ProjectModule).description}</p>

                    <a
                      href={(module as ProjectModule).urlGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-white font-semibold rounded-md hover:text-purple-700 transition-colors duration-200 focus:outline-none focus:ring-0"
                    >
                      Ver Repositório
                      <FaArrowUpRightFromSquare className="w-4 h-4 pt-1" />
                    </a>

                    <a
                      href={(module as ProjectModule).url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-white font-semibold rounded-md hover:text-purple-700 transition-colors duration-200 focus:outline-none focus:ring-0"
                    >
                      Acessar Página em Produção
                      <FaArrowUpRightFromSquare className="w-4 h-4 pt-1" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}