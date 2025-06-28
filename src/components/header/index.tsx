export function CourseHeader(){
  return(
    <header className="bg-gray-800 p-6 border-b border-gray-700 shadow-md relative">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">

        <div className="flex flex-col mb-4 md:mb-0 md:mr-6 w-full md:w-auto">
          <h1 className="text-3xl font-bold text-gray-100 mb-2">Lógica de programação</h1>
          <p className="text-gray-400 text-sm mb-4">Desbloqueie o poder do raciocínio lógico e domine a arte de programar.</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-700 rounded-full text-xs font-semibold text-gray-300">INICIANTE</span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-xs font-semibold text-gray-300">LÓGICA</span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-xs font-semibold text-gray-300">LÓGICA DE PROGRAMAÇÃO</span>
          </div>
        </div>
        
      </div>
      <div 
        className="absolute top-1/2 right-4 sm:right-10 transform -translate-y-1/2 p-4  bg-opacity-30 rounded-full backdrop-blur-sm border border-purple-700 shadow-lg" 
        style={{ boxShadow: '0 0 30px rgba(128, 0, 128, 0.5)' }}>
        <img 
          src="https://raw.githubusercontent.com/Gelzieny/de-zero-a-logico/79ae503a971fa094a0392066b4f3cb7d6cbc30c9/public/logo_logica.svg" 
          alt=""
        />
      </div>
    </header>
  )
}