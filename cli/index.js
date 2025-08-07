#!/usr/bin/env node

const program = require('commander');
const { getRepoStats, validateGitHubToken } = require('./commands/stats');
const { exportWidget } = require('./commands/export');

program
  .version('1.0.0')
  .description('GitHub Repository Statistics Widget CLI');

program
  .command('stats <repository>')
  .description('Get statistics for a GitHub repository')
  .option('-f, --format <type>', 'Output format: text|json|csv', 'text')
  .option('-w, --watch', 'Enable watch mode with live updates')
  .option('-o, --output <file>', 'Save output to file')
  .action((repository, options) => {
    validateGitHubToken();
    getRepoStats(repository, options);
  });

program
  .command('export <repository>')
  .description('Export widget for a GitHub repository')
  .option('-t, --type <type>', 'Export type: html|iframe|widget', 'html')
  .option('-o, --output <file>', 'Output file name')
  .action((repository, options) => {
    exportWidget(repository, options);
  });

program.parse(process.argv);
