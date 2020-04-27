import { Schema, model } from 'mongoose';

const ReservaSchema = new Schema({
	nome: String,
	uf: String,
	municipio: String,
	endereco: String,
	nAptos: Number,
	valorDiaria: Number,
});

export default model('Reserva', ReservaSchema);