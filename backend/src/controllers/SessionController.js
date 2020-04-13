import Usuario from '../models/Usuario';

class SessionController{
	
	index(req, res){return res.json({resposta: false})}
	
	async store(req, res){
		const { email } = req.body;
		return res.status(200).json(email);
		
		let usuario = await Usuario.findOne({email});
		
		if(!usuario){
			usuario = await Usuario.create({email});
		}
		
		return res.json(usuario);
	}

}
export default new SessionController;
