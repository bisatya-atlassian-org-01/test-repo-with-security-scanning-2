# Dependabot Test Repository

This is a test repository demonstrating GitHub Dependabot configuration.

## What's Included

- **Dependabot Configuration** (`.github/dependabot.yml`) - Configured to check for updates weekly
- **npm dependencies** - Including Express and Lodash (intentionally using older versions)
- **GitHub Actions** - A simple CI workflow that Dependabot will also monitor

## Dependabot Features Enabled

1. **npm package updates** - Monitors `package.json` for outdated dependencies
2. **GitHub Actions updates** - Monitors workflow files for outdated actions

## How to Push This to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit with Dependabot configuration"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Enabling Dependabot on GitHub

Once pushed to GitHub:

1. Go to your repository Settings
2. Navigate to "Code security and analysis"
3. Enable:
   - Dependabot alerts
   - Dependabot security updates

The version updates will work automatically based on the `.github/dependabot.yml` configuration!

## What to Expect

After enabling Dependabot, you should see:
- Pull requests to update Express, Lodash, and Jest to newer versions
- Pull requests to update GitHub Actions to newer versions
- Security alerts if any dependencies have known vulnerabilities
