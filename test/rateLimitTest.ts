
import * as express from "express";
import { agent as request } from 'supertest';
import { expect } from 'chai';
import { TestItem } from "./model";
import RateLimit from '../src/models/rateLimit';

export function rateLimitTestFunc(app: express.Application, rateLimit: RateLimit, testItems: TestItem[]) {


    for (let i = 0; i < testItems.length; i++) {
        let curItem = testItems[i];

        describe(`API Unit Tests with IP '${curItem.ip}'`, () => {

            while (curItem.counter < curItem.totalRequest) {

                let idx = curItem.counter + 1;
                let api = `/api/test?ip=${curItem.ip}`;

                it(`[GET] ${api}`, async function () {
                    const res = await request(app).get(api);
                    if (idx <= rateLimit.max) {
                        expect(res.status).to.equal(200);
                        expect(res.body).not.to.be.empty;
                        expect(res.body.state).to.be.true;
                        expect(res.body.data).to.be.an('number');
                    } else {
                        expect(res.status).to.equal(500);
                    }
                });

                curItem.counter++;
            }
        });
    }

}