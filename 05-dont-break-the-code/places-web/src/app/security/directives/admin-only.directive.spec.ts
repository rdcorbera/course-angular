import { AdminOnlyDirective } from './admin-only.directive';
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';

describe('AdminOnlyDirective', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach((() => {
    const store = {};

    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);

    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent, AdminOnlyDirective],
      providers: [UserService, ProfileService]
    });
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should be null', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const manageMenuItem: HTMLLIElement = fixture.nativeElement.querySelector('#manageMenuItem');

    expect(manageMenuItem).toBeNull();
  });

  it('should be present', inject([ProfileService], (service: ProfileService) => {
    const profile = new Profile(1, 'admin', 'Admin', 'Admin', 'admin@domain.com', new Date(), null, null, null);

    service.setProfile(profile);

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const manageMenuItem: HTMLLIElement = fixture.nativeElement.querySelector('#manageMenuItem');
    expect(manageMenuItem).toBeTruthy();
  }));
});
