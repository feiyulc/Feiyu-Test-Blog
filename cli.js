#!/usr/bin/env node

const server = require('./index.js');

const args = process.argv.slice(2);
const port = args[0] || 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
