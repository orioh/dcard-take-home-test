
export class TestItem {
    ip: string = ''
    totalRequest: number = 0;
    counter: number = 0;

    constructor(ip: string, total: number) {
        this.ip = ip;
        this.totalRequest = total;
    }

    public reset(){
        this.counter = 0;
    }
}


export class TestConfig {
    total: number;
    items: TestItem[];

    constructor(total: number, items: TestItem[]){
        this.total = total;
        this.items = items;
    }

    public resetAll() {
        this.items.forEach(item=>{
            item.reset();
        });
    }
}