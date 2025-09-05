@echo off
echo Building the project...
npm run build

echo Creating .nojekyll file...
echo. > dist\.nojekyll

echo Adding files to git...
git add .

echo Committing changes...
git commit -m "Deploy to GitHub Pages - %date% %time%"

echo Pushing to main branch...
git push origin main

echo.
echo Deployment initiated! GitHub Actions will handle the rest.
echo Your site will be available at: https://rohanhandore.github.io/Portfolio-2.o/
pause
