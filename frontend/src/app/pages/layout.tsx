import { AuthContext } from "../contexts/auth-context";
import { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "src/ui/Sidebar";
import { Navigate } from "react-router-dom";

export default function Layout({ children }: { children?: React.ReactNode }) {
	const { auth, setAuthData } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => { 	
        if (!auth?.data?.email) {
            navigate("/login");
        }
    }, [auth, navigate]);

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
