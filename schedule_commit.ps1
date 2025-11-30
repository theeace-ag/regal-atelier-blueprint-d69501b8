$targetDate = Get-Date -Date "2025-12-01 00:00:00"
$currentDate = Get-Date

if ($currentDate -ge $targetDate) {
    Write-Host "Target date has already passed. Committing immediately."
} else {
    $secondsToWait = ($targetDate - $currentDate).TotalSeconds
    Write-Host "Current time: $currentDate"
    Write-Host "Target time:  $targetDate"
    Write-Host "Waiting $($secondsToWait.ToString("F0")) seconds..."
    
    # Sleep until the target date
    Start-Sleep -Seconds $secondsToWait
}

Write-Host "Executing git commands..."
# Ensure we are in the correct directory (script's directory)
Set-Location $PSScriptRoot

git add .
git commit -m "Resell page updates (Scheduled)"
git push

Write-Host "Scheduled commit completed."
