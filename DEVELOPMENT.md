# Development Guide

This guide covers the development workflow, tooling, and best practices for the
GovNL Design System.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development environment
npm run storybook

# Run all checks
npm run lint
```

## 🛠️ Development Workflow

### 1. Pre-commit Hooks

We use Husky to run pre-commit hooks that ensure code quality:

- **ESLint**: JavaScript/TypeScript linting
- **Stylelint**: CSS/SCSS linting
- **Prettier**: Code formatting
- **TypeScript**: Type checking

The hooks run automatically on `git commit` and will prevent commits with
linting errors.

### 2. Linting Commands

```bash
# Run all linting
npm run lint

# Run specific linters
npm run lint:js      # ESLint
npm run lint:css     # Stylelint
npm run lint:format  # Prettier
npm run lint:types   # TypeScript

# Auto-fix issues
npm run lint:fix
```

### 3. Bundle Size Monitoring

We monitor bundle sizes to ensure performance:

```bash
# Check current bundle sizes
npm run size

# Analyze bundle composition
npm run size:analyze
```

## 🏗️ CI/CD Pipeline

### GitHub Actions Workflows

1. **Continuous Deployment** (`.github/workflows/continuous-deployment.yml`)

   - Runs on all pushes and PRs
   - Parallel execution of lint, test, and build jobs
   - Optimized caching for faster builds
   - Deploys to npm and Github Pages

2. **Performance Monitoring** (`.github/workflows/performance.yml`)
   - Bundle size analysis on PRs
   - Lighthouse CI performance audits
   - Weekly performance reports

### Optimization Features

- **Smart Caching**: Node modules cached across jobs
- **Parallel Execution**: Lint, test, and build run simultaneously
- **Bundle Analysis**: Automatic size limit checks
- **Performance Audits**: Lighthouse CI integration

## 📊 Performance Standards

### Bundle Size Limits

- **Design Tokens CSS**: 50 KB
- **Individual Components**: 10 KB
- **Storybook Build**: 2 MB

### Lighthouse Targets

- **Performance**: 80+ score
- **Accessibility**: 90+ score
- **Best Practices**: 80+ score
- **SEO**: 80+ score

## 🔧 Configuration Files

### Core Configuration

- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `.stylelintrc.cjs` - Stylelint configuration
- `.prettierrc.cjs` - Prettier configuration

### CI/CD Configuration

- `.husky/pre-commit` - Pre-commit hook script
- `lighthouserc.json` - Lighthouse CI configuration
- `.github/workflows/` - GitHub Actions workflows

## 📦 Package Management

### Workspaces

```json
{
  "workspaces": [
    "./proprietary/*",
    "./packages/utilities",
    "./components/*",
    "./packages/storybook"
  ]
}
```

### Scripts

```bash
# Build all packages
npm run build

# Watch for changes
npm run watch

# Start Storybook development
npm run storybook
```

## 🎯 Best Practices

### Code Quality

1. **TypeScript**: All new code should be typed
2. **ESLint**: Follow the configured rules
3. **Stylelint**: Use BEM methodology for CSS
4. **Prettier**: Consistent code formatting

### Performance

1. **Bundle Size**: Keep components lightweight
2. **CSS**: Use efficient selectors
3. **Images**: Optimize assets
4. **Lazy Loading**: Implement where appropriate

### Testing

1. **Unit Tests**: Test component logic
2. **Visual Tests**: Use Storybook interactions
3. **Accessibility**: Test with screen readers
4. **Performance**: Monitor bundle sizes

## 🚨 Troubleshooting

### Common Issues

1. **Pre-commit Hook Failures**

   ```bash
   # Fix linting issues
   npm run lint:fix

   # Check specific issues
   npm run lint:js
   npm run lint:css
   ```

2. **Bundle Size Exceeded**

   ```bash
   # Analyze what's causing the size increase
   npm run size:analyze

   # Check specific component sizes
   npm run size
   ```

3. **TypeScript Errors**

   ```bash
   # Check type errors
   npm run lint:types

   # Build with type checking
   npx tsc --noEmit
   ```

### Getting Help

- Check the GitHub Issues for similar problems
- Review the configuration files
- Run the specific linting command that's failing
- Check the CI logs for detailed error messages

## 🔄 Continuous Improvement

This development setup is designed to evolve with the project. Regular reviews
and updates ensure we maintain high code quality and performance standards while
keeping the developer experience smooth and efficient.
