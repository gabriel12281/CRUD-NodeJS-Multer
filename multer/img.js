import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
	destination: path.join(__dirname, "../public/uploads/img"),
	filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const fileFilter = (req, file, cb) => {
		if (file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
			cb(null, true)
		} else {
			cb("Asegurate de subir una imagen Valida");
		}
	}

const upload = multer({
	storage,
	fileFilter,
	limits:100000
}).single("image");

export default upload;