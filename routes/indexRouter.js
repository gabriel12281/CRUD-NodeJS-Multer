import { Router } from "express";

const router = Router();

import Images from "../models/Images";

router.get("/", async(req, res) => {
	const images = await Images.find().lean();

	res.render("index", {images})
});

router.get("/newImg/",(req, res) => res.render("form"))

router.post("/newImg/", async(req, res) => {
	const { originalname, mimetype, filename } = req.file;
	const descripcion = req.body.descripcion;
	
	const path = "/uploads/img/" + filename;

	await Images.create({originalname, mimetype, path, descripcion});

	res.redirect("/");
})

router.get("/editar/:id", async(req, res) => {
	const id = req.params.id;

	const imagen = await Images.findById(id);

	res.render("editar", {imagen});
})

router.post("/editar/:id", async(req, res) => {
	const id = req.params.id;
	const descripcion = req.body.descripcion;

	await Images.findByIdAndUpdate(id, {descripcion});
	res.redirect("/");

})

router.get("/eliminar/:id", async(req, res) => {
	const id = req.params.id;

	const imagen = await Images.findByIdAndDelete(id);

	res.redirect("/");
})

export default router;