import Hotel from '../models/Hotel';

class HotelController{
	
	index(req, res){
		return res.json({resposta: false})
		}
		
	async store(req, res){
		
		const { nome, uf, municipio, endereco, nAptos, valorDiaria } = req.body;
		
		let hotel = await Hotel.findOne({nome});
		
		if(!hotel){
			hotel = await Hotel.create({
				"nome":nome,
				"uf":uf,
				"municipio":municipio,
				"endereco":endereco,
				"nAptos":nAptos,
				"valorDiaria":valorDiaria,
			});
			return res.status(200).json(hotel);
		}
		
		return res.status(400).json({erro:"hotel já cadastrado"});
	}

}
export default new HotelController;