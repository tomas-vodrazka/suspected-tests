# suspected-tests

This script goes through a folder and finds suspected test files. The initial version consider suspected test file as a file with one tests which is named `should render successfully`

## installation

run `yarn`

## execution

In the code, edit `ROOT_PATH` variable to match a folder you want to check
run `node find-suspected-tests.js`
Then you can find results in `suspected-tests.json` file
