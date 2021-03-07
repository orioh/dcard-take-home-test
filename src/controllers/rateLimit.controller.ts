import { Request, Response } from 'express';
import RateLimit from 'models/rateLimit';
import * as moment from 'moment'
import DataCenter from '../tools/dataCenter';
import UnifiedResponse from '../models/unified.response';

class RateLimitController {

    public static verify(rateLimit: RateLimit) {
        return (req: Request, res: Response, next) => {

            const ip = req.query.ip || req.ip;
            const record = DataCenter.getAddressRecord(ip as string);

            record.mutex.lock(() => {

                const now = moment();

                /**
                 * get elapsed seconds compared to current window start time
                 *  -> if exceed window interval, reset the counter
                 */
                let elapsedSeconds = moment.duration(now.diff(record.windowStartTime)).asMilliseconds() / 1000;
                elapsedSeconds = Math.round(elapsedSeconds * 100) / 100

                if (elapsedSeconds > rateLimit.intervalInSeconds) {
                    record.reset(now);
                }

                /**
                 * now we check if request number reach the limit
                 */
                if (record.counter >= rateLimit.max) {
                    const toWait = Math.round((rateLimit.intervalInSeconds - elapsedSeconds) * 100) / 100 ;
                    const msg = `You(${ip}) have reached '${rateLimit.max}' request limit`
                        + ` within ${rateLimit.intervalInSeconds} seconds,`
                        + ` please try again ${toWait} second(s) later`;
                    res.status(500).json(new UnifiedResponse(false, msg));

                } else {
                    record.counter += 1;
                    req.query.rateLimitCounter = record.counter.toString();
                    next();
                }

                record.mutex.unlock();
            });

        }
    }

}

export default RateLimitController