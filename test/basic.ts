
import { expect } from 'chai';

export class TestTools {

    public static delay(interval: number) {
        return new Promise<boolean>(resolve => {
            setTimeout(() => { resolve(true) }, interval);
        })
    }


    public static mochaDelay(interval) {

        describe(`## mocha delay ${interval} ms ...`, function () {
            this.timeout(interval + 100);

            it(`delay done`, async function () {
                await TestTools.delay(interval);
                expect(true).to.be.true;
            });

        });
    }
}


