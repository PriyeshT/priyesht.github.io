'use strict';

import SiteHeader from '../site-header';

describe('SiteHeader View', function() {

  beforeEach(() => {
    this.siteHeader = new SiteHeader();
  });

  it('Should run a few assertions', () => {
    expect(this.siteHeader);
  });

});
