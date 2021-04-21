/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 732:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 645:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";


const core = __nccwpck_require__(732);
const github = __nccwpck_require__(645);

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

})();

module.exports = __webpack_exports__;
/******/ })()
;