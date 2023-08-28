interface Options {
    timer?: number;
}
export declare class Updater {
    oldScript: string[];
    newScript: string[];
    dispatch: Record<string, Function[]>;
    constructor(options: Options);
    init(): Promise<void>;
    getHtml(): Promise<string>;
    parserScript(html: string): string[];
    on(key: 'no-update' | 'update', fn: Function): this;
    compare(oldArr: string[], newArr: string[]): void;
    timing(time?: number): void;
}
export default Updater;
