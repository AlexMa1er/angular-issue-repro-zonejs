import * as fromRxJs from 'rxjs';

declare var spyOnProperty: Function;

describe('SpyReferences', () => {

  it('should a spyable reference', () => {
    const pd = Object.getOwnPropertyDescriptor(fromRxJs, 'interval');
    expect(pd.configurable).toBeTruthy();
  });

  it('should spy the rxjs-interval method reference', () => {
    spyOnProperty(fromRxJs, 'interval', 'get').and.returnValue({});
    expect(true).toBeTruthy();
  });

});
