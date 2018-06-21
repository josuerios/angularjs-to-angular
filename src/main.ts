import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as angular from 'angular';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { setAngularJSGlobal } from '@angular/upgrade/static';

// Avoid 'angular is not defined' error
setAngularJSGlobal(angular);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
