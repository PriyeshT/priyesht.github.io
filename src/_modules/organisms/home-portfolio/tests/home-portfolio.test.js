'use strict';

import HomePortfolio from '../home-portfolio';

describe('HomePortfolio View', function() {

  beforeEach(() => {
    this.homePortfolio = new HomePortfolio();
  });

  it('Should run a few assertions', () => {
    expect(this.homePortfolio);
  });

});
