import {expect} from 'chai';
import {AppComponent} from '../../src/app/app.component';


suite('AppComponent', () => {

    test('Should return banaan', () => {
        const component = new AppComponent();
        expect(component.banaan()).to.equal('Banaan');
    });

    test('should not return not banaan', () => {
        const component = new AppComponent();
        expect(component.banaan()).not.to.equal('not banaan');
    });
});