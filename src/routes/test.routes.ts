
import RateLimitController from '../controllers/rateLimit.controller';
import TestController from '../controllers/test.controller';
import BasicRoute from './basic.route'


class TestRoutes extends BasicRoute {
  
    constructor() {
      super('test');

      /**
       * bind rate limit as middleware for test api
       */
      this.router.use(this.apiRoot, RateLimitController.verify({max: 60, intervalInSeconds: 60}));

      this.setRoutes();
    }
  
    protected setRoutes() {
      this.router.get(this.api(), TestController.get);
    }
  }
  
export default TestRoutes;