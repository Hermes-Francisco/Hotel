import { Schema, model } from 'mongoose';

const HotelSchema = new Schema({
	nome: String,
	uf: String,
	municipio: String,
	endereco: String,
	nAptos: Number,
	valorDiaria: Number,
	nomeImagem: String,
}, {
	toJSON:{
		virtuals : true,
	}
});

HotelSchema.virtual('imagem_url').get(() => {
	return `http://localhost:3000/imagens/${this.nomeImagem}`
})
export default model('Hotel', HotelSchema);