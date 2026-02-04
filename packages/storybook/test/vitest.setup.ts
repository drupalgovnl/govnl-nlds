// Import the portable stories API for HTML-Vite framework
import { setProjectAnnotations } from '@storybook/html-vite';
// Import your Storybook preview configuration
// @ts-expect-error - preview.js is a JavaScript file without type definitions
import * as previewAnnotations from '../config/preview.js';

// Apply Storybook project annotations to make your preview config available to tests
setProjectAnnotations([previewAnnotations]);
