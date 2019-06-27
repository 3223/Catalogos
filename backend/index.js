const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/habitaciones', require('./routes/habitacion.routes'));
app.use('/api/atracciones', require('./routes/atraccion.routes'));
app.use('/api/contactos', require('./routes/contacto.routes'));
app.use('/api/politicas', require('./routes/politica.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
