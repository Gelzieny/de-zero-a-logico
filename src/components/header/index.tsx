export function Header() {
  return (
    <>
      <nav className="bg-gray-800 p-4 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-50 shadow-md">
        <img 
          src="https://github.com/Gelzieny/de-zero-a-logico/blob/main/public/logo.png?raw=true" 
          alt="Rocketseat Logo" 
          className="h-8 rounded flex-shrink-0"
        />

        <div className="flex-1 flex justify-center w-full md:w-auto order-last md:order-none">
          <div className="relative max-w-md w-full">
            <input
              type="text"
              placeholder="Busque por assuntos e aulas"
              className="bg-gray-700 text-gray-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-600 w-full transition-all duration-200"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-4 flex-shrink-0">
          <button className="relative p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
            <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-purple-500"></span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <img src="https://github.com/Gelzieny.png" alt="Avatar do Usuário" className="h-9 w-9 rounded-full border-2 border-purple-500" />
              <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 border border-gray-800"></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}