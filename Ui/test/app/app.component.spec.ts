import {expect} from 'chai';
import {AppComponent} from '../../src/app/app.component';


suite('AppComponent', () => {

    test('Should return banaan', () => {
        const component = new AppComponent();
        expect(component.banaan).to.equal('Banaan');
    });

});