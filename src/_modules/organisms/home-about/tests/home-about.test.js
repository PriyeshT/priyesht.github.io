'use strict';

import HomeAbout from '../home-about';

describe('HomeAbout View', function() {

  beforeEach(() => {
    this.homeAbout = new HomeAbout();
  });

  it('Should run a few assertions', () => {
    expect(this.homeAbout);
  });

});
