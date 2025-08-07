const { Octokit } = require('@octokit/rest');
const ora = require('ora');
const chalk = require('chalk');

// Initialize Octokit
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

async function getRepoStats(repository, options) {
  const spinner = ora('Fetching repository statistics...').start();
  
  try {
    const [owner, repo] = repository.split('/');
    
    // Get basic repository information
    const { data: repoData } = await octokit.repos.get({
      owner,
      repo,
    });

    // Get language statistics
    const { data: languages } = await octokit.repos.listLanguages({
      owner,
      repo,
    });

    // Get contributor statistics
    const { data: contributors } = await octokit.repos.getContributorsStats({
      owner,
      repo,
    });

    const stats = {
      name: repoData.name,
      description: repoData.description,
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      watchers: repoData.subscribers_count,
      openIssues: repoData.open_issues_count,
      languages,
      contributors: contributors || [],
      createdAt: repoData.created_at,
      updatedAt: repoData.updated_at,
      license: repoData.license?.name || 'No license',
    };

    spinner.succeed('Successfully fetched repository statistics');

    // Handle different output formats
    switch (options.format) {
      case 'json':
        console.log(JSON.stringify(stats, null, 2));
        break;
      case 'csv':
        console.log(convertToCSV(stats));
        break;
      default:
        displayTextStats(stats);
    }

    // Save to file if specified
    if (options.output) {
      let content;
      switch (options.format) {
        case 'json':
          content = JSON.stringify(stats, null, 2);
          break;
        case 'csv':
          content = convertToCSV(stats);
          break;
        default:
          content = `Repository Statistics for ${stats.name}\n\n`;
          content += `Name: ${stats.name}\n`;
          content += `Description: ${stats.description}\n`;
          content += `Stars: ${stats.stars}\n`;
          content += `Forks: ${stats.forks}\n`;
          content += `Watchers: ${stats.watchers}\n`;
          content += `Open Issues: ${stats.openIssues}\n\n`;
          content += `Languages:\n`;
          Object.entries(stats.languages).forEach(([lang, bytes]) => {
            content += `${lang}: ${bytes}\n`;
          });
      }
      saveToFile(content, options.output);
    }

  } catch (error) {
    spinner.fail('Error fetching repository statistics');
    console.error(chalk.red(error.message));
    process.exit(1);
  }
}

function displayTextStats(stats) {
  console.log(chalk.bold('\nRepository Statistics:'));
  console.log(chalk.blue('Name:'), stats.name);
  console.log(chalk.blue('Description:'), stats.description);
  console.log(chalk.blue('Stars:'), stats.stars);
  console.log(chalk.blue('Forks:'), stats.forks);
  console.log(chalk.blue('Watchers:'), stats.watchers);
  console.log(chalk.blue('Open Issues:'), stats.openIssues);
  
  console.log(chalk.bold('\nLanguages:'));
  Object.entries(stats.languages).forEach(([lang, bytes]) => {
    console.log(chalk.blue(lang + ':'), bytes);
  });
}

function convertToCSV(stats) {
  const headers = [
    'name',
    'description',
    'stars',
    'forks',
    'watchers',
    'openIssues',
    'createdAt',
    'updatedAt',
    'license'
  ].join(',');

  const values = [
    stats.name,
    `"${stats.description || ''}"`,
    stats.stars,
    stats.forks,
    stats.watchers,
    stats.openIssues,
    stats.createdAt,
    stats.updatedAt,
    `"${stats.license}"`
  ].join(',');

  const languageData = Object.entries(stats.languages)
    .map(([lang, bytes]) => `${lang},${bytes}`)
    .join('\n');

  return `${headers}\n${values}\n\nLanguages:\nlanguage,bytes\n${languageData}`;
}

function saveToFile(content, filePath) {
  const fs = require('fs');
  const path = require('path');
  
  try {
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, content);
    console.log(chalk.green(`\nOutput saved to: ${filePath}`));
  } catch (error) {
    console.error(chalk.red(`Error saving file: ${error.message}`));
  }
}

// Validate GitHub token
function validateGitHubToken() {
  if (!process.env.GITHUB_TOKEN) {
    console.error(chalk.red('Error: GITHUB_TOKEN environment variable is not set'));
    console.log(chalk.yellow('\nPlease set your GitHub token:'));
    console.log(chalk.yellow('export GITHUB_TOKEN=your_token_here    # For Unix/Linux/macOS'));
    console.log(chalk.yellow('set GITHUB_TOKEN=your_token_here       # For Windows CMD'));
    console.log(chalk.yellow('$env:GITHUB_TOKEN="your_token_here"    # For Windows PowerShell'));
    process.exit(1);
  }
}

module.exports = {
  getRepoStats,
  validateGitHubToken
};
