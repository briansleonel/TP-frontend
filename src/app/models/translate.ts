export class Translate {
    _id: string;
    source: string;
    target: string;
    input: string;
    result: string;

    constructor(_id?: string, source?:string, target?: string, input?: string, result?: string) {
        this._id = _id;
        this.source = source;
        this.target = target;
        this.input = input;
        this.result = result;
    }
}
