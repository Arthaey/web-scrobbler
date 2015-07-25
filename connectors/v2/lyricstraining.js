'use strict';

/* global Connector */

Connector.artistSelector = "#lyrics-info h2";

Connector.trackSelector = "#lyrics-info h1";

Connector.playButtonSelector = '.play-box';

// inside an iframe, so can't just use Connector.playerSelector
Connector.getPlayer = function() {
	return $('#video-player').contents().find('.video-stream') || null;
};

