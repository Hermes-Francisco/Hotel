import { Router } from 'express';//const { Router } = require('express');

import SessionController from './controllers/SessionController';

import HotelController from './controllers/HotelController';

import ReservaController from './controllers/ReservaController';

const routes = new Router();

routes.get('/', (req, res)=> {
	return res.json({resposta: true});	
});

routes.get('/sessions', SessionController.index);
routes.get('/sessions/:email', SessionController.show);
routes.post('/sessions', SessionController.store);
routes.put('/sessions', SessionController.update);

routes.get('/hoteis/:municipio', HotelController.index);
//routes.get('/hoteis', HotelController.show);
routes.post('/hoteis', HotelController.store);
routes.put('/hoteis', HotelController.update);

routes.post('/hoteis/:hotel_id/reserva', ReservaController.store)
//index, show, update, store, destroy

export default routes;