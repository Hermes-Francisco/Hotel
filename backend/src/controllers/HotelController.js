import Hotel from '../models/Hotel';

class HotelController{
	
	async index(req, res){ //recuperar lista
	
		const { municipio } = req.body;
		
		let Hoteis = await Hotel.find({ municipio })
		
		return res.json({Hoteis})
	}
		
	async store(req, res){
		
		const { nome, uf, municipio, endereco, nAptos, valorDiaria } = req.body;
		
		let hotel = await Hotel.findOne({nome});
		
		if(!hotel){
			hotel = await Hotel.create({
				nome,
				uf,
				municipio,
				endereco,
				nAptos,
				valorDiaria,
			});
			return res.status(200).json(hotel);
		}
		
		return res.status(400).json({erro:"hotel já cadastrado"});
	}
	
	async update(req, res){
		
		const { hotel_id, nome, uf, municipio, endereco, nAptos, valorDiaria } = req.body;
		
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

}
export default new HotelController;