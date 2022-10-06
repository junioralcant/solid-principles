import http from 'http';
import { createOrderFactory } from '../controllers';

http
  .createServer(async (request, response) => {
    if (request.method === 'POST' && request.url === '/orders') {
      request.on('data', async (data) => {
        const body = JSON.parse(data);

        try {
          await createOrderFactory.handle(body);
          return response.end('Pedido enviado com sucesso');
        } catch (error: any) {
          response.statusCode = 400;
          return response.end(error.message);
        }
      });
    }
  })
  .listen(3333, () => console.log('Server is alive'));
