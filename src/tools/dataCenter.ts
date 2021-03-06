import AddressRecord from "../models/addressRecord";


class DataCenter {

    /**
     * use in-memory database
     */
    private static addressRecord: Map<string, AddressRecord> = new Map<string, AddressRecord>();

    public static getAddressRecord(ip: string): AddressRecord {
        if(!this.addressRecord.has(ip)){
            this.addressRecord.set(ip, new AddressRecord(ip));
        }
        return this.addressRecord.get(ip);
    }
}

export default DataCenter;