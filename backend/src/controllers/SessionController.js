import Usuario from '../models/Usuario';

class SessionController{
	
	async store(req, res){
		const { email } = req.body;
		//return res.status(300).json(email);
		
		let usuario = await Usuario.findOne({email});
		
		if(!usuario){
			usuario = await Usuario.create({email});
		}
		
		return res.json(usuario);
	}

}
export default new SessionController;
