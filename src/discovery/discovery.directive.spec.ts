import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DiscoveryDirective } from './discovery.directive';
import { DiscoveryService } from './discovery.service';
import { Observable } from 'rxjs/Rx';

@Component({
    template: '<div *ngxDiscovery="\'toto\' ; params: [1,2]; target:\'foo\'">plop</div>'
})
class TestComponent { }

class MockDiscoveryService {
    first(filter) {}
}

describe('Directive: Discovery', () => {
    let fixture: ComponentFixture<TestComponent>;
    const mockService = new MockDiscoveryService();

    beforeEach(() => {
        fixture = TestBed
            .configureTestingModule({
                declarations: [DiscoveryDirective, TestComponent],
                providers: [
                    { provide: DiscoveryService, useValue: mockService}
                ]

            })
            .createComponent(TestComponent);
    });

    it('should be called with good parameters', () => {
        mockService.first = jasmine.createSpy('first').and.returnValue(Observable.of(true));
        fixture.detectChanges(); // initial binding
        expect(mockService.first).toHaveBeenCalledWith('toto', [1, 2]);

    });

    it('should not be visible if service is not present', () => {
        mockService.first = jasmine.createSpy('first').and.returnValue(Observable.empty());
        fixture.detectChanges(); // initial binding

        const div = fixture.debugElement.nativeElement.querySelector('div');
        expect(div).toBeFalsy();
    });

    it('should be visible if service is present', () => {
        mockService.first = jasmine.createSpy('first').and.returnValue(Observable.of(true));
        fixture.detectChanges(); // initial binding

        const div = fixture.debugElement.nativeElement.querySelector('div');
        expect(div).toBeTruthy();
    });

    it('should be visible if service is present', async(() => {
        spyOn(window, 'open');

        mockService.first = jasmine.createSpy('first').and.returnValue(Observable.of({ url: 'my_url' }));
        fixture.detectChanges(); // initial binding

        const div = fixture.debugElement.nativeElement.querySelector('div');

        expect(div).toBeTruthy();
        console.log(div);

        div.click();
        fixture.whenStable().then(() => {
            expect(window.open).toHaveBeenCalledWith('my_url', 'foo');
        });
    }));
});
