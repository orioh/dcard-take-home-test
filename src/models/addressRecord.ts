
import locks = require('locks');
import * as moment from 'moment'

class AddressRecord {

    ip: string = '';
    mutex = locks.createMutex();
    windowStartTime: moment.Moment = moment();
    counter: number = 0;

    constructor(ip: string) {
        this.ip = ip;
    }

    public reset(timestamp: moment.Moment) {
        this.windowStartTime = timestamp;
        this.counter = 0;
    }

}


export default AddressRecord;