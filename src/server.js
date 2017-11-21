import express from 'express';
import handleRender from './handleRender';

const server = express();

server.use('/assets', express.static('assets'));
server.get('/*', handleRender);


server.listen(8080, function(){
    console.log('listening on port 8080');
});
