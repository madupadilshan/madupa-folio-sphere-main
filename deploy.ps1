# Portfolio Deployment Script
# Run this script to deploy your portfolio to GitHub Pages

Write-Host "🚀 Portfolio Deployment Script" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
try {
    git --version | Out-Null
    Write-Host "✅ Git is installed" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📋 Deployment Steps:" -ForegroundColor Yellow
Write-Host "1. Add all changes to git" -ForegroundColor Gray
Write-Host "2. Commit changes" -ForegroundColor Gray
Write-Host "3. Push to GitHub" -ForegroundColor Gray
Write-Host ""

# Get current directory
$projectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectPath

# Check git status
Write-Host "📊 Checking git status..." -ForegroundColor Cyan
git status

Write-Host ""
$continue = Read-Host "Do you want to continue with deployment? (Y/N)"

if ($continue -ne "Y" -and $continue -ne "y") {
    Write-Host "❌ Deployment cancelled" -ForegroundColor Red
    exit 0
}

# Stage all changes
Write-Host ""
Write-Host "📦 Staging all changes..." -ForegroundColor Cyan
git add .

# Get commit message
Write-Host ""
$commitMessage = Read-Host "Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

# Commit changes
Write-Host ""
Write-Host "💾 Committing changes..." -ForegroundColor Cyan
git commit -m "$commitMessage"

# Push to GitHub
Write-Host ""
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Cyan
git push

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Your portfolio will be live in a few minutes at:" -ForegroundColor Cyan
    Write-Host "   https://madupadilshan.github.io/portfolio/" -ForegroundColor White
    Write-Host ""
    Write-Host "📊 Check deployment status at:" -ForegroundColor Cyan
    Write-Host "   https://github.com/madupadilshan/portfolio/actions" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    Write-Host "Please check the error messages above." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "📖 For help, see DEPLOYMENT_GUIDE.md" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
