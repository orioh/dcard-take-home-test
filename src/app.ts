import * as express from "express";
import * as bodyParser from "body-parser";
import routes from './routes/routes';

const EXPRESS_APP: express.Application = express();

EXPRESS_APP.use(bodyParser.json());
EXPRESS_APP.use(bodyParser.urlencoded({ extended: false }));

for (const route of routes) {
  EXPRESS_APP.use(route.getApiPrefix(), route.getRouter());
}

export { EXPRESS_APP }

