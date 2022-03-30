var events = require('events');
var eventEmitter = new events.EventEmitter();

var eventHandler = function() {
    console.log('Scream!!!');
}

eventEmitter.on('scream', eventHandler);

eventEmitter.emit('scream');