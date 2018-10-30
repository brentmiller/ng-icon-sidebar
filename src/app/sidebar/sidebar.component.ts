import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-icon-sidebar',
  template: `
    <aside aria-label="Icon Sidebar"
           class="ng-icon-sidebar ng-icon-sidebar--{{ opened ? 'opened' : 'closed' }}"
           (focusin)="onFocusIn()"
           (focusout)="onFocusOut()"
           (mouseenter)="onMouseEnter()"
           (mouseleave)="onMouseLeave()"
           role="complementary">
      <ng-content></ng-content>
    </aside>
  `,
  styles: [
    `
      .ng-icon-sidebar {
        bottom: 0;
        left: 0;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        position: absolute;
        top: 0;
        transition: 0.25s;
        z-index: 99999999;
      }

      .ng-icon-sidebar--closed {
        width: 48px;
      }

      .ng-icon-sidebar--opened {
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
        width: 256px;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  private isOpen = false;
  private isFocusIn = false;
  private isMouseIn = false;

  public get opened(): boolean {
    return this.isOpen;
  }

  public onFocusIn(): void {
    this.isFocusIn = true;
    this.isOpen = true;
  }

  public onFocusOut(): void {
    this.isFocusIn = false;
    if (!this.isMouseIn) {
      this.isOpen = false;
    }
  }

  public onMouseEnter(): void {
    this.isMouseIn = true;
    this.isOpen = true;
  }

  public onMouseLeave(): void {
    this.isMouseIn = false;
    if (!this.isFocusIn) {
      this.isOpen = false;
    }
  }
}
