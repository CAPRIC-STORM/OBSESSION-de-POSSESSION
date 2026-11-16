@echo off
chcp 65001 >nul
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
    py -3 versionner.py
) else (
    python versionner.py
)
if errorlevel 1 (
    echo.
    echo ECHEC : installer Python 3 ou verifier les fichiers du site.
) else (
    echo.
    echo Versions mises a jour. Publiez maintenant les changements sur GitHub.
)
pause
