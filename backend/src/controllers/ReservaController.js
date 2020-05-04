import Reserva from '../models/Reserva';

class SessionController{
	
	async index(req, res){
		let reserva = await Reserva.find();
		return res.status(200).json(reserva);
	}
	
	async show(req, res){
		
		const { email } = req.params;
		let usuario = await Usuario.findOne({email});
		
		if(usuario){
			return res.status(200).json(usuario);
		}
		
		return res.status(404).json({erro:"usuário não encontrado"});
		
	}
	
	async store(req, res){
		const { email } = req.body;
		const { nome } = req.body;
		//return res.status(200).json(email);
		
		let usuario = await Usuario.findOne({email});
		
		if(!usuario){
			usuario = await Usuario.create({email, nome});
			return res.status(200).json(usuario);
		}
		
		return res.status(400).json({erro:"usuário já cadastrado"});
	}
	

}
export default new SessionController;