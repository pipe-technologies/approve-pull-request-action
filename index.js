'use strict';

const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
  const token = core.getInput('github-token');
  const approveLabel = core.getInput('approve-label');

  const pullRequest = github.context.payload.pull_request;
  if (!pullRequest) {
    core.warn("Could not get pull request from context, exiting");
    return;
  }

  const labels = pullRequest.labels.map(label => label.name);
  if (!labels.includes(approveLabel)) {
    core.warn("PR does not include approve-label, exiting");
    return;
  }

  const octokit = github.getOctokit(token);

  await octokit.pulls.createReview({
    ...context.repo,
    pull_number: pullRequest.number,
    event: 'APPROVE'
  });
}

main().catch(err => core.setFailed(err.message));
