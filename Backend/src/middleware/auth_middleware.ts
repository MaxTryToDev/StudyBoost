//Import des dépendances
import { Request, Response } from "express";
import "dotenv/config";
import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import usersModel from "../models/users.model";

type DecodedToken = {
	id: number;
};
export default async function authMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	//Récupération du token depuis les headers de la requête
	const token = req.headers.authorization;
	//Si le token n'est pas renseigné renvoyer une erreur 401
	if (!token) {
		return res.status(401).send("auth-token missing");
	}
	//Vérification du token
	try {
		//Décodage du token
		const decoded = jwt.verify(token, process.env.SECRET ?? "") as DecodedToken;
		//Une fois le token décodé, il faut récupérer l'utilisateurs associé depuis la BDD
		const user = await usersModel.findOne(decoded.id);

		//Si l'utilisateur n'existe pas
		if (user.length === 0) {
			res.status(401).send("unauthorized");
			return;
		}
		next();
		//Catch de l'erreur
	} catch (err) {
		console.error(err);
		res.status(401).send("unauthorized");
		return;
	}
}
