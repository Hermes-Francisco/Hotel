import express from 'express'; //const express = require('express');
import routes from './routes'; //const routes = require('./routes');
import mongoose from 'mongoose'

class App{
	
	constructor(){
		this.app = express();
		
		mongoose.connect('mongodb+srv://WebHotel2020:98308465@trabalhoweb-hotel-rwlha.mongodb.net/test?retryWrites=true&w=majority',{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		
		this.middlewares();
		this.routes();
	}
	
	middlewares(){
		this.app.use(express.json());
	}
	
	routes(){
		this.app.use(routes);
	}
}

export default new App().app;