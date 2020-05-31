import Reserva from '../models/Reserva';
import Usuario from '../models/Usuario';
import Hotel from '../models/Hotel';

class ReservaController{
	
	async index(req, res){
		const { usuario_id } = req.params;

		let usuario = await Usuario.findOne({ _id: usuario_id }).catch((e)=>{return res.json(e)});
		
		if(!usuario)return res.status(404).json({mensagem: 'usuario não encontrado'});
		let reserva;
		if(usuario.tipo == "gerente")reserva = await Reserva.find().catch((e)=>{});
		else reserva = await Reserva.find({ responsavel : {_id: usuario_id }}).catch((e)=>{});
		return res.status(200).json(reserva);
	}
	
	async store(req, res){
		const { dataInicial, dataFinal, qtdeHospedes } = req.body;
		const { hotel_id } = req.params;
		const { usuario_id } = req.headers;

		/*const Schema = yup.object().shape({
			dataInicial : yup.date().required('data inicial inválida'),
			dataFinal : yup.date().required('data final inválida'),
			qtdeHospedes : yup.number().required().min(1, 'deve haver pelo menos um hospede')
		})*/
		
		let hotel = Hotel.findOne({ _id: hotel_id }).catch((e)=>{return res.json(e)});
		let usuario = await Usuario.findOne({ _id: usuario_id }).catch((e)=>{return res.json(e)});
		
		if(!hotel)return res.status(404).json({mensagem: 'hotel não encontrado'});
		if(!usuario)return res.status(404).json({mensagem: 'usuario não encontrado'});
		
		if(usuario.tipo != "cliente")return res.status(403).json({"mensagem":"usuario não autorizado"});

		let reserva = await Reserva.create({ responsavel: usuario_id, hotel: hotel_id, dataInicial, dataFinal, qtdeHospedes });
		
		await reserva.populate('responsavel').populate('hotel').execPopulate();
		
		return res.json(reserva);
		
	}
	async destroy(req, res){
		const { usuario_id } = req.params;
		const { reserva_id } = req.body;

		let usuario = await Usuario.findOne({ _id: usuario_id }).catch((e)=>{return res.json(e)});
		
		if(!usuario)return res.status(404).json({mensagem: 'usuario não encontrado'});
		
		if(usuario.tipo == "gerente")await Reserva.deleteOne({_id : reserva_id}).catch((e)=>{});
		else {
			await Reserva.deleteOne({_id : reserva_id, responsavel : {_id: usuario_id }}).catch((e)=>{res.status(403).json(e)});;
		}
		return res.status(200).json({deletado});
	}
	
}
export default new ReservaController;
