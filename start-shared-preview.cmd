@echo off
cd /d "%~dp0"
echo Project folder:
echo   %CD%
echo.
echo Checking Node.js...
where node
if errorlevel 1 (
  echo.
  echo Node.js was not found. Please install Node.js first.
  pause
  exit /b 1
)
echo.
echo Starting shared preview at:
echo   Local:   http://localhost:3000
echo   Network: http://192.168.0.59:3000
echo.
echo Keep this window open while sharing the page.
echo Press Ctrl+C to stop the server.
echo.
node scripts/dev-host.mjs
echo.
echo The preview server stopped or failed to start.
pause
