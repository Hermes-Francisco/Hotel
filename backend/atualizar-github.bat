@echo off
cls
title atualizando projeto Hotel no meu gitHub
echo escreva a mensagem do commit.
set /p mensagem=
cls
echo confirmar atualizacao com a mensagem "%mensagem%"? (S/N)
set /p sn=
if %sn% == s goto sim
goto nao
:sim
cls
title atualizando...
git add .
title atualizando...(1/3)
git commit -m "%mensagem% - %date%"
title atualizando...(2/3)
git push
title atualizando...(3/3)
echo.
pause
title ultima atualizacao %date% as %time%.
goto fim
:nao
cls
title envio cancelado.
echo envio cancelado.
pause
cls
title .
:fim
cls