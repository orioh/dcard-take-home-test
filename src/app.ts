import * as express from "express";
import * as bodyParser from "body-parser";
import cors = require('cors');
import routes from './routes/routes';

const EXPRESS_APP: express.Application = express();

EXPRESS_APP.use(bodyParser.json());
EXPRESS_APP.use(bodyParser.urlencoded({ extended: false }));
EXPRESS_APP.use(cors());

EXPRESS_APP.use('/', express.static('public'))


for (const route of routes) {
  EXPRESS_APP.use(route.getApiPrefix(), route.getRouter());
}

export { EXPRESS_APP }

