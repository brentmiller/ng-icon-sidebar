import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SidebarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have 'ng-icon-sidebar' as title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-icon-sidebar');
  });

  it('should contain a sidebar component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: HTMLElement = fixture.nativeElement;
    const childNodes = Array.from(app.childNodes);
    const containsSidebar = childNodes.some((node) => {
      return node.nodeName === 'NG-ICON-SIDEBAR';
    });
    expect(containsSidebar).toBeTruthy();
  });
});
