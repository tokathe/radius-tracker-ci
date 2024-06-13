#!sh
echo 'Starting Radius Tracker'
npx radius-tracker timelines ./radius-tracker.config.js 
echo 'Starting Radius Tracker Report'
npx radius-tracker report --database usages.sqlite.gz
echo 'Starting Report Server'
npx serve ./radius-tracker-report/