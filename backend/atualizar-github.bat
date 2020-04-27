@echo off
cls
title atualizando projeto Hotel no meu gitHub
git add .
set /p mensagem=
git commit -m "%mensagem% - %date%"
git push