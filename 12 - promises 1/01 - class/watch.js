'use strict';

const fs = require('fs');
const EventEmitter = require('events');

function FileMonitor(filename) {
	
	fs.access(filename, fs.constants.F_OK, (err) => {
		if (err) {
			watchDir(this, '.', filename);
		} else {
			watchFile(this, filename);
		}
	});
	
	function watchFile(emitter, fname) {
		fs.watch(fname, (evt, name) => {
			switch (evt) {
				case 'change':
					emitter.emit(emitter.MODIFIED, name);
				default:
					emitter.emit(evt, name);
			}
		});
	}

	function watchDir(emitter, dirName, fname) {
		let done = false;
		const dirWatcher = fs.watch(dirName, (evt, name) => {
			if (!done && name === fname) {
				fs.access(fname, fs.constants.F_OK, (err) => {
					if (!done && !err) {
						emitter.emit(emitter.CREATED, fname);
						done = true;
						dirWatcher.close();
						watchFile(emitter, fname);
					}
				});
			}
		});
	}
}

FileMonitor.prototype = Object.create(EventEmitter.prototype);
FileMonitor.prototype.constructor = FileMonitor;
FileMonitor.prototype.CREATED  = 'created';
FileMonitor.prototype.MODIFIED = 'modified'; 

module.exports = (filename) => new FileMonitor(filename);
