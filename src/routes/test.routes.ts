
import RateLimitController from '../controllers/rateLimit.controller';
import TestController from '../controllers/test.controller';
import BasicRoute from './basic.route'
import RateLimit from '../models/rateLimit';

class TestRoutes extends BasicRoute {

  constructor() {
    super('test');

    /**
     * bind rate limit as middleware for test api
     */
    const rateLimit: RateLimit = { max: 60, intervalInSeconds: 60 };
    if(process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'test' ) {
      rateLimit.max = parseInt(process.env.RATE_LIMIT_MAX, 10) || 10;
      rateLimit.intervalInSeconds = parseInt(process.env.RATE_LIMIT_INTERVAL, 10) || 10;
    }

    console.log(`bind rate limit(max: ${rateLimit.max}, interval: ${rateLimit.intervalInSeconds}) to test router`);

    this.router.use(this.apiRoot, RateLimitController.verify(rateLimit));

    this.setRoutes();
  }

  protected setRoutes() {
    this.router.get(this.api(), TestController.get);
  }
}

export default TestRoutes;
