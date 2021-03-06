import { Request, Response } from 'express';
import RateLimit from 'models/rateLimit';
import * as moment from 'moment'
import DataCenter from '../tools/dataCenter';
import UnifiedResponse from '../models/unified.response';

class RateLimitController {

    public static verify(rateLimit: RateLimit) {
        return (req: Request, res: Response, next) => {

            let ip = req.query.ip || req.ip;
            let record = DataCenter.getAddressRecord(ip as string);

            record.mutex.lock(() => {

                let now = moment();

                /**
                 * check if the first request of current ip
                 */
                if(!record.windowStartTime){
                    record.reset(now);
                }

                /**
                 * get elapsed seconds compared to current window start time
                 *  -> if exceed window size, reset the counter
                 */
                let elapsedSeconds = now.diff(record.windowStartTime, 'seconds');
                if( elapsedSeconds > rateLimit.intervalInSeconds) {
                    record.reset(now);
                } 
                
                /**
                 * now we check if request number reach the limit
                 */
                if(record.counter >= rateLimit.max) {
                    let toWait = rateLimit.intervalInSeconds - elapsedSeconds;
                    let msg = `you(${ip}) have reached the request limit '${rateLimit.max}'`
                                + ` within ${rateLimit.intervalInSeconds} seconds,`
                                + ` please try again ${toWait} second(s) later`;
                    res.status(500).json(new UnifiedResponse(false, msg));
                    
                }else{
                    record.counter += 1;
                    res.json(new UnifiedResponse(true, `request success`, record.counter));

                    /**
                     * should just allow it to pass through target api,
                     *  --> we simplified it for testing by return result directly
                     */
                    // next();
                }


                record.mutex.unlock();
            });

        }
    }

}

export default RateLimitController