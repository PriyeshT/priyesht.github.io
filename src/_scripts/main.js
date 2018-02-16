// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import SiteHeader from '../_modules/organisms/site-header/site-header';

$(() => {
	
	if($('.nav').length) {
		new SiteHeader();
	}
});
