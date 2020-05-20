import { Schema, model } from 'mongoose';

const HotelSchema = new Schema({
	nome: String,
	uf: String,
	municipio: String,
	endereco: String,
	nAptos: Number,
	valorDiaria: Number,
	nomeImagem: String,
});

export default model('Hotel', HotelSchema);