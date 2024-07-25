import multer from "multer";
import * as path from "node:path";


// Configuration de multer pour le stockage des fichiers
const storage = multer.diskStorage({
  destination: (req: Express.Request, file: any, cb: CallableFunction) => {
    cb(null, './files/'); // Répertoire où les fichiers seront enregistrés
  },
  filename: (req: Express.Request, file: any, cb: CallableFunction) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Initialiser l'upload avec la configuration de storage
export const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limite de taille de fichier (10 Mo)
  fileFilter: (req: Express.Request, file: any, cb: CallableFunction) => {
    // Vérifier le type MIME pour les fichiers PDF
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Seuls les fichiers PDF sont autorisés!'), false);
    }
  }
});