import {NgModule, ModuleWithProviders} from "@angular/core";
import {TNSFontIconPipe, TNSFontIconPurePipe} from "./pipes/fonticon.pipe";
import {TNSFontIconService} from "./services/fonticon.service";

// for manual imports
export * from './pipes/fonticon.pipe';
export * from './services/fonticon.service';

let config: any;
export const iconConfig = function () {
  return new TNSFontIconService(config);
};

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

  static forRoot(providedConfig: any): ModuleWithProviders {
    config = providedConfig;
    return {
      ngModule: TNSFontIconModule,
      providers: [
        { provide: TNSFontIconService, useFactory: (iconConfig) }
      ]
    };
  }
}
