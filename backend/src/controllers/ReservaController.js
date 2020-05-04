import Reserva from '../models/Reserva';

class ReservaController{
	
	async index(req, res){
		const { responsavel } = req.body;
		let reserva = await Reserva.find({ Responsavel });
		return res.status(200).json(reserva);
	}
	
	async store(req, res){
		const { usuario_id, dataInicial, dataFinal, qtdeHospedes } = req.body;
		const { hotel_id } = req.params;
		
		let reserva = await Reserva.create({ responsavel: usuario_id, hotel: hotel_id, dataInicial, dataFinal, qtdeHospedes });
		
		await reserva.populate('responsavel').populate('hotel').execPopulate();
		
		return res.json(reserva);
		
	}
	
}
export default new ReservaController;
