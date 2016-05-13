@echo off
echo Kill before Ember s 
taskkill /im cmd.exe /fi "windowtitle eq ember"
echo.
echo Remove tmp/dist files...
rd tmp /s /q
rd dist /s /q
echo.
echo Start ember server...
ember s