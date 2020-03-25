const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//listar as ongs
routes.get('/ongs', OngController.index )
//adionar ong
routes.post('/ongs', OngController.create);

//listar casos de uma determinada ong
routes.get('/profile', ProfileController.index);

//lidys incidents
routes.get('/incidents', IncidentController.index)
//adicionar incidents
routes.post('/incidents', IncidentController.create)
//deletando incidents
routes.delete('/incidents/:id', IncidentController.delete)



module.exports = routes;

