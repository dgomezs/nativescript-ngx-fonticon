import { BehaviorSubject } from "rxjs/BehaviorSubject";
export declare class TNSFontIconService {
    private config;
    static debug: boolean;
    filesLoaded: BehaviorSubject<any>;
    css: any;
    private _currentName;
    constructor(config: any);
    loadCss(): void;
    private loadFile(path);
    private mapCss(data);
}