import Hotel from '../models/Hotel';

class AdministracaoController{
	
	async storeHotel(req, res){
		
		const { nome } = req.body;
		const { uf } = req.body;
		const { municipio } = req.body;
		const { endereco } = req.body;
		const { nApartamentos } = req.body;
		const { valorDiaria } = req.body;
		
		let hotel = await Hotel.findOne({nome});
		
		if(!hotel){
			hotel = await Hotel.create({
				"nome":nome,
				"uf":uf,
				"municipio":municipio,
				"endereco":endereco,
				"nApartamentos":nApartamentos,
				"valorDiaria":valorDiaria,
			});
			return res.status(200).json(hotel);
		}
		
		return res.status(400).json({erro:"hotel já cadastrado"});
	}

}
export default new AdministracaoController;