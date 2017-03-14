import {NgModule, ModuleWithProviders} from "@angular/core";
import {TNSFontIconPipe, TNSFontIconPurePipe} from "./pipes/fonticon.pipe";
import {TNSFontIconService} from "./services/fonticon.service";

// for manual imports
export * from './pipes/fonticon.pipe';
export * from './services/fonticon.service';


@NgModule({
    declarations: [
        TNSFontIconPipe,
        TNSFontIconPurePipe
    ],
    exports: [
        TNSFontIconPipe,
        TNSFontIconPurePipe
    ]
})
export class TNSFontIconModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TNSFontIconModule,
            providers: [TNSFontIconService]
        };
    }
}
