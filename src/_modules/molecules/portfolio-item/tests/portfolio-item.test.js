'use strict';

import PortfolioItem from '../portfolio-item';

describe('PortfolioItem View', function() {

  beforeEach(() => {
    this.portfolioItem = new PortfolioItem();
  });

  it('Should run a few assertions', () => {
    expect(this.portfolioItem);
  });

});
