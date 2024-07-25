import {Link, useLocation} from "react-router-dom";
import {Stack} from "src/ui/layouts/Stack/Stack";
import {ReactNode} from "react";
import classNames from "classnames";

export function Sidebar() {

  return (
    <div className="flex flex-col min-w-[15rem] max-w-[15rem] h-screen  bg-gray-100 py-6 pt-12">

      <div className={"flex flex-col space-y-4"}>
        <img src="/logo.svg" width={128} className={"mx-6"}></img>

        <nav className="flex flex-col h-full w-full px-4">
          <ul className={"flex flex-col"}>
            <NavLink href={"/courses"}>Mes cours</NavLink>
            <NavLink href={"/flashcards"}>Flashcards</NavLink>
            <NavLink href={"/pomodoro"}>Pomodoro</NavLink>
          </ul>
        </nav>
      </div>

      <Stack direction={"col"} gapy={8} className={"mt-auto px-6"}>
        <Link className="text-sm font-medium text-gray-700" to="/parameters">Paramètres</Link>
        <Link className="text-sm font-medium text-gray-700" to="/logout">Se déconnecter</Link>
      </Stack>
    </div>
  );
}

export function NavLink({children, href}: { children: ReactNode, href: string }) {
  const {pathname} = useLocation();

  return <Link className={classNames("text-sm text-gray-800 hover:bg-gray-200 rounded-xl py-2 px-4", {"hover:bg-blue-700 text-white bg-blue-600": pathname.includes(href)})}
               to={href}>{children}</Link>
}