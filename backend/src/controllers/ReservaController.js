import Reserva from '../models/Reserva';
import Usuario from '../models/Usuario';
import Hotel from '../models/Hotel';

class ReservaController{
	
	async index(req, res){
		const { usuario_id } = req.params;
		let reserva = await Reserva.find({ responsavel : {_id: usuario_id }}).catch((e)=>{});
		return res.status(200).json(reserva);
	}
	
	async store(req, res){
		const { dataInicial, dataFinal, qtdeHospedes } = req.body;
		const { hotel_id } = req.params;
		const { usuario_id } = req.headers;
		
		let hotel = Hotel.findOne({ _id: hotel_id }).catch((e)=>{return res.json(e)});
		let usuario = Usuario.findOne({ _id: usuario_id }).catch((e)=>{return res.json(e)});
		
		if(!hotel)return res.status(404).json({mensagem: 'hotel não encontrado'});
		if(!usuario)return res.status(404).json({mensagem: 'usuario não encontrado'});
		
		let reserva = await Reserva.create({ responsavel: usuario_id, hotel: hotel_id, dataInicial, dataFinal, qtdeHospedes });
		
		await reserva.populate('responsavel').populate('hotel').execPopulate();
		
		return res.json(reserva);
		
	}
	
}
export default new ReservaController;
