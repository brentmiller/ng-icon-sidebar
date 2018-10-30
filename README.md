# ng-icon-sidebar
[![NPM](https://nodei.co/npm/ng-icon-sidebar.png?compact=true)](https://nodei.co/npm/ng-icon-sidebar)

An Angular sidebar component which displays a dock for icons when closed.

Try out the **[demo on StackBlitz](https://stackblitz.com/github/brentmiller/ng-icon-sidebar)**.

## Installation

```shell
npm install --save ng-icon-sidebar
```

## Usage

Add `SidebarComponent` to your app module:

```typescript
import { SidebarComponent } from 'ng-icon-sidebar';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, SidebarComponent],
  imports: [BrowserModule],
})
class AppModule {}
```

In your app component, simply add a `<ng-icon-sidebar>` wrapper, then place your content within it.

```typescript
@Component({
  selector: 'app',
  template: `
    <!-- Container for sidebar content. -->
    <ng-icon-sidebar>
      Sidebar contents...
    </ng-icon-sidebar>
  `
})
class AppComponent {}
```

## Behavior

The sidebar opens and closes based on UI events. It is designed to open when the user:

* moves the mouse onto the sidebar
* touches the sidebar
* tabs into the sidebar

Specifically, the sidebar will open on the following events:

* A `mouseenter` event bubbles up to the sidebar element's `<aside>` element.
* A `focusin` event bubbles up to the sidebar element's `<aside>` element.

The sidebar is designed to close when the user:

* moves the mouse out of the sidebar
* touches the part of the screen outside of the sidebar
* tabs out of the sidebar

Specifically, the sidebar will close on the following events:

* A `mouseleave` event bubbles up to the sidebar element's `<aside>` element when none of the sidebar's contents have keyboard focus. (It tracks keyboard focus via `focusin` and `focusout` events.)
* A `focusout` event bubbles up to the sidebar element's `<aside>` element when the mouse is still inside the `<aside>`. (It tracks mouse presence via `mouseenter` and `mouseleave` events.)

Thus you can progamatically open and close the sidebar by dispatching these events from within the sidebar's contents.

## Properties

The sidebar component has a single, read-only property.

| Property | Description |
| -------- | ----------- |
| `opened` | A boolean which indicates whether the sidebar is open or closed. |

## Styling

The sidebar exposes a few CSS classes for convenient styling.

| Class name | Description |
| ---------- | ----------- |
| `ng-icon-sidebar` | Always on the sidebar component's `<aside>` element. |
| `ng-icon-sidebar--opened` | On the sidebar component's `<aside>` element when `opened` is `true`. |
| `ng-icon-sidebar--closed` | On the sidebar component's `<aside>` element when `opened` is `false`. |

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).