import { BrowserModule } from '@angular/platform-browser';
import { Inject, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { ajsAppModule } from './ajs-app/ajs-app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UpgradeModule],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(@Inject(UpgradeModule) public upgrade: UpgradeModule) {}

  /***
   * This function is called after the module has been bootstrapped
   */
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [ajsAppModule.name]);
  }
}
