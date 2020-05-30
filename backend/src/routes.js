import { Router } from 'express';//const { Router } = require('express');

import SessionController from './controllers/SessionController';
import HotelController from './controllers/HotelController';
import ReservaController from './controllers/ReservaController';

import multer from 'multer';
import uploadConfig from './config/upload';

const routes = new Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res)=> {
	return res.json({resposta: true});	
});

routes.get('/sessions', SessionController.index);
routes.get('/sessions/:email', SessionController.show);
routes.post('/sessions', SessionController.store);
routes.put('/sessions', SessionController.update);

routes.get('/hoteis/:municipio', HotelController.index);
//routes.get('/hoteis/:hotel_id', HotelController.show);
routes.post('/hoteis', upload.single('imagem'), HotelController.store);
routes.put('/hoteis', HotelController.update);

routes.post('/hoteis/:hotel_id/reserva', ReservaController.store)
routes.get('/sessions/:usuario_id/reservas', ReservaController.index)
//index, show, update, store, destroy

export default routes;