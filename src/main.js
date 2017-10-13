#!/usr/bin/env node
// @flow

function main() {
    process.stdout.write("Hello, World!\n");
}

function stub(): number {
    return 42
}

if (require.main === module) {
    main();
}

module.exports = {
    'stub': stub,
};
