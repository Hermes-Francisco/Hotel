import Hotel from '../models/Hotel';
import Usuario from '../models/Usuario';

class HotelController{
	
	async index(req, res){ //recuperar lista
	
		const { municipio } = req.params;
		
		let Hoteis = await Hotel.find({ municipio })
		
		return res.json({Hoteis})
	}
	
	async show(req, res){
		
		const { nome } = req.params;
		
		let hotel = await Hotel.findOne({nome});
		
		if(hotel){
			return res.status(200).json(hotel);
		}
		return res.status(404).json({erro:"Hotel n?o encontrado"})	
		
	}
		
	async store(req, res){
		
		const { nome, uf, municipio, endereco, nAptos, valorDiaria } = req.body;
		
		const { user_id } = req.headers;

		const nomeImagem = req.file.filename;
		
		try{
		let usuario = await Usuario.findOne({_id : user_id});
		if(usuario.tipo != "gerente")return res.status(403).json({"mensagem":"usuario não aut"});
		}catch(e){
		return res.status(403).json({"mensagem":"usuario não autorizado"})
		}
		
		console.log(user_id);
		
		let hotel = await Hotel.findOne({nome});
		
		if(!hotel){
			hotel = await Hotel.create({
				nome,
				uf,
				municipio,
				endereco,
				nAptos,
				valorDiaria,
				nomeImagem,
			});
			return res.status(200).json(hotel);
		}
		
		return res.status(400).json({erro:"hotel j? cadastrado"});
	}
	
	async update(req, res){
		
		const { user_id } = req.headers;
		const { hotel_id, nome, uf, municipio, endereco, nAptos, valorDiaria } = req.body;

		try{
			let usuario = await Usuario.findOne({_id : user_id});
			if(usuario.tipo != "gerente")return res.status(403).json({"mensagem":"usuario não autorizado"});
			}catch(e){
			return res.status(403).json({"mensagem":"usuario não autorizado"})
		}
		
		let hotel = await Hotel.updateOne({ _id : hotel_id },{
			nome,
			uf,
			municipio,
			endereco,
			nAptos,
			valorDiaria,
		});
		
		return res.status(200).json(hotel);
	}

	async destroy(req, res){
		const { user_id } = req.headers;
		const { hotel_id } = req.body;

		try{
			let usuario = await Usuario.findOne({_id : user_id});
			if(usuario.tipo != "gerente")return res.status(403).json({"mensagem":"usuario não autorizado"});
			}catch(e){
			return res.status(403).json({"mensagem":"usuario não autorizado"})
		}
		await Hotel.deleteOne({ _id : hotel_id });
		res.json({deleted})		
	}

}
export default new HotelController;