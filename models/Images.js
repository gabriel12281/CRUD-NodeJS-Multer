import { Schema, model } from  "mongoose";

const Images = new Schema({
	originalname:String,
	mimetype:String,
	path:String,
	descripcion:String,
});

export default model("images", Images);