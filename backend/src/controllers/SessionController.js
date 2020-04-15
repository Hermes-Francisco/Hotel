import Usuario from '../models/Usuario';
import Hotel from '../models/Hotel';

class SessionController{
	
	index(req, res){return res.json({resposta: false})}
	
	async store(req, res){
		const { email } = req.body;
		//return res.status(200).json(email);
		
		let usuario = await Usuario.findOne({email});
		
		if(!usuario){
			usuario = await Usuario.create({email});
			return res.status(200).json(usuario);
		}
		
		return res.status(400).json({erro:"usuário já cadastrado"});
	}
	
	async storeHotel(req, res){
		
		const { nome } = req.body;
		const { uf } = req.body;
		const { municipio } = req.body;
		const { endereco } = req.body;
		
		let hotel = await Hotel.findOne({nome});
		
		if(!hotel){
			hotel = await Hotel.create({
				"nome":nome,
				"uf":uf,
				"municipio":municipio,
				"endereco":endereco,
			});
			return res.status(200).json(hotel);
		}
		
		return res.status(400).json({erro:"hotel já cadastrado"});
	}

}
export default new SessionController;
