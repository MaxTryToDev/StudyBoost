import { AuthContext } from "../contexts/auth-context";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "src/ui/Sidebar";

export default function Layout({ children }: { children?: React.ReactNode }) {
	//const { auth, setAuthData } = useContext(AuthContext);

	return <div className="h-full w-full flex flex-row">
		<Sidebar/>
		<Container>
			<Outlet/>
		</Container>
	</div>
}


function Container({ children }: { children?: React.ReactNode }) {
	return <div className=" p-12 h-full w-full overflow-scroll">{children}</div>
}
