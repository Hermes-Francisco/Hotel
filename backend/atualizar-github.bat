@echo off
cls
title atualizando projeto Hotel no meu gitHub
echo escreva a mensagem do commit.
git add .
set /p mensagem=
git commit -m "%mensagem% - %date%"
git push