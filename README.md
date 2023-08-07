# test-hooks

This repo is to demonstrate some errors caused by jsdom environment in jest.

## How to run

```bash
yarn install
yarn test
```

first error should be `fetch is not defined`

this can be resolved if we use `fetch` from `cross-fetch` library and set it as a global in `./test/jest.setup.js` (simply uncomment the line)

now the test should pass! But this does not seem like the appropriate solution to me. I would expect `fetch` to be available in the jsdom environment.

for the next error, we demonstrate a babel transpile issue that ONLY occurs when using jsdom environment. uncomment `import { getAuth } from "firebase-admin/auth";` (line 4) in ./test/useCounter.test.jsx and re run the test. we get a `SyntaxError: Unexpected token 'export'` error. we can fix this error by changing the `testEnvironment` to `node`, but obviously we cant run our hook then! it fails with a document is not defined error when our hook tries to create an element.
