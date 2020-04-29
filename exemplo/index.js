const express = require('express'); //carregando o framework

const server = express(); //instanciando a constante do servidor

server.use(express.json());

// Middleware -> camada intermediária entre requisição e resposta

//isso cria um middleware global
server.use((req, res, next)=>{
	console.log("Middleware interceptou");
	return next();
});

//criação de um middleware local
function checkId(req, res, next){
	if(req.params.id >= hoteis.length){
		return res.status(400).json({mensagem: 'Id não existe'});
	}
	return next();
}

var fs = require('fs');

const hoteis = [
	{nome:'abba', municipio: 'Goiania'},
	{nome:'5 Stars', municipio : 'BH'},
	{nome:'someBody', municipio: 'Betim'}

]

server.get('/hoteis', (req, res) => {
	console.log('rota acionada')
	return res.json(hoteis);
});
server.get('/hoteis/:id', checkId, (req, res) => {
	const{id} = req.params;
	return res.json(hoteis[id]);
});
server.post('/hoteis', (req, res) => {
	const { nome } = req.body;
	const { municipio } = req.body;
	
	hoteis.push({nome: nome, municipio: municipio});
	return res.json(hoteis);
});

server.put('/hoteis/:id', checkId, (req, res) => {
	const { id } = req.params;
	const { nome } = req.body;
	const { municipio } = req.body;
	
	hoteis[id] = {nome: nome, municipio: municipio};
	return res.json(hoteis);
});
server.delete('/hoteis/:id', checkId, (req, res) => {
	const { id } = req.params;
	const { nome } = req.body;
	const { municipio } = req.body;
	
	hoteis.splice(id, 1);
	return res.json(hoteis);
});

//server.get('/hotel', (req,res))

server.listen('3000');