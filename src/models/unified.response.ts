
class UnifiedResponse {
    state: boolean = false;
    message: string = '';
    data: any;

    constructor(state:boolean, message:string, data?:any) {
        this.state = state;
        this.message = message;
        this.data = data;
    }
}

export default UnifiedResponse;