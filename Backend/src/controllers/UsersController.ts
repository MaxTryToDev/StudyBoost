import catchAsync from "../utils/catchAsync";
import type { Request, Response } from "express";
import usersModel from "../models/users.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Register
export const registerUser = catchAsync(async (req: Request, res: Response) => {
	const { email, password } = req.body;

	// Vérifier qu'un utilisateur avec cet email n'existe pas
	const user = await usersModel.findOne({ email });

	// S'il existe renvoyer une erreur
	//console.log(user)
	if (user) {
		res.status(400).json({
			status: "error",
			message: "User already exists with this email",
		});
		return;
	}

	// Hasher le mot de passe avant de le stocker
	const hashedPassword = await bcrypt.hash(password, 10);
	console.log(hashedPassword, email);
	// Créer l'utilisateur et renvoyer OK
	const userCreated = await usersModel.create({
		email: email,
		password: hashedPassword,
	});
	console.log("user created :" + userCreated);
	res.status(200).json({
		status: "success",
		data: {
			user: userCreated,
		},
	});
});

//Login
export const loginUser = catchAsync(async (req: Request, res: Response) => {
	const { email, password } = req.body;

	// Récupérer l'utilisateur qui a cette adresse e-mail dans la base de données
	const user = await usersModel.findOne({ email });

	// Si l'utilisateur n'existe pas
	if (!user) {
		res.status(400).json({
			status: "error",
			message: "Invalid email",
		});
		return;
	}

	// Si l'utilisateur existe, vérifier le mot de passe
	const isValidPassword = await bcrypt.compare(
		password,
		user.password as string
	);
	// Si le mot de passe est incorrect
	if (!isValidPassword) {
		res.status(400).json({
			status: "error",
			message: "Invalid password",
		});
		return;
	}

	// Si le mot de passe est correct
	const tokenPayload = { id: user._id };
	const token = jwt.sign(tokenPayload, process.env.SECRET as string, {
		expiresIn: "1h",
	});

	// Token de l'utilisateur connecté
	res.json({
		email: user.email,
		token,
	});
});
