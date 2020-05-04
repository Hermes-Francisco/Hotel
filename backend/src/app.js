import express from 'express'; //const express = require('express');
import routes from './routes'; //const routes = require('./routes');
import mongoose from 'mongoose'
import cors from 'cors';

class App{
	
	constructor(){
		this.app = express();
		
		mongoose.set('useNewUrlParser', true);
		mongoose.set('useFindAndModify', false);
		mongoose.set('useCreateIndex', true);
		mongoose.set('useUnifiedTopology', true);
		mongoose.connect('mongodb+srv://WebHotel2020:98308465@trabalhoweb-hotel-rwlha.mongodb.net/test?retryWrites=true&w=majority');
		
		this.middlewares();
		this.routes();
	}
	
	middlewares(){
		this.app.use(express.json());
		this.app.use(cors());
	}
	
	routes(){
		this.app.use(routes);
	}
}

export default new App().app;