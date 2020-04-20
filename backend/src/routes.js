import { Router } from 'express';//const { Router } = require('express');

import SessionController from './controllers/SessionController';

import HotelController from './controllers/HotelController';

const routes = new Router();

routes.get('/', (req, res)=> {
	return res.json({resposta: true});	
});

routes.post('/sessions', SessionController.store);

routes.post('/hoteis', HotelController.store);

routes.get('/sessions', SessionController.index);

export default routes;