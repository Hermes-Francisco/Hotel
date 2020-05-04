import Reserva from '../models/Reserva';
import Usuario from '../models/Usuario';
import Hotel from '../models/Hotel';

class ReservaController{
	
	async index(req, res){
		const { responsavel } = req.body;
		let reserva = await Reserva.find({ Responsavel });
		return res.status(200).json(reserva);
	}
	
	async store(req, res){
		const { dataInicial, dataFinal, qtdeHospedes } = req.body;
		const { hotel_id } = req.params;
		const { usuario_id } = req.headers;
		
		let hotel = Hotel.findOne({ _id: hotel_id });
		let usuario = Usuario.findOne({ _id: usuario_id });
		
		if(!hotel)return res.status(404).json({mensagem: 'hotel não encontrado'});
		if(!usuario)return res.status(404).json({mensagem: 'usuario não encontrado'});
		
		let reserva = await Reserva.create({ responsavel: usuario_id, hotel: hotel_id, dataInicial, dataFinal, qtdeHospedes });
		
		await reserva.populate('responsavel').populate('hotel').execPopulate();
		
		return res.json(reserva);
		
	}
	
}
export default new ReservaController;
