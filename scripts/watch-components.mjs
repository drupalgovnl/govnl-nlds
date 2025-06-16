#!/usr/bin/env node

import { spawn } from 'child_process';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

const COMPONENTS_DIR = './components';

async function getComponentsWithWatchScript() {
  try {
    const componentDirs = await readdir(COMPONENTS_DIR, { withFileTypes: true });
    const componentsWithWatch = [];

    for (const dir of componentDirs) {
      if (dir.isDirectory()) {
        const packageJsonPath = join(COMPONENTS_DIR, dir.name, 'package.json');
        try {
          const packageJsonContent = await readFile(packageJsonPath, 'utf8');
          const packageJson = JSON.parse(packageJsonContent);

          if (packageJson.scripts && packageJson.scripts.watch) {
            componentsWithWatch.push(dir.name);
          }
        } catch (error) {
          // Skip components without package.json or with invalid JSON
        }
      }
    }

    return componentsWithWatch;
  } catch (error) {
    console.error('Error reading components directory:', error);
    return [];
  }
}

async function runComponentWatchers() {
  const components = await getComponentsWithWatchScript();

  if (components.length === 0) {
    console.log('No components with watch scripts found.');
    return;
  }

  console.log(`Starting watch processes for ${components.length} components:`);
  components.forEach(component => console.log(`  - ${component}`));
  console.log('');

  const processes = components.map(component => {
    const child = spawn('npm', ['run', 'watch'], {
      cwd: join(COMPONENTS_DIR, component),
      stdio: 'inherit'
    });

    child.on('error', (error) => {
      console.error(`Error starting watch for ${component}:`, error);
    });

    return { component, process: child };
  });

  // Handle cleanup on exit
  process.on('SIGINT', () => {
    console.log('\nStopping all watch processes...');
    processes.forEach(({ component, process }) => {
      process.kill('SIGINT');
    });
    process.exit(0);
  });

  // Wait for all processes
  await Promise.all(processes.map(({ process }) =>
    new Promise(resolve => process.on('exit', resolve))
  ));
}

runComponentWatchers().catch(console.error);
