TESTS = test/*.js

test:
	./node_modules/mocha/bin/mocha --timeout 15000 --reporter spec $(TESTS)

serve:
	grunt & DEBUG=shim:* node app.js

.PHONY: test
