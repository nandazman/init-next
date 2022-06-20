import { danger, fail, message } from "danger";
const fs = require("fs");
const jest = require("danger-plugin-jest");

const { additions = 0, deletions = 0 } = danger.github.pr;
message(`Added ${additions} and removed ${deletions} lines.`);

const jestContent = fs.readFileSync("test-results.json");
if (jestContent) {
  jest({ showSuccessMessage: true });
}

const coverage = fs.readFileSync("coverage/coverage-summary.json", "utf8");
if (coverage) {
  const coverageJson = JSON.parse(coverage);
  const summary = coverageJson.total;
  const { lines, statements, functions, branches } = summary;

  message(`👍 ${lines.pct}% Lines Coverage`);
  message(`👍 ${statements.pct}% Statements Coverage`);
  message(`👍 ${functions.pct}% Functions Coverage`);
  message(`👍 ${branches.pct}% Branches Coverage`);
}
const content = fs.readFileSync("lint-results.json", "utf8");
if (content) {
  lint(content);
}

function lint(content) {
  const errorAndWarningFiles = getErrorAndWarningFileLint(content);
  const errorAndWarningFilesChangesAndCreated = getErrorAndWarningFilesChangesAndCreated(
    errorAndWarningFiles
  );
  
  if (
    errorAndWarningFilesChangesAndCreated &&
    errorAndWarningFilesChangesAndCreated.length
  ) {
    errorAndWarningFilesChangesAndCreated.forEach((file) => {
      const linkFails = [];
      file.messages.forEach((item) => {
        const linkFail = linkFailed(
          file.path,
          item.line,
          `${item.message} (${item.ruleId})`
        );
        linkFails.push(linkFail);
      });
      fail(
        `<b>🃏 FAIL</b> in ${danger.github.utils.fileLinks([file.path])}
        <ul>${generateList(linkFails)}</ul>`
      );
    });
  } else {
    message(":+1: Lint tests passed");
  }
}

function linkFailed(file, line, title) {
  const githubRoot = danger.github.pr.head.repo.html_url.split(
    danger.github.pr.head.repo.owner.login
  )[0];
  const repo = danger.github.pr.head.repo;
  const url = `${githubRoot}${repo.full_name}/blob/${
    danger.github.pr.head.ref
  }/${file}${line ? `#L${line}` : ""}`;
  return `<a href='${url}'>${title}</a>`;
}

function getErrorAndWarningFileLint(content) {
  const parsedData = JSON.parse(content);
  return parsedData.filter((item) => item.errorCount || item.warningCount);
}

function getErrorAndWarningFilesChangesAndCreated(files) {
  const createAndModifiedFiles = [
    ...danger.git.created_files,
    ...danger.git.modified_files,
  ].filter(
    (path) =>
      (path.endsWith("js") || path.endsWith("jsx")) &&
      path.includes("src/") &&
      !path.includes("src/test") &&
      path !== "dangerfile.js"
  );

  const filteredFiles = [];
  for (let i = 0; i < files.length; i++) {
    let currentPath;
    const changedOrCreated = createAndModifiedFiles.find((path) => {
      if (files[i].filePath.includes(path)) {
        currentPath = path;
        return true;
      }
      return false;
    });
    if (changedOrCreated) {
      filteredFiles.push({
        path: currentPath,
        messages: files[i].messages || [],
      });
    }
  }
  return filteredFiles;
}

function generateList(lists) {
  const element = lists.map((item) => `<li>${item}</li>`);
  return element.join("\n");
}
