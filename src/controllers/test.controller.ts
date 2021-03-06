import { Request, Response } from 'express';
import UnifiedResponse from '../models/unified.response';


class TestController {

    /**
     * [Get] /api/test
     */
    public static get(req: Request, res: Response) {

        res.json(new UnifiedResponse(true, 'okok'));
    }

}

export default TestController
