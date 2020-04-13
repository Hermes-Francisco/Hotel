import { Router } from 'express';//const { Router } = require('express');

import SessionController from './controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res)=> {
	return res.json({resposta: true});	
});

routes.post('/sessions', SessionController.store);

export default routes;