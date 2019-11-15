import * as fromRxJs from 'rxjs';

describe('SpyReferences', () => {

  it('should spy the reference', () => {
    const pd = Object.getOwnPropertyDescriptor(fromRxJs, 'interval');
    expect(pd.configurable).toBeTruthy();
  });

});
