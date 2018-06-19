# AngularJS migration to Angular
Source code for NG-BAIRES **AngularJS migration to Angular** presentation Demo App.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Step 0: Kick-Off
1.  Create a new project using Angular CLI.
    ```bash
    $ ng new angularjs-to-angular
    ```

## Step 1: Boot your hybrid app using both frameworks

1.  Install AngularJS:
    ```bash
    $ npm install angular
    $ npm install --save-dev @types/angular
    ```
2.  Install Angular Upgrade package:
    ```bash
    $ npm install @angular/upgrade
    ```
3.  Create a folder named **ajs-app** for the AngularJS module.
4.  Create an AngularJS module named **ajsApp** for the root component and future AngularJS features.
5.  Create a basic AngularJS component named **ajs-root** with the following template content `<app-root></app-root>`. This will be our new root component and will replace **app-root** as the application root. Include it in your AngularJS root module.
6.  In `app.module.ts`:
    - Import `UpgradeModule` from `@angular/upgrade/static` and add it to the NgModule imports array.
    - Move the `AppComponent` from the `bootstrap` array to the `entryComponents` array in the `NgModule` declaration.
    - Add a constructor to the AppModule class:

      ```typescript
      constructor(@Inject(UpgradeModule) public upgrade: UpgradeModule) {}
      ```

    - Implement a function named `ngDoBootstrap` in the AppModule class. This bootstraps programmatically the AngularJS app:

      ```typescript
      ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, [ajsAppModule.name]);
      }
      ```

7.  In `main.ts` import `angular` and the `setAngularJSGlobal` function and call it:

    ```typescript
    setAngularJSGlobal(angular);
    ```

8.  In your AngularJS root module declare a new **directive** called `ajsRoot` and use the `downgradeComponent` function with `AppComponent`:

    ```typescript
    ajsAppModule.directive('ajsRoot', downgradeComponent({ component: AppComponent }));
    ```

9.  Replace `<app-root></app-root>` with `<ajs-root></ajs-root>` in your `index.html`.
10. Run `ng serve --open`, you should see the same page of a newly generated Angular CLI project. It's the original `app-root` component, wrapped inside the `<ajs-root>` AngularJS component. This means you have successfully booted your hybrid app.

