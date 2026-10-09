@echo off
title Mitsubishi Samarinda - Sales Hasan Server
echo ========================================================
echo   Dealer Mitsubishi Samarinda - PT Mahakam Berlian Samjaya
echo   Website Sales Landing Page: HASAN (0811-7464-123)
echo ========================================================
echo Menjalankan local web server di http://localhost:8080 ...
echo Tekan Ctrl+C untuk menghentikan server.
start http://localhost:8080
python -m http.server 8080
pause
