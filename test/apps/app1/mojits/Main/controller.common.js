YUI.add('main-controller', function (Y, NAME) {
    'use strict';

    Y.namespace('mojito.controllers')[NAME] = {
        index: function (ac) {
            ac.debug.on('generic-hook', function (debugData) {
                debugData.content = {
                    hook: {
                        name: 'generic-hook',
                        description: 'Generic Hook'
                    }
                };
            });

            ac.debug.on('mojit-hook', function (debugData) {
                debugData.hook = 'mojit-hook';
            });

            ac.done({});
        }
    };
}, '0.0.1', {
    requires: [
        'mojito-debug-addon'
    ]
});
