const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

async function run() {
    const maxCost = core.getInput('max-cost', { required: true });
    core.notice('Starting to spend all your money 💸');

    const stepSize = maxCost / 10;

    for (let i = 10; i >= 0; i--) {
        const remaining = (stepSize * i).toFixed(2);
        core.info(`Remaining budget: $${remaining}`);
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
    }

    core.notice('All money spent! 🎉');
}

run();