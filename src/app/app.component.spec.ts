import { AppComponent } from './app.component';
import { Stock } from './model/stock';

describe('AppComponent', () => {
    
    it('should have stockObj instantiated on ngInit', () => {
        const appComponent = new AppComponent();
        expect(appComponent.stockObj).toBeUndefined();
        appComponent.ngOnInit();
        expect(appComponent.stockObj).toEqual(
            new Stock('Test Stock Company', 'TSC', 85, 80));
        }
      );
    
    it('should have toggle stockObj favorite', () => {
        const appComponent = new AppComponent();
        appComponent.ngOnInit();
        expect(appComponent.stockObj.favorite).toBeFalsy();
        appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));
        expect(appComponent.stockObj.favorite).toBeTruthy();
        appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));
        expect(appComponent.stockObj.favorite).toBeFalsy();
        }
      );
    
});