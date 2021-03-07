import { Request, Response } from 'express';
import UnifiedResponse from '../models/unified.response';


class TestController {

    /**
     * [Get] /api/test
     */
    public static get(req: Request, res: Response) {
        const rateLimitCounter = parseInt(req.query.rateLimitCounter as string, 10);
        res.json(new UnifiedResponse(true, `Request success`, rateLimitCounter));
    }

}

export default TestController
