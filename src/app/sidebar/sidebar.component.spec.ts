import { TestBed, async } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let fixture;
  let component: SidebarComponent;
  let element: Element;
  let aside: Element;
  let focusInEvent: Event;
  let focusOutEvent: Event;
  let mouseEnterEvent: Event;
  let mouseLeaveEvent: Event;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidebarComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.debugElement.componentInstance;
    element = fixture.nativeElement;
    aside = element.children[0];
    focusInEvent = new Event('focusin');
    focusOutEvent = new Event('focusout');
    mouseEnterEvent = new Event('mouseenter');
    mouseLeaveEvent = new Event('mouseleave');
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should be closed by default', () => {
    expect(component.isOpen).toEqual(false);
  });

  it('should open upon focus in', () => {
    aside.dispatchEvent(focusInEvent);
    expect(component.isOpen).toEqual(true);
  });

  it('should close upon focus out when mouse is not in', () => {
    aside.dispatchEvent(focusInEvent);
    aside.dispatchEvent(focusOutEvent);
    expect(component.isOpen).toEqual(false);
  });

  it('should remain open upon focus out when mouse is in', () => {
    aside.dispatchEvent(mouseEnterEvent);
    aside.dispatchEvent(focusOutEvent);
    expect(component.isOpen).toEqual(true);
  });

  it('should open upon mouse enter', () => {
    aside.dispatchEvent(mouseEnterEvent);
    expect(component.isOpen).toEqual(true);
  });

  it('should close upon mouse leave when focus is not in', () => {
    aside.dispatchEvent(mouseEnterEvent);
    aside.dispatchEvent(mouseLeaveEvent);
    expect(component.isOpen).toEqual(false);
  });

  it('should remain open upon mouse leave when focus is in', () => {
    aside.dispatchEvent(focusInEvent);
    aside.dispatchEvent(mouseLeaveEvent);
    expect(component.isOpen).toEqual(true);
  });
});
