'use strict';

module.exports = {
	serviceName: "sample6",
	serviceGroup: "test",
	serviceVersion: 1,
	servicePort: 2006,
	requestTimeout: 30,
	requestTimeoutRenewal: 5,
	extKeyRequired: true,
	type: 'service',
	prerequisites: {},
	"errors": {
		"600": "Database error",
		"601": "Missing info"
	},
	"schema": {

		"/getInfo": {
			"_apiInfo": {
				"l": "Get Info",
				"group": "Information",
				"groupMain": true
			},
			"email": {
				"source": ['query.email'],
				"required": false,
				"validation": {
					"type": "string",
					"format": "email"
				}
			}
		}
	}
};