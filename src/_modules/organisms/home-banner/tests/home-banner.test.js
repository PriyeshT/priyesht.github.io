'use strict';

import HomeBanner from '../home-banner';

describe('HomeBanner View', function() {

  beforeEach(() => {
    this.homeBanner = new HomeBanner();
  });

  it('Should run a few assertions', () => {
    expect(this.homeBanner);
  });

});
