import { ModuleWithProviders } from "@angular/core";
import { TNSFontIconService } from "./services/fonticon.service";
export * from './pipes/fonticon.pipe';
export * from './services/fonticon.service';
export declare const iconConfig: () => TNSFontIconService;
export declare class TNSFontIconModule {
    static forRoot(providedConfig: any): ModuleWithProviders;
}
