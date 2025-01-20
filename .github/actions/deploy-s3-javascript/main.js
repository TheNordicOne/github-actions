const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
// Node Modules must not be excluded, as GitHub workflow does not download them
function run() {
    core.notice('Starting spending all your money 💸');
}

run();