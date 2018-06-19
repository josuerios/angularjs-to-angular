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

## Step 2: Implement a simple todo app in AngularJS

> **Tip:**
> Use different prefixes to differentiate the AngularJS modules from the Angular modules, i.e. `ajs` for AngularJS modules and `ng` for Angular modules.

#### Preparation

- As a requirement for the upgrade you must use _component directives_ as the main primitive for building your UI, avoid lower-level features like `ng-controller`, `ng-include`, and scope inheritance.
- To be Angular compatible, an AngularJS _component directive_ must configure these attributes:
  - `restrict: 'E'` - components are usually used as elements.
  - `scope: {}` - an isolated scope.
  - `bindToController: {}` - component inputs and outputs should be bound to the controller instead of using `$scope`.
  - `controller` and `controllerAs` - components have their own controllers.
  - `template` or `templateUrl` - components have their own templates.
- Or better yet, use the [component API](https://docs.angularjs.org/api/ng/type/angular.Module#component) introduced in AngularJS 1.5 to reduce boilerplate code.

1.  Declare a _Todo_ interface, inside the `app` folder since will be using it in both AngularJS and Angular modules:
    ```typescript
    export interface Todo {
      id: number;
      label: string;
      completed: boolean;
    }
    ```
2.  Create a folder for the AngularJS _Todo_ module named **ajs-todos** inside the root AngularJS folder.
3.  Declare the `todos` AngularJS module.
4.  Add your todo list app implementation.
    1.  Follow the [AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
    2.  Make use of _one way data flow_ using _expression bindings_ (`&`) and _one way bindings_ (`<`)
    3.  Treat `todos` component as a stateful component. Use it to maintain a unique reference of all the todos being displayed and implement `onAdd`, `onComplete` and `onDelete` methods.
    4.  `todo-form` will receive the `onAdd: '&'` callback. Use it to add new todos.
    5.  `todo-list` will receive a `todos` list as `todos: '<'` and the `onComplete` and `onDelete` callbacks.
    6.  `todo-item` will receive a single todo as `todo: '<'` and the `onComplete` and `onDelete` callbacks.
    7.  Use a service named `TodoService` to retrieve an initial list of todos.
    8.  It should look something like this:

        ```
        ┌──────────────────────────────────────────────────────────┐
        │  <todos></todos>                                         │
        │                                                          │
        │  ┌────────────────────────────────────────────────────┐  │
        │  │  <todo-form></todo-form>                           │  │
        │  └────────────────────────────────────────────────────┘  │
        │                                                          │
        │  ┌────────────────────────────────────────────────────┐  │
        │  │  <todo-list><todo-list>                            │  │
        │  │                                                    │  │
        │  │  ┌──────────────────────────────────────────────┐  │  │
        │  │  │  <todo-item></todo-item>                     │  │  │
        │  │  └──────────────────────────────────────────────┘  │  │
        │  │                        .                           │  │
        │  │                        .                           │  │
        │  │                        .                           │  │
        │  │  ┌──────────────────────────────────────────────┐  │  │
        │  │  │  <todo-item></todo-item>                     │  │  │
        │  │  └──────────────────────────────────────────────┘  │  │
        │  │                                                    │  │
        │  └────────────────────────────────────────────────────┘  │
        └──────────────────────────────────────────────────────────┘
        ```

5.  Include the AngularJS `todo` module in the root AngularJS module `ajsApp`.
6.  Run the app, everything should work fine.

