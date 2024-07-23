import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="flex w-[15rem] h-screen">
      <nav className="flex flex-col h-full w-full py-6 px-4 bg-slate-100">
        <img className="mb-8" src="/logo.svg"></img>
        <Link className="text-lg font-medium text-gray-800 hover:text-white hover:bg-blue-600 rounded-md p-2 mb-2" to="/courses">Mes cours</Link>
        <Link className="text-lg font-medium text-gray-800 hover:text-white hover:bg-blue-600 rounded-md p-2 mb-2" to="/pomodoro">Pomodoro</Link>
        <Link className="text-lg font-medium text-gray-800 hover:text-white hover:bg-blue-600 rounded-md p-2" to="/flachcards">Flachcards</Link>
        <div className="flex-1"></div>
        <Link className="text-lg font-medium text-gray-800 hover:text-white hover:bg-blue-600 rounded-md p-2 mb-2" to="/parameters">Paramètres</Link>
        <Link className="text-lg font-medium text-gray-800 hover:text-white hover:bg-blue-600 rounded-md p-2" to="/logout">Se déconnecter</Link>
      </nav>
    </div>
  );
}