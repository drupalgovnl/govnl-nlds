import { runInLinuxContainer } from './linux-visual-docker.mjs';

const fileArgs = process.argv.slice(2);
const quotedFileArgs = fileArgs.map(arg => `'${arg.replace(/'/g, `'\\''`)}'`).join(' ');
const testCommand = `npx playwright test --config packages/storybook/test-visual/playwright.config.ts --update-snapshots${fileArgs.length ? ` -- ${quotedFileArgs}` : ''}`;

process.exit(runInLinuxContainer(testCommand));
