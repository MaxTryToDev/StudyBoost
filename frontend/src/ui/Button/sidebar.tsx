import { AuthContext } from "../../contexts/auth-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ children }: { children?: React.ReactNode }) {
	const { auth, setAuthData } = useContext(AuthContext);

	return (
		<div>
			{auth?.data?.email ? (
				<div>
					<Link to="/courses">Mes cours</Link>
					<Link to="/pomodoro">Pomodoro</Link>
					<Link to="/flashcards">Flashcards</Link>
					<Link to="/parameters">Paramètres</Link>
					<Link to="/logout">Se déconnecter</Link>
				</div>
			) : (
				<div>
					<Link to="/login">Se connecter</Link>
					<br></br>
					<Link to="/register">S'inscrire</Link>
				</div>
			)}
		</div>
	);
}
