TESTS = test/*.js

test:
  ./node_modules/mocha/bin/mocha --timeout 15000 --reporter spec $(TESTS)

.PHONY: test
