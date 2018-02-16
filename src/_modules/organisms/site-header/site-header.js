'use strict';

import $ from 'jquery';

export default class SiteHeader {
	constructor() {
		let $header = $('.header'),
			$jsToggleMenu = $('.js-menu-toggle', $header),
			$nav = $('.nav', $header),
			$primaryNav = $('.primary-nav', $header);

		$jsToggleMenu.on('click', e => {
			if ($nav.hasClass('show-nav')) {
				$nav.removeClass('show-nav');
				$primaryNav.removeClass('show');
			} else {
				$nav.addClass('show-nav');
				$primaryNav.addClass('show');
			}
		});
	}
}
