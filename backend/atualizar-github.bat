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
git commit -m "%mensagem% - %date%"
git push
title ultima atualizacao %date% as %time%.
:nao
cls
title envio cancelado.
echo envio cancelado.
pause
cls
title .
