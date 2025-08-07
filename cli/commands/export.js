const fs = require('fs');
const path = require('path');
const { getRepoStats } = require('./stats');

async function exportWidget(repository, options) {
  const stats = await getRepoStats(repository, { format: 'json' });
  
  let output = '';
  switch (options.type) {
    case 'html':
      output = generateHTML(stats);
      break;
    case 'iframe':
      output = generateIframe(stats);
      break;
    case 'widget':
      output = generateWidget(stats);
      break;
    default:
      console.error('Unsupported export type');
      process.exit(1);
  }

  if (options.output) {
    fs.writeFileSync(options.output, output);
    console.log(`Widget exported to ${options.output}`);
  } else {
    console.log(output);
  }
}

function generateHTML(stats) {
  // Implementation for HTML generation
  return `
<!DOCTYPE html>
<html>
<head>
    <title>${stats.name} - GitHub Stats Widget</title>
    <style>
        /* Widget styles */
    </style>
</head>
<body>
    <div class="github-stats-widget">
        <!-- Widget content -->
    </div>
</body>
</html>`;
}

function generateIframe(stats) {
  // Implementation for iframe generation
  return `<iframe src="widget-url" width="100%" height="400" frameborder="0"></iframe>`;
}

function generateWidget(stats) {
  // Implementation for widget generation
  return `<!-- Widget implementation -->`;
}

module.exports = {
  exportWidget
};
