'use strict';

module.exports = {
	serviceName: "sampleDaemonSuccess",
	serviceGroup: "test",
	servicePort: 2001,
	type: 'daemon',
	prerequisites: {},
	//serviceVersion: 1,
	errors: {},

	"schema": {
		"testJob": {
			"l": "test Job"
		}
	}
};