import { Router } from 'express';//const { Router } = require('express');

import SessionController from './controllers/SessionController';

import AdministracaoController from './controllers/AdministracaoController';

const routes = new Router();

routes.get('/', (req, res)=> {
	return res.json({resposta: true});	
});

routes.post('/sessions', SessionController.store);

routes.post('/hotel', AdministracaoController.storeHotel);

routes.get('/sessions', SessionController.index);

export default routes;