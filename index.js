'use strict';

const core = require('@actions/core');
const { GitHub, context } = require('@actions/github');

const main = async () => {
  const token = core.getInput('github-token');
  const approveLabel = core.getInput('approve-label');

  const pullRequest = context.payload.pull_request;
  if (!pullRequest) {
    core.info("Could not get pull request from context, exiting");
    return;
  }

  core.info(pullRequest);

  const labels = pullRequest.labels.map(label => label.name);
  if (!labels.includes(approveLabel)) {
    core.info("PR does not include approve-label, exiting");
    return;
  }

  core.info(labels);

  const octokit = new GitHub(token);

  await octokit.pulls.createReview({
    ...context.repo,
    pull_number: pullRequest.number,
    event: 'APPROVE'
  });
}

main().catch(err => core.setFailed(err.message));
