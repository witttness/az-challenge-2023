import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { MenuService } from './api/menu.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    MenuService ]
})
export class DataModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<DataModule> {
        return {
            ngModule: DataModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: DataModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('DataModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
