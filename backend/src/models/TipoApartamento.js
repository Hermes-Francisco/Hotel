import { Schema, model } from 'mongoose';

const HotelSchema = new Schema({
	tipo: String,
	preco: float,
});

export default model('Hotel', HotelSchema);