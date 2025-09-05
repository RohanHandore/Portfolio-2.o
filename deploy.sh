#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Create .nojekyll file in dist directory
echo "Creating .nojekyll file..."
touch dist/.nojekyll

# Add all files to git
echo "Adding files to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to main branch
echo "Pushing to main branch..."
git push origin main

echo "Deployment initiated! GitHub Actions will handle the rest."
echo "Your site will be available at: https://rohanhandore.github.io/Portfolio-2.o/"
