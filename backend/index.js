const app = require('./app');
const config = require('./config');

app.listen(config.port, () => {
    console.log('listening on port ' + config.port);
});

app.get('/', (req, res) => {
    res.send({message: 'Hola Mundo'})
})