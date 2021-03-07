import { Request, Response } from 'express';
import UnifiedResponse from '../models/unified.response';


class TestController {

    /**
     * [Get] /api/test
     */
    public static get(req: Request, res: Response) {
        const ip = req.query.clientip;
        const rateLimitCounter = parseInt(req.query.rateLimitCounter as string, 10);
        res.json(new UnifiedResponse(true, `Request(from: ${ip}) success`, rateLimitCounter));
    }

}

export default TestController
