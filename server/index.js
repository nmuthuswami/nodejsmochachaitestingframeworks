const server = require('./server');

const port = parseInt(process.env.port || '3001',10);
server.set('port', port);

server.listen(server.get('port'),()=>{
    console.log(`Server listening on port ${server.get('port')}`);
});