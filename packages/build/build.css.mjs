#!/usr/bin/env node
import * as sass from 'sass';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import postcss from 'postcss';

const build = async (config) => {
  try {
    // Make sure the output directory exists.
    await mkdir(path.dirname(config.output), { recursive: true });

    // Compile scss to css.
    let result = sass.compile(config.input, {
      sourceMapIncludeSources: true,
      importers: [new sass.NodePackageImporter()],
    });

    // Create a list of PostCSS plugins.
    const plugins = [
      autoprefixer,
    ];

    // Add cssnano when minify is set.
    if (config.minify) {
      plugins.push(cssnano);
    }

    // Process with PostCSS.
    result = await postcss(plugins).process(result.css, {
      from: config.input,
      to: config.output,
    });

    // Write the result.
    writeFile(config.output, result.css);
  } catch (error) {
    console.error('🔥 Error building styles:', error);
    process.exit(1);
  }
};

build({
  input: 'src/index.scss',
  minify: false,
  output: 'dist/index.css',
});

build({
  input: 'src/index.scss',
  minify: true,
  output: 'dist/index.min.css',
});
