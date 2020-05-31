import Usuario from '../models/Usuario';

class SessionController{
	
	async index(req, res){
		let usuario = await Usuario.find();
		return res.status(200).json(usuario);
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
		const { email, nome, tipo } = req.body;
		//return res.status(200).json(email);
		
		let usuario = await Usuario.findOne({email});
		
		if(!usuario){
			usuario = await Usuario.create({email, nome, tipo});
			return res.status(200).json(usuario);
		}
		
		return res.status(400).json({erro:"usuário já cadastrado"});
	}
	
	async update(req, res){
		const { id } = req.params;
		const { email, nome, tipo } = req.body;
		
		
		let usuario = await Usuario.updateOne({ id },{
			nome,
			email,
			tipo,
		});
				
		return res.status(200).json(usuario);
	}
	

}
export default new SessionController;
