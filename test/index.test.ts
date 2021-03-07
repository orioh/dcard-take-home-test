
/**
 * define testing enviroment
 */
import RateLimit from '../src/models/rateLimit';

let rateLimit: RateLimit = {
    max: 15,
    intervalInSeconds: 5
};

process.env.NODE_ENV = 'TEST';
process.env.RATE_LIMIT_MAX = rateLimit.max.toString();
process.env.RATE_LIMIT_INTERVAL = rateLimit.intervalInSeconds.toString();

import { EXPRESS_APP as app } from '../src/app';
import { TestItem, TestConfig } from './model';
import { rateLimitTestFunc } from './rateLimitTest';
import { TestTools } from './basic';


/**
 * create testing items, for looping
 */
let testConfig: TestConfig = new TestConfig(
    2,
    [
        new TestItem('', 20),
        new TestItem('127.0.0.1', 20),
        new TestItem('127.0.0.2', 20),
    ]
);


/**
 * we basically want to test if the rate limit mechanism really work
 *  - within interval, allow only "max" requests for specific ip
 *  - another test cycle should get same result as first one, 
 *      (we applied delay(interval) before start it)
 */
describe('Rate Limit Test Started', () => {

    for (let i = 0; i < testConfig.total; i++) {
        testConfig.resetAll();
        rateLimitTestFunc(app, rateLimit, testConfig.items);

        if (i === testConfig.total - 1) { break; }
        TestTools.mochaDelay(rateLimit.intervalInSeconds * 1000 + 100);
    }
})

