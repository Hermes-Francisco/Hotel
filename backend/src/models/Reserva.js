import { Schema, model } from 'mongoose';

const ReservaSchema = new Schema({
	responsavel: { type: Screma.Types.ObjectId, ref: 'Usuario' },
	hotel: { type: Screma.Types.ObjectId, ref: 'Hotel' },
	dataInicial: String,
	dataFinal: String,
	qtdeHospedes: Number,
});

export default model('Reserva', ReservaSchema);