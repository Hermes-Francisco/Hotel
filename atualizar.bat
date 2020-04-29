@echo off
cls
title Atualizando projeto Hotel no seu gitHub
echo Escreva a mensagem do commit.
set /p mensagem=
cls
echo Voce vai mudar os seguintes arquivos:
echo.
git status -s
echo.
echo Confirmar atualizacao com a mensagem "%mensagem%"? (S/N)
set /p sn= 
if %sn% == s goto sim
goto nao
:sim
cls
title Atualizando...
git add .
title Atualizando...(1/3)
git commit -m "%mensagem% - %date%"
title Atualizando...(2/3)
git push
title Atualizando...(3/3)
echo.
pause
title Ultima atualizacao %date% as %time%.
goto fim
:nao
cls
title Envio cancelado.
echo Envio cancelado.
pause
cls
title .
:fim
cls