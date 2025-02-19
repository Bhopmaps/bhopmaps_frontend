import { data } from './db.data';
import { routes } from './db.routing';

// Start json-server
const jsonServer  = require('json-server');
const server      = jsonServer.create();
const router      = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port        = 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(jsonServer.rewriter(routes));

// A post request will overwrite the data. To prevent this we transform each POST into a GET that is not specified in complexRoutes array
server.use((req: any, res: any, next: any) => {
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE' || req.method === 'PATCH') {
    req.method = 'GET';
  }
  setTimeout(() => {
    next();
  });
});

server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
