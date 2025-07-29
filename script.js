// Extended trades data with more details and spanning 2 years

const trades = [
  { id: 1, date: '2024-01-05', symbol: 'BTCUSD', type: 'Long', size: 1.5, entry: 42000, exit: 43250, profit: 1875.00, notes: 'Breakout above resistance', duration: '4h' },
  { id: 2, date: '2024-01-08', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 2250, exit: 2180, profit: 1400.00, notes: 'Failed retest of ATH', duration: '6h' },
  { id: 3, date: '2024-01-12', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 95, exit: 102, profit: 700.00, notes: 'Strong momentum', duration: '1d' },
  { id: 4, date: '2024-01-15', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 42800, exit: 42200, profit: -600.00, notes: 'Stop loss hit', duration: '2h' },
  { id: 5, date: '2024-01-18', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 2200, exit: 2300, profit: 1500.00, notes: 'Nice trend continuation', duration: '8h' },
  { id: 6, date: '2024-01-22', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 105, exit: 110, profit: -500.00, notes: 'Reversal failed', duration: '3h' },
  { id: 7, date: '2024-01-25', symbol: 'BTCUSD', type: 'Short', size: 0.5, entry: 43500, exit: 42500, profit: 500.00, notes: 'Scalp trade', duration: '1h' },
  { id: 8, date: '2024-01-28', symbol: 'ETHUSD', type: 'Long', size: 2.0, entry: 2350, exit: 2450, profit: 2000.00, notes: 'Good support bounce', duration: '1d' },
  { id: 9, date: '2024-02-02', symbol: 'SOLUSD', type: 'Long', size: 1.5, entry: 110, exit: 118, profit: 1200.00, notes: 'Strong trend continuation', duration: '2d' },
  { id: 10, date: '2024-02-05', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 43000, exit: 42000, profit: -1000.00, notes: 'Market turned bearish', duration: '6h' },
  { id: 11, date: '2024-02-08', symbol: 'ETHUSD', type: 'Short', size: 1.0, entry: 2400, exit: 2450, profit: -500.00, notes: 'Mistimed entry', duration: '4h' },
  { id: 12, date: '2024-02-12', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 120, exit: 130, profit: 1000.00, notes: 'Good volume spike', duration: '1d' },
  { id: 13, date: '2024-02-15', symbol: 'BTCUSD', type: 'Short', size: 1.5, entry: 44000, exit: 43000, profit: 1500.00, notes: 'Resistance hold', duration: '8h' },
  { id: 14, date: '2024-02-18', symbol: 'ETHUSD', type: 'Long', size: 2.0, entry: 2500, exit: 2600, profit: 2000.00, notes: 'Breakout trade', duration: '1d' },
  { id: 15, date: '2024-02-22', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 135, exit: 130, profit: 500.00, notes: 'Pullback trade', duration: '6h' },
  { id: 16, date: '2024-02-25', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 45000, exit: 46000, profit: 1000.00, notes: 'Continuation pattern', duration: '1d' },
  { id: 17, date: '2024-03-01', symbol: 'ETHUSD', type: 'Short', size: 1.5, entry: 2650, exit: 2550, profit: 1500.00, notes: 'Top formation', duration: '1d' },
  { id: 18, date: '2024-03-05', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 140, exit: 135, profit: -500.00, notes: 'False breakout', duration: '4h' },
  { id: 19, date: '2024-03-08', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 47000, exit: 48000, profit: 1000.00, notes: 'Bull flag', duration: '1d' },
  { id: 20, date: '2024-03-12', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 2700, exit: 2600, profit: 2000.00, notes: 'Double top', duration: '1d' },
  { id: 21, date: '2024-03-15', symbol: 'SOLUSD', type: 'Long', size: 1.5, entry: 150, exit: 160, profit: 1500.00, notes: 'Trend continuation', duration: '2d' },
  { id: 22, date: '2024-03-18', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 49000, exit: 48000, profit: 1000.00, notes: 'Resistance rejection', duration: '8h' },
  { id: 23, date: '2024-03-22', symbol: 'ETHUSD', type: 'Long', size: 1.0, entry: 2800, exit: 2900, profit: 1000.00, notes: 'Breakout', duration: '1d' },
  { id: 24, date: '2024-03-25', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 170, exit: 165, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 25, date: '2024-04-01', symbol: 'BTCUSD', type: 'Long', size: 1.5, entry: 50000, exit: 52000, profit: 3000.00, notes: 'Bullish momentum', duration: '3d' },
  { id: 26, date: '2024-04-05', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 3000, exit: 2900, profit: 2000.00, notes: 'Top formation', duration: '1d' },
  { id: 27, date: '2024-04-08', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 180, exit: 175, profit: -500.00, notes: 'Stop loss hit', duration: '4h' },
  { id: 28, date: '2024-04-12', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 53000, exit: 54000, profit: 1000.00, notes: 'Continuation', duration: '1d' },
  { id: 29, date: '2024-04-15', symbol: 'ETHUSD', type: 'Short', size: 1.5, entry: 3100, exit: 3000, profit: 1500.00, notes: 'Resistance hold', duration: '1d' },
  { id: 30, date: '2024-04-18', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 190, exit: 200, profit: 1000.00, notes: 'Breakout', duration: '2d' },
  { id: 31, date: '2024-05-01', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 55000, exit: 54000, profit: 1000.00, notes: 'Pullback', duration: '8h' },
  { id: 32, date: '2024-05-05', symbol: 'ETHUSD', type: 'Long', size: 2.0, entry: 3200, exit: 3300, profit: 2000.00, notes: 'Trend continuation', duration: '1d' },
  { id: 33, date: '2024-05-08', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 210, exit: 205, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 34, date: '2024-05-12', symbol: 'BTCUSD', type: 'Long', size: 1.5, entry: 56000, exit: 57000, profit: 1500.00, notes: 'Breakout', duration: '1d' },
  { id: 35, date: '2024-05-15', symbol: 'ETHUSD', type: 'Short', size: 1.0, entry: 3400, exit: 3350, profit: 500.00, notes: 'Resistance', duration: '8h' },
  { id: 36, date: '2024-05-18', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 220, exit: 230, profit: 1000.00, notes: 'Momentum', duration: '2d' },
  { id: 37, date: '2024-06-01', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 58000, exit: 57000, profit: 1000.00, notes: 'Pullback', duration: '1d' },
  { id: 38, date: '2024-06-05', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 3500, exit: 3600, profit: 1500.00, notes: 'Breakout', duration: '1d' },
  { id: 39, date: '2024-06-08', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 240, exit: 235, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 40, date: '2024-06-12', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 59000, exit: 60000, profit: 1000.00, notes: 'Continuation', duration: '1d' },
  { id: 41, date: '2024-06-15', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 3700, exit: 3600, profit: 2000.00, notes: 'Top formation', duration: '1d' },
  { id: 42, date: '2024-06-18', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 250, exit: 260, profit: 1000.00, notes: 'Breakout', duration: '2d' },
  { id: 43, date: '2024-07-01', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 61000, exit: 60000, profit: 1000.00, notes: 'Pullback', duration: '1d' },
  { id: 44, date: '2024-07-05', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 3800, exit: 3900, profit: 1500.00, notes: 'Trend continuation', duration: '1d' },
  { id: 45, date: '2024-07-08', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 270, exit: 265, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 46, date: '2024-07-12', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 62000, exit: 63000, profit: 1000.00, notes: 'Continuation', duration: '1d' },
  { id: 47, date: '2024-07-15', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 4000, exit: 3900, profit: 2000.00, notes: 'Resistance', duration: '1d' },
  { id: 48, date: '2024-07-18', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 280, exit: 290, profit: 1000.00, notes: 'Breakout', duration: '2d' },
  { id: 49, date: '2024-08-01', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 64000, exit: 63000, profit: 1000.00, notes: 'Pullback', duration: '1d' },
  { id: 50, date: '2024-08-05', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 4100, exit: 4200, profit: 1500.00, notes: 'Trend continuation', duration: '1d' },
  { id: 51, date: '2024-08-08', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 300, exit: 295, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 52, date: '2024-08-12', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 65000, exit: 66000, profit: 1000.00, notes: 'Continuation', duration: '1d' },
  { id: 53, date: '2024-08-15', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 4300, exit: 4200, profit: 2000.00, notes: 'Resistance', duration: '1d' },
  { id: 54, date: '2024-08-18', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 310, exit: 320, profit: 1000.00, notes: 'Breakout', duration: '2d' },
  { id: 55, date: '2024-09-01', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 67000, exit: 66000, profit: 1000.00, notes: 'Pullback', duration: '1d' },
  { id: 56, date: '2024-09-05', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 4400, exit: 4500, profit: 1500.00, notes: 'Trend continuation', duration: '1d' },
  { id: 57, date: '2024-09-08', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 330, exit: 325, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 58, date: '2024-09-12', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 68000, exit: 69000, profit: 1000.00, notes: 'Continuation', duration: '1d' },
  { id: 59, date: '2024-09-15', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 4600, exit: 4500, profit: 2000.00, notes: 'Resistance', duration: '1d' },
  { id: 60, date: '2024-09-18', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 340, exit: 350, profit: 1000.00, notes: 'Breakout', duration: '2d' },
  { id: 61, date: '2024-10-01', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 70000, exit: 69000, profit: 1000.00, notes: 'Pullback', duration: '1d' },
  { id: 62, date: '2024-10-05', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 4700, exit: 4800, profit: 1500.00, notes: 'Trend continuation', duration: '1d' },
  { id: 63, date: '2024-10-08', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 360, exit: 355, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 64, date: '2024-10-12', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 71000, exit: 72000, profit: 1000.00, notes: 'Continuation', duration: '1d' },
  { id: 65, date: '2024-10-15', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 4900, exit: 4800, profit: 2000.00, notes: 'Resistance', duration: '1d' },
  { id: 66, date: '2024-10-18', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 370, exit: 380, profit: 1000.00, notes: 'Breakout', duration: '2d' },
  { id: 67, date: '2024-11-01', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 73000, exit: 72000, profit: 1000.00, notes: 'Pullback', duration: '1d' },
  { id: 68, date: '2024-11-05', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 5000, exit: 5100, profit: 1500.00, notes: 'Trend continuation', duration: '1d' },
  { id: 69, date: '2024-11-08', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 390, exit: 385, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 70, date: '2024-11-12', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 74000, exit: 75000, profit: 1000.00, notes: 'Continuation', duration: '1d' },
  { id: 71, date: '2024-11-15', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 5200, exit: 5100, profit: 2000.00, notes: 'Resistance', duration: '1d' },
  { id: 72, date: '2024-11-18', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 400, exit: 410, profit: 1000.00, notes: 'Breakout', duration: '2d' },
  { id: 73, date: '2024-12-01', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 76000, exit: 75000, profit: 1000.00, notes: 'Pullback', duration: '1d' },
  { id: 74, date: '2024-12-05', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 5300, exit: 5400, profit: 1500.00, notes: 'Trend continuation', duration: '1d' },
  { id: 75, date: '2024-12-08', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 420, exit: 415, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 76, date: '2024-12-12', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 77000, exit: 78000, profit: 1000.00, notes: 'Continuation', duration: '1d' },
  { id: 77, date: '2024-12-15', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 5500, exit: 5400, profit: 2000.00, notes: 'Resistance', duration: '1d' },
  { id: 78, date: '2024-12-18', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 430, exit: 440, profit: 1000.00, notes: 'Breakout', duration: '2d' },
  { id: 79, date: '2025-01-05', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 80000, exit: 79000, profit: 1000.00, notes: 'Pullback', duration: '1d' },
  { id: 80, date: '2025-01-08', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 5600, exit: 5700, profit: 1500.00, notes: 'Trend continuation', duration: '1d' },
  { id: 81, date: '2025-01-12', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 450, exit: 445, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 82, date: '2025-01-15', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 81000, exit: 82000, profit: 1000.00, notes: 'Continuation', duration: '1d' },
  { id: 83, date: '2025-01-18', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 5800, exit: 5700, profit: 2000.00, notes: 'Resistance', duration: '1d' },
  { id: 84, date: '2025-01-22', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 460, exit: 470, profit: 1000.00, notes: 'Breakout', duration: '2d' },
  { id: 85, date: '2025-02-01', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 83000, exit: 82000, profit: 1000.00, notes: 'Pullback', duration: '1d' },
  { id: 86, date: '2025-02-05', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 5900, exit: 6000, profit: 1500.00, notes: 'Trend continuation', duration: '1d' },
  { id: 87, date: '2025-02-08', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 480, exit: 475, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 88, date: '2025-02-12', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 84000, exit: 85000, profit: 1000.00, notes: 'Continuation', duration: '1d' },
  { id: 89, date: '2025-02-15', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 6100, exit: 6000, profit: 2000.00, notes: 'Resistance', duration: '1d' },
  { id: 90, date: '2025-02-18', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 490, exit: 500, profit: 1000.00, notes: 'Breakout', duration: '2d' },
  { id: 91, date: '2025-03-01', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 86000, exit: 85000, profit: 1000.00, notes: 'Pullback', duration: '1d' },
  { id: 92, date: '2025-03-05', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 6200, exit: 6300, profit: 1500.00, notes: 'Trend continuation', duration: '1d' },
  { id: 93, date: '2025-03-08', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 510, exit: 505, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 94, date: '2025-03-12', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 87000, exit: 88000, profit: 1000.00, notes: 'Continuation', duration: '1d' },
  { id: 95, date: '2025-03-15', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 6400, exit: 6300, profit: 2000.00, notes: 'Resistance', duration: '1d' },
  { id: 96, date: '2025-03-18', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 520, exit: 530, profit: 1000.00, notes: 'Breakout', duration: '2d' },
  { id: 97, date: '2025-04-01', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 89000, exit: 88000, profit: 1000.00, notes: 'Pullback', duration: '1d' },
  { id: 98, date: '2025-04-05', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 6500, exit: 6600, profit: 1500.00, notes: 'Trend continuation', duration: '1d' },
  { id: 99, date: '2025-04-08', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 540, exit: 535, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 100, date: '2025-04-12', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 90000, exit: 91000, profit: 1000.00, notes: 'Continuation', duration: '1d' },
  { id: 101, date: '2025-05-01', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 6700, exit: 6600, profit: 2000.00, notes: 'Resistance', duration: '1d' },
  { id: 102, date: '2025-05-05', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 550, exit: 560, profit: 1000.00, notes: 'Breakout', duration: '2d' },
  { id: 103, date: '2025-06-01', symbol: 'BTCUSD', type: 'Short', size: 1.0, entry: 92000, exit: 91000, profit: 1000.00, notes: 'Pullback', duration: '1d' },
  { id: 104, date: '2025-06-05', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 6800, exit: 6900, profit: 1500.00, notes: 'Trend continuation', duration: '1d' },
  { id: 105, date: '2025-06-08', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 570, exit: 565, profit: 500.00, notes: 'Pullback', duration: '6h' },
  { id: 106, date: '2025-07-01', symbol: 'BTCUSD', type: 'Long', size: 1.5, entry: 42000, exit: 43250, profit: 1875.00, notes: 'Breakout above resistance', duration: '4h' },
  { id: 107, date: '2025-07-02', symbol: 'ETHUSD', type: 'Short', size: 2.0, entry: 2250, exit: 2180, profit: 1400.00, notes: 'Failed retest of ATH', duration: '6h' },
  { id: 108, date: '2025-07-03', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 95, exit: 102, profit: 700.00, notes: 'Strong momentum', duration: '1d' },
  { id: 109, date: '2025-07-04', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 42800, exit: 42200, profit: -600.00, notes: 'Stop loss hit', duration: '2h' },
  { id: 110, date: '2025-07-05', symbol: 'ETHUSD', type: 'Long', size: 1.5, entry: 2200, exit: 2300, profit: 1500.00, notes: 'Nice trend continuation', duration: '8h' },
  { id: 111, date: '2025-07-06', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 105, exit: 110, profit: -500.00, notes: 'Reversal failed', duration: '3h' },
  { id: 112, date: '2025-07-07', symbol: 'BTCUSD', type: 'Short', size: 0.5, entry: 43500, exit: 42500, profit: 500.00, notes: 'Scalp trade', duration: '1h' },
  { id: 113, date: '2025-07-08', symbol: 'ETHUSD', type: 'Long', size: 2.0, entry: 2350, exit: 2450, profit: 2000.00, notes: 'Good support bounce', duration: '1d' },
  { id: 114, date: '2025-07-09', symbol: 'SOLUSD', type: 'Long', size: 1.5, entry: 110, exit: 118, profit: 1200.00, notes: 'Strong trend continuation', duration: '2d' },
  { id: 115, date: '2025-07-10', symbol: 'BTCUSD', type: 'Long', size: 1.0, entry: 43000, exit: 42000, profit: -1000.00, notes: 'Market turned bearish', duration: '6h' },
  { id: 116, date: '2025-07-11', symbol: 'ETHUSD', type: 'Short', size: 1.0, entry: 2400, exit: 2450, profit: -500.00, notes: 'Mistimed entry', duration: '4h' },
  { id: 117, date: '2025-07-12', symbol: 'SOLUSD', type: 'Long', size: 1.0, entry: 120, exit: 130, profit: 1000.00, notes: 'Good volume spike', duration: '1d' },
  { id: 118, date: '2025-07-15', symbol: 'BTCUSD', type: 'Short', size: 1.5, entry: 44000, exit: 43000, profit: 1500.00, notes: 'Resistance hold', duration: '8h' },
  { id: 119, date: '2025-07-18', symbol: 'ETHUSD', type: 'Long', size: 2.0, entry: 2500, exit: 2600, profit: 2000.00, notes: 'Breakout trade', duration: '1d' },
  { id: 120, date: '2025-07-22', symbol: 'SOLUSD', type: 'Short', size: 1.0, entry: 135, exit: 130, profit: 500.00, notes: 'Pullback trade', duration: '6h' }
];

function generateMarketData(symbol, timeframe) {
  const basePrice = {
    'BTCUSD': 45000,
    'ETHUSD': 2500,
    'SOLUSD': 120,
    'SPX': 4500
  }[symbol] || 100;
  
  const volatility = {
    'BTCUSD': 0.03,
    'ETHUSD': 0.04,
    'SOLUSD': 0.05,
    'SPX': 0.01
  }[symbol] || 0.02;
  
  const data = [];
  const now = new Date();
  let date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
  
  const daysToShow = {
    '1d': 30,
    '1w': 90,
    '1m': 180,
    '3m': 365,
    '1y': 365
  }[timeframe] || 30;
  
  date = new Date(date.getTime() - (daysToShow * 24 * 60 * 60 * 1000));
  
  let currentPrice = basePrice;
  
  for (let i = 0; i < daysToShow; i++) {
    const open = currentPrice;
    const change = (Math.random() * 2 - 1) * volatility * basePrice;
    const close = open + change;
    const high = Math.max(open, close) + Math.random() * volatility * basePrice * 0.5;
    const low = Math.min(open, close) - Math.random() * volatility * basePrice * 0.5;
    const volume = Math.floor(Math.random() * 10000) + 5000;
    
    data.push({
      date: new Date(date),
      open,
      high,
      low,
      close,
      volume
    });
    
    currentPrice = close;
    date.setDate(date.getDate() + 1);
  }
  
  return data;
}


trades.forEach(trade => {
  trade.roi = ((trade.exit - trade.entry) / trade.entry * 100).toFixed(2) + '%';
});

const ITEMS_PER_PAGE = 10;
let currentPage = 1;
let filteredTrades = [...trades];

const totalTradesEl = document.getElementById('totalTrades');
const winRateEl = document.getElementById('winRate');
const avgProfitEl = document.getElementById('avgProfit');
const profitFactorEl = document.getElementById('profitFactor');
const tradesChangeEl = document.getElementById('tradesChange');
const winRateChangeEl = document.getElementById('winRateChange');
const avgProfitChangeEl = document.getElementById('avgProfitChange');
const tradesBody = document.getElementById('tradesBody');
const searchInput = document.getElementById('searchInput');
const filterSymbol = document.getElementById('filterSymbol');
const filterType = document.getElementById('filterType');
const filterTimeframe = document.getElementById('filterTimeframe');
const paginationEl = document.getElementById('pagination');
const paginationInfoEl = document.getElementById('paginationInfo');
const pageTitleEl = document.getElementById('pageTitle');

const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarToggleMobile = document.getElementById('sidebarToggleMobile');

const profileMenuBtn = document.getElementById('profileMenuBtn');

const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');

const tradeModal = document.getElementById('tradeModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalBody = document.getElementById('modalBody');

const addTradeBtn = document.getElementById('addTradeBtn');
const addTradeModal = document.getElementById('addTradeModal');
const addTradeForm = document.getElementById('addTradeForm');
const cancelTradeBtn = document.getElementById('cancelTradeBtn');

const notificationsBtn = document.getElementById('notificationsBtn');
const notificationsPanel = document.getElementById('notificationsPanel');
const notificationsList = document.getElementById('notificationsList');
const clearNotificationsBtn = document.getElementById('clearNotificationsBtn');

const tradesChartRange = document.getElementById('tradesChartRange');
const equityChartRange = document.getElementById('equityChartRange');

const marketTabs = document.querySelectorAll('.market-tab');
const timeframeBtns = document.querySelectorAll('.timeframe-btn');
const marketChartTitle = document.getElementById('marketChartTitle');
const currentPriceEl = document.getElementById('currentPrice');
const dailyChangeEl = document.getElementById('dailyChange');
const dailyHighEl = document.getElementById('dailyHigh');
const dailyLowEl = document.getElementById('dailyLow');
const dailyVolumeEl = document.getElementById('dailyVolume');

const navItems = document.querySelectorAll('.sidebar-nav li');
const contentSections = document.querySelectorAll('.content-section');

function setActiveSection(sectionId) {
  contentSections.forEach(sec => {
    if (sec.id === sectionId + 'Section') {
      sec.classList.add('active');
      sec.setAttribute('aria-hidden', 'false');
    } else {
      sec.classList.remove('active');
      sec.setAttribute('aria-hidden', 'true');
    }
  });
  navItems.forEach(item => {
    if (item.dataset.section === sectionId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  pageTitleEl.textContent = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
  
  if (sectionId === 'dashboard') {
    initBarChart();
    initPieChart();
    initLineChart();
  } else if (sectionId === 'analysis') {
    initSymbolWinRateChart();
    initProfitDistributionChart();
    initTimeOfDayChart();
    initDurationChart();
  } else if (sectionId === 'market') {
    initCandlestickChart();
  }
  
  if(window.innerWidth <= 991){
    sidebar.classList.add('collapsed');
    mainContentMarginFix();
  }
}

document.getElementById('sidebarOverlay').addEventListener('click', () => {
  sidebar.classList.remove('collapsed');
  mainContentMarginFix();
});

navItems.forEach(item => {
  item.addEventListener('click', () => setActiveSection(item.dataset.section));
});

function mainContentMarginFix() {
  const mainContent = document.querySelector('.main-content');
  if(sidebar.classList.contains('collapsed')) {
    mainContent.classList.add('sidebar-collapsed');
  } else {
    mainContent.classList.remove('sidebar-collapsed');
  }
}

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  mainContentMarginFix();
});

sidebarToggleMobile.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  mainContentMarginFix();
});

profileMenuBtn.addEventListener('click', () => {
  const expanded = profileMenuBtn.getAttribute('aria-expanded') === 'true';
  profileMenuBtn.setAttribute('aria-expanded', !expanded);
});

document.addEventListener('click', e => {
  if (!profileMenuBtn.contains(e.target)) {
    profileMenuBtn.setAttribute('aria-expanded', 'false');
  }
});

function loadDarkModePreference() {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'true') {
    document.body.classList.add('dark');
    darkModeIcon.textContent = 'light_mode';
  }
}

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    darkModeIcon.textContent = 'light_mode';
    localStorage.setItem('darkMode', 'true');
  } else {
    darkModeIcon.textContent = 'dark_mode';
    localStorage.setItem('darkMode', 'false');
  }
  
  initBarChart();
  initPieChart();
  initLineChart();
  initSymbolWinRateChart();
  initProfitDistributionChart();
  initTimeOfDayChart();
  initDurationChart();
  initCandlestickChart();
});

loadDarkModePreference();

function updateStats() {
  const totalTrades = filteredTrades.length;
  const wins = filteredTrades.filter(t => t.profit > 0).length;
  const losses = totalTrades - wins;
  const winRate = totalTrades ? ((wins / totalTrades) * 100).toFixed(1) : 0;
  
  const totalProfit = filteredTrades.reduce((sum, t) => sum + t.profit, 0);
  const avgProfit = totalTrades ? (totalProfit / totalTrades).toFixed(2) : 0;
  
  const totalWins = filteredTrades.filter(t => t.profit > 0).reduce((sum, t) => sum + t.profit, 0);
  const totalLosses = filteredTrades.filter(t => t.profit < 0).reduce((sum, t) => sum + Math.abs(t.profit), 0);
  const profitFactor = totalLosses ? (totalWins / totalLosses).toFixed(2) : '∞';
  
  const tradesChange = Math.floor(Math.random() * 20) - 5;
  const winRateChange = Math.floor(Math.random() * 15) - 3;
  const avgProfitChange = Math.floor(Math.random() * 25) - 5;

  totalTradesEl.textContent = totalTrades;
  winRateEl.textContent = `${winRate}%`;
  avgProfitEl.textContent = `$${avgProfit}`;
  profitFactorEl.textContent = profitFactor;
  
  tradesChangeEl.textContent = `${tradesChange >= 0 ? '+' : ''}${tradesChange}%`;
  tradesChangeEl.className = `change-badge ${tradesChange >= 0 ? 'positive' : 'negative'}`;
  
  winRateChangeEl.textContent = `${winRateChange >= 0 ? '+' : ''}${winRateChange}%`;
  winRateChangeEl.className = `change-badge ${winRateChange >= 0 ? 'positive' : 'negative'}`;
  
  avgProfitChangeEl.textContent = `${avgProfitChange >= 0 ? '+' : ''}${avgProfitChange}%`;
  avgProfitChangeEl.className = `change-badge ${avgProfitChange >= 0 ? 'positive' : 'negative'}`;
}

function populateFilterSymbols() {
  const symbols = Array.from(new Set(trades.map(t => t.symbol))).sort();
  symbols.forEach(sym => {
    const option = document.createElement('option');
    option.value = sym;
    option.textContent = sym;
    filterSymbol.appendChild(option);
  });
}

function renderTradesTable(page = 1) {
  tradesBody.innerHTML = '';

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageTrades = filteredTrades.slice(start, end);

  if (pageTrades.length === 0) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="10" style="text-align:center; color:#888; padding: 2rem;">No trades found matching your criteria.</td>`;
    tradesBody.appendChild(tr);
    renderPagination();
    return;
  }

  pageTrades.forEach(trade => {
    const tr = document.createElement('tr');
    tr.tabIndex = 0;
    tr.setAttribute('data-id', trade.id);
    tr.innerHTML = `
      <td>${formatDate(trade.date)}</td>
      <td><span class="symbol-tag">${trade.symbol}</span></td>
      <td><span class="type-tag ${trade.type.toLowerCase()}">${trade.type}</span></td>
      <td>${trade.size}</td>
      <td>$${trade.entry.toFixed(2)}</td>
      <td>$${trade.exit.toFixed(2)}</td>
      <td style="color: ${trade.profit >= 0 ? '#16a34a' : '#dc2626'}">
        ${trade.profit >= 0 ? '+' : ''}$${Math.abs(trade.profit).toFixed(2)}
      </td>
      <td style="color: ${trade.profit >= 0 ? '#16a34a' : '#dc2626'}">
        ${trade.roi}
      </td>
      <td class="notes-cell">${trade.notes}</td>
      <td class="actions-cell">
        <button class="btn-icon btn-edit" data-id="${trade.id}" aria-label="Edit trade">
          <span class="material-icons">edit</span>
        </button>
        <button class="btn-icon btn-delete" data-id="${trade.id}" aria-label="Delete trade">
          <span class="material-icons">delete</span>
        </button>
      </td>
    `;
    tradesBody.appendChild(tr);
  });

  renderPagination();
  addTradeRowListeners();
  addEditDeleteListeners();
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function renderPagination() {
  paginationEl.innerHTML = '';
  const totalPages = Math.ceil(filteredTrades.length / ITEMS_PER_PAGE);
  
  const start = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const end = Math.min(currentPage * ITEMS_PER_PAGE, filteredTrades.length);
  paginationInfoEl.textContent = `Showing ${start}-${end} of ${filteredTrades.length} trades`;
  
  if(totalPages <= 1) return;

  const createBtn = (text, disabled = false, clickHandler) => {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.disabled = disabled;
    btn.addEventListener('click', clickHandler);
    return btn;
  };

  paginationEl.appendChild(createBtn('«', currentPage === 1, () => {
    if(currentPage > 1) {
      currentPage--;
      renderTradesTable(currentPage);
    }
  }));

  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    const btn = createBtn(i, i === currentPage, () => {
      currentPage = i;
      renderTradesTable(currentPage);
    });
    if (i === currentPage) {
      btn.classList.add('active');
    }
    paginationEl.appendChild(btn);
  }

  paginationEl.appendChild(createBtn('»', currentPage === totalPages, () => {
    if(currentPage < totalPages) {
      currentPage++;
      renderTradesTable(currentPage);
    }
  }));
}

function applyFilters() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const symbolFilter = filterSymbol.value;
  const typeFilter = filterType.value;
  const timeframeFilter = filterTimeframe.value;

  let minDate = null;
  if (timeframeFilter) {
    const now = new Date();
    minDate = new Date(now);
    
    if (timeframeFilter === '1m') {
      minDate.setMonth(minDate.getMonth() - 1);
    } else if (timeframeFilter === '3m') {
      minDate.setMonth(minDate.getMonth() - 3);
    } else if (timeframeFilter === '6m') {
      minDate.setMonth(minDate.getMonth() - 6);
    } else if (timeframeFilter === '1y') {
      minDate.setFullYear(minDate.getFullYear() - 1);
    }
  }

  filteredTrades = trades.filter(t => {
    const matchesSearch = t.symbol.toLowerCase().includes(searchTerm) ||
      t.type.toLowerCase().includes(searchTerm) ||
      t.notes.toLowerCase().includes(searchTerm) ||
      t.date.includes(searchTerm);

    const matchesSymbol = symbolFilter ? t.symbol === symbolFilter : true;
    const matchesType = typeFilter ? t.type === typeFilter : true;
    const matchesTimeframe = minDate ? new Date(t.date) >= minDate : true;

    return matchesSearch && matchesSymbol && matchesType && matchesTimeframe;
  });

  currentPage = 1;
  updateStats();
  renderTradesTable(currentPage);
  
  if (document.getElementById('dashboardSection').classList.contains('active')) {
    initBarChart();
    initPieChart();
    initLineChart();
  }
}

function addTradeRowListeners() {
  const rows = tradesBody.querySelectorAll('tr[data-id]');
  rows.forEach(row => {
    row.addEventListener('click', (e) => {
      if (e.target.closest('.btn-edit') || e.target.closest('.btn-delete')) {
        return;
      }
      
      const tradeId = Number(row.getAttribute('data-id'));
      const trade = trades.find(t => t.id === tradeId);
      if(trade){
        openTradeModal(trade);
      }
    });
    
    row.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const tradeId = Number(row.getAttribute('data-id'));
        const trade = trades.find(t => t.id === tradeId);
        if(trade){
          openTradeModal(trade);
        }
      }
    });
  });
}

function addEditDeleteListeners() {
  document.querySelectorAll('.btn-edit').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const tradeId = Number(btn.getAttribute('data-id'));
      const trade = trades.find(t => t.id === tradeId);
      if (trade) {
        openEditTradeModal(trade);
      }
    });
  });
  
  document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const tradeId = Number(btn.getAttribute('data-id'));
      if (confirm('Are you sure you want to delete this trade?')) {
        deleteTrade(tradeId);
      }
    });
  });
}

function deleteTrade(tradeId) {
  const index = trades.findIndex(t => t.id === tradeId);
  if (index !== -1) {
    trades.splice(index, 1);
    applyFilters();
    addNotification('Trade deleted', `Trade #${tradeId} has been removed from your journal.`, 'delete');
  }
}

function openTradeModal(trade) {
  modalTitle.textContent = `Trade #${trade.id} Details`;
  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-group">
        <label>Date</label>
        <p>${formatDate(trade.date)}</p>
      </div>
      <div class="modal-group">
        <label>Symbol</label>
        <p><span class="symbol-tag">${trade.symbol}</span></p>
      </div>
      <div class="modal-group">
        <label>Type</label>
        <p><span class="type-tag ${trade.type.toLowerCase()}">${trade.type}</span></p>
      </div>
      <div class="modal-group">
        <label>Size</label>
        <p>${trade.size}</p>
      </div>
      <div class="modal-group">
        <label>Entry Price</label>
        <p>$${trade.entry.toFixed(2)}</p>
      </div>
      <div class="modal-group">
        <label>Exit Price</label>
        <p>$${trade.exit.toFixed(2)}</p>
      </div>
      <div class="modal-group">
        <label>Profit</label>
        <p style="color:${trade.profit >= 0 ? '#16a34a' : '#dc2626'}">
          ${trade.profit >= 0 ? '+' : ''}$${Math.abs(trade.profit).toFixed(2)}
        </p>
      </div>
      <div class="modal-group">
        <label>ROI</label>
        <p style="color:${trade.profit >= 0 ? '#16a34a' : '#dc2626'}">
          ${trade.roi}
        </p>
      </div>
      <div class="modal-group">
        <label>Duration</label>
        <p>${trade.duration}</p>
      </div>
      <div class="modal-group full-width">
        <label>Notes</label>
        <p class="modal-notes">${trade.notes}</p>
      </div>
    </div>
  `;
  tradeModal.classList.add('show');
  tradeModal.setAttribute('aria-hidden', 'false');
  modalCloseBtn.focus();
}

function openEditTradeModal(trade) {
  document.getElementById('tradeDate').value = trade.date;
  document.getElementById('tradeSymbol').value = trade.symbol;
  document.getElementById('tradeType').value = trade.type;
  document.getElementById('tradeSize').value = trade.size;
  document.getElementById('tradeEntry').value = trade.entry;
  document.getElementById('tradeExit').value = trade.exit;
  document.getElementById('tradeNotes').value = trade.notes;
  
  addTradeModalTitle.textContent = `Edit Trade #${trade.id}`;
  addTradeForm.setAttribute('data-edit-id', trade.id);
  addTradeModal.classList.add('show');
  addTradeModal.setAttribute('aria-hidden', 'false');
}

function closeTradeModal() {
  tradeModal.classList.remove('show');
  tradeModal.setAttribute('aria-hidden', 'true');
}

function closeAddTradeModal() {
  addTradeModal.classList.remove('show');
  addTradeModal.setAttribute('aria-hidden', 'true');
  addTradeForm.reset();
  addTradeForm.removeAttribute('data-edit-id');
}

modalCloseBtn.addEventListener('click', closeTradeModal);
tradeModal.addEventListener('click', e => {
  if(e.target === tradeModal){
    closeTradeModal();
  }
});

document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && tradeModal.classList.contains('show')){
    closeTradeModal();
  }
  if(e.key === 'Escape' && addTradeModal.classList.contains('show')){
    closeAddTradeModal();
  }
});

addTradeBtn.addEventListener('click', () => {
  addTradeModalTitle.textContent = 'Add New Trade';
  addTradeModal.classList.add('show');
  addTradeModal.setAttribute('aria-hidden', 'false');
});

cancelTradeBtn.addEventListener('click', closeAddTradeModal);

addTradeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const tradeData = {
    id: trades.length > 0 ? Math.max(...trades.map(t => t.id)) + 1 : 1,
    date: document.getElementById('tradeDate').value,
    symbol: document.getElementById('tradeSymbol').value,
    type: document.getElementById('tradeType').value,
    size: parseFloat(document.getElementById('tradeSize').value),
    entry: parseFloat(document.getElementById('tradeEntry').value),
    exit: parseFloat(document.getElementById('tradeExit').value),
    notes: document.getElementById('tradeNotes').value
  };
  
  const profit = tradeData.type === 'Long' 
    ? (tradeData.exit - tradeData.entry) * tradeData.size
    : (tradeData.entry - tradeData.exit) * tradeData.size;
  
  const roi = ((tradeData.type === 'Long' 
    ? (tradeData.exit - tradeData.entry) / tradeData.entry
    : (tradeData.entry - tradeData.exit) / tradeData.entry) * 100).toFixed(2) + '%';
  
  tradeData.profit = profit;
  tradeData.roi = roi;
  tradeData.duration = '1d'; 
  
  const editId = addTradeForm.getAttribute('data-edit-id');
  if (editId) {
    const index = trades.findIndex(t => t.id === parseInt(editId));
    if (index !== -1) {
      trades[index] = tradeData;
      addNotification('Trade updated', `Trade #${editId} has been updated.`, 'edit');
    }
  } else {
    trades.push(tradeData);
    addNotification('Trade added', `New trade #${tradeData.id} has been added to your journal.`, 'add');
  }
  
  closeAddTradeModal();
  applyFilters();
});

searchInput.addEventListener('input', applyFilters);
filterSymbol.addEventListener('change', applyFilters);
filterType.addEventListener('change', applyFilters);
filterTimeframe.addEventListener('change', applyFilters);

let barChartInstance, pieChartInstance, lineChartInstance;
let symbolWinRateChartInstance, profitDistributionChartInstance, timeOfDayChartInstance, durationChartInstance;
let candlestickChartInstance;

function initBarChart() {
  const ctxBar = document.getElementById('barChart').getContext('2d');
  
  const range = tradesChartRange.value;
  let monthsToShow = 12; // Default to 1 year
  if (range === '3m') monthsToShow = 3;
  else if (range === '6m') monthsToShow = 6;
  else if (range === 'all') monthsToShow = 24; // 2 years for "all"
  
  const now = new Date();
  const startDate = new Date(now);
  startDate.setMonth(startDate.getMonth() - monthsToShow);
  
  const filtered = trades.filter(t => new Date(t.date) >= startDate);
  
  const months = [];
  const tradesByMonth = [];
  const profitsByMonth = [];
  
  for (let i = 0; i < monthsToShow; i++) {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + i);
    
    const monthName = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear().toString().slice(2);
    months.push(`${monthName} '${year}`);
    
    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    
    const monthTrades = filtered.filter(t => {
      const tradeDate = new Date(t.date);
      return tradeDate >= monthStart && tradeDate <= monthEnd;
    });
    
    tradesByMonth.push(monthTrades.length);
    
    const monthProfit = monthTrades.reduce((sum, t) => sum + t.profit, 0);
    profitsByMonth.push(monthProfit);
  }
  
  if (barChartInstance) barChartInstance.destroy();
  
  const isDarkMode = document.body.classList.contains('dark');
  const bgColor = isDarkMode ? 'rgba(59, 130, 246, 0.7)' : 'rgba(37, 99, 235, 0.7)';
  const profitColor = isDarkMode ? 'rgba(22, 163, 74, 0.7)' : 'rgba(22, 163, 74, 0.7)';
  
  barChartInstance = new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Trades',
          data: tradesByMonth,
          backgroundColor: bgColor,
          borderRadius: 6,
          yAxisID: 'y'
        },
        {
          label: 'Profit',
          data: profitsByMonth,
          backgroundColor: profitColor,
          borderRadius: 6,
          type: 'line',
          borderColor: profitColor,
          borderWidth: 2,
          pointBackgroundColor: profitColor,
          pointRadius: 4,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { 
          position: 'top',
          labels: {
            color: isDarkMode ? '#e5e7eb' : '#374151'
          }
        },
        tooltip: { 
          mode: 'index', 
          intersect: false,
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          titleColor: isDarkMode ? '#e5e7eb' : '#111827',
          bodyColor: isDarkMode ? '#d1d5db' : '#4b5563',
          borderColor: isDarkMode ? '#374151' : '#e5e7eb',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: {
            color: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            color: isDarkMode ? '#9ca3af' : '#6b7280'
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Number of Trades',
            color: isDarkMode ? '#9ca3af' : '#6b7280'
          },
          grid: {
            color: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            color: isDarkMode ? '#9ca3af' : '#6b7280',
            stepSize: 1
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Profit ($)',
            color: isDarkMode ? '#9ca3af' : '#6b7280'
          },
          grid: {
            drawOnChartArea: false,
            color: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            color: isDarkMode ? '#9ca3af' : '#6b7280'
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    }
  });
}

function initPieChart() {
  const ctxPie = document.getElementById('pieChart').getContext('2d');
  
  const wins = filteredTrades.filter(t => t.profit > 0).length;
  const losses = filteredTrades.length - wins;
  
  const winPercentage = filteredTrades.length ? (wins / filteredTrades.length * 100).toFixed(1) : 0;
  const lossPercentage = filteredTrades.length ? (losses / filteredTrades.length * 100).toFixed(1) : 0;
  
  const totalProfit = filteredTrades.reduce((sum, t) => sum + t.profit, 0);
  const avgProfit = filteredTrades.length ? (totalProfit / filteredTrades.length).toFixed(2) : 0;
  
  const totalWins = filteredTrades.filter(t => t.profit > 0).reduce((sum, t) => sum + t.profit, 0);
  const totalLosses = filteredTrades.filter(t => t.profit < 0).reduce((sum, t) => sum + Math.abs(t.profit), 0);
  const profitFactor = totalLosses ? (totalWins / totalLosses).toFixed(2) : '∞';

  if (pieChartInstance) pieChartInstance.destroy();
  
  const isDarkMode = document.body.classList.contains('dark');
  const textColor = isDarkMode ? '#e5e7eb' : '#374151';
  
  pieChartInstance = new Chart(ctxPie, {
    type: 'doughnut',
    data: {
      labels: ['Wins', 'Losses'],
      datasets: [{
        data: [wins, losses],
        backgroundColor: ['#16a34a', '#dc2626'],
        borderColor: isDarkMode ? '#1f2937' : '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: { 
          position: 'bottom',
          labels: {
            color: textColor,
            padding: 20,
            font: {
              weight: '600'
            }
          }
        },
        tooltip: {
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          titleColor: isDarkMode ? '#e5e7eb' : '#111827',
          bodyColor: isDarkMode ? '#d1d5db' : '#4b5563',
          borderColor: isDarkMode ? '#374151' : '#e5e7eb',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.raw || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = Math.round((value / total) * 100);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        },
        title: {
          display: true,
          text: `Win Rate: ${winPercentage}%`,
          color: textColor,
          font: {
            size: 16,
            weight: '600'
          },
          padding: {
            bottom: 20
          }
        }
      }
    }
  });
}


function initLineChart() {
  const ctxLine = document.getElementById('lineChart').getContext('2d');
  
  const range = equityChartRange.value;
  let daysToShow = 365; 
  if (range === '1m') daysToShow = 30;
  else if (range === '3m') daysToShow = 90;
  else if (range === '6m') daysToShow = 180;
  
  const now = new Date();
  const startDate = new Date(now);
  startDate.setDate(startDate.getDate() - daysToShow);
  
  const filtered = trades.filter(t => new Date(t.date) >= startDate);
  filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  let runningBalance = 10000; 
  const equityData = [{ x: startDate, y: runningBalance }];
  const tradeMarkers = [];
  
  filtered.forEach(trade => {
    runningBalance += trade.profit;
    equityData.push({
      x: new Date(trade.date),
      y: runningBalance
    });
    
    tradeMarkers.push({
      type: 'point',
      xValue: new Date(trade.date),
      yValue: runningBalance,
      backgroundColor: trade.profit >= 0 ? '#16a34a' : '#dc2626',
      borderColor: '#ffffff',
      borderWidth: 2,
      radius: 4,
      label: {
        content: `$${trade.profit >= 0 ? '+' : ''}${trade.profit.toFixed(2)}`,
        enabled: true,
        position: trade.profit >= 0 ? 'top' : 'bottom',
        color: trade.profit >= 0 ? '#16a34a' : '#dc2626',
        font: {
          weight: 'bold'
        }
      }
    });
  });
  
  if (lineChartInstance) lineChartInstance.destroy();
  
  const isDarkMode = document.body.classList.contains('dark');
  const lineColor = isDarkMode ? '#3b82f6' : '#2563eb';
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
  const textColor = isDarkMode ? '#e5e7eb' : '#374151';
  const tickColor = isDarkMode ? '#9ca3af' : '#6b7280';
  
  lineChartInstance = new Chart(ctxLine, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Account Balance',
        data: equityData,
        borderColor: lineColor,
        borderWidth: 2,
        backgroundColor: 'transparent',
        pointRadius: 0,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          titleColor: isDarkMode ? '#e5e7eb' : '#111827',
          bodyColor: isDarkMode ? '#d1d5db' : '#4b5563',
          borderColor: isDarkMode ? '#374151' : '#e5e7eb',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              return `Balance: $${context.parsed.y.toFixed(2)}`;
            }
          }
        },
        annotation: {
          annotations: tradeMarkers
        }
      },
      scales: {
        x: {
          type: 'time',
          time: {
            unit: range === '1m' ? 'day' : range === '3m' ? 'week' : 'month',
            displayFormats: {
              day: 'MMM d',
              week: 'MMM d',
              month: 'MMM yyyy'
            }
          },
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor
          }
        },
        y: {
          title: {
            display: true,
            text: 'Account Balance ($)',
            color: tickColor
          },
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor,
            callback: function(value) {
              return '$' + value.toLocaleString();
            }
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    }
  });
}

function initLineChart() {
  const ctxLine = document.getElementById('lineChart').getContext('2d');
  
  const range = equityChartRange.value;
  let daysToShow = 365; // Default to 1 year
  if (range === '1m') daysToShow = 30;
  else if (range === '3m') daysToShow = 90;
  else if (range === '6m') daysToShow = 180;
  
  const now = new Date();
  const startDate = new Date(now);
  startDate.setDate(startDate.getDate() - daysToShow);
  
  const filtered = trades.filter(t => new Date(t.date) >= startDate);
  
  filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  
  let runningBalance = 10000;
  const equityData = [{ x: startDate, y: runningBalance }];
  const tradeMarkers = [];
  
  filtered.forEach(trade => {
    runningBalance += trade.profit;
    equityData.push({
      x: new Date(trade.date),
      y: runningBalance
    });
    
    tradeMarkers.push({
      type: 'point',
      xValue: new Date(trade.date),
      yValue: runningBalance,
      backgroundColor: trade.profit >= 0 ? '#16a34a' : '#dc2626',
      borderColor: '#ffffff',
      borderWidth: 2,
      radius: 4,
      label: {
        content: `$${trade.profit >= 0 ? '+' : ''}${trade.profit.toFixed(2)}`,
        enabled: true,
        position: trade.profit >= 0 ? 'top' : 'bottom',
        color: trade.profit >= 0 ? '#16a34a' : '#dc2626',
        font: {
          weight: 'bold'
        }
      }
    });
  });
  
  if (lineChartInstance) lineChartInstance.destroy();
  
  const isDarkMode = document.body.classList.contains('dark');
  const lineColor = isDarkMode ? '#3b82f6' : '#2563eb';
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
  const textColor = isDarkMode ? '#e5e7eb' : '#374151';
  const tickColor = isDarkMode ? '#9ca3af' : '#6b7280';
  
  lineChartInstance = new Chart(ctxLine, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Account Balance',
        data: equityData,
        borderColor: lineColor,
        borderWidth: 2,
        backgroundColor: 'transparent',
        pointRadius: 0,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          titleColor: isDarkMode ? '#e5e7eb' : '#111827',
          bodyColor: isDarkMode ? '#d1d5db' : '#4b5563',
          borderColor: isDarkMode ? '#374151' : '#e5e7eb',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              return `Balance: $${context.parsed.y.toFixed(2)}`;
            }
          }
        },
        annotation: {
          annotations: tradeMarkers
        }
      },
      scales: {
        x: {
          type: 'time',
          time: {
            unit: range === '1m' ? 'day' : range === '3m' ? 'week' : 'month',
            displayFormats: {
              day: 'MMM d',
              week: 'MMM d',
              month: 'MMM yyyy'
            }
          },
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor
          }
        },
        y: {
          title: {
            display: true,
            text: 'Account Balance ($)',
            color: tickColor
          },
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor,
            callback: function(value) {
              return '$' + value.toLocaleString();
            }
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    }
  });
}

function initSymbolWinRateChart() {
  const ctx = document.getElementById('symbolWinRateChart').getContext('2d');
  
  const symbols = Array.from(new Set(trades.map(t => t.symbol))).sort();
  const winRates = [];
  
  symbols.forEach(symbol => {
    const symbolTrades = trades.filter(t => t.symbol === symbol);
    const wins = symbolTrades.filter(t => t.profit > 0).length;
    const winRate = symbolTrades.length ? (wins / symbolTrades.length * 100) : 0;
    winRates.push(winRate);
  });
  
  if (symbolWinRateChartInstance) symbolWinRateChartInstance.destroy();
  
  const isDarkMode = document.body.classList.contains('dark');
  const bgColor = isDarkMode ? 'rgba(59, 130, 246, 0.7)' : 'rgba(37, 99, 235, 0.7)';
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
  const textColor = isDarkMode ? '#e5e7eb' : '#374151';
  const tickColor = isDarkMode ? '#9ca3af' : '#6b7280';
  
  symbolWinRateChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: symbols,
      datasets: [{
        label: 'Win Rate (%)',
        data: winRates,
        backgroundColor: bgColor,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          titleColor: isDarkMode ? '#e5e7eb' : '#111827',
          bodyColor: isDarkMode ? '#d1d5db' : '#4b5563',
          borderColor: isDarkMode ? '#374151' : '#e5e7eb',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              return `${context.parsed.y.toFixed(1)}% win rate`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor
          }
        },
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Win Rate (%)',
            color: tickColor
          },
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor,
            callback: function(value) {
              return value + '%';
            }
          }
        }
      }
    }
  });
}

function initProfitDistributionChart() {
  const ctx = document.getElementById('profitDistributionChart').getContext('2d');
  
  const profitRanges = [
    { min: -Infinity, max: -500, label: '< -$500' },
    { min: -500, max: -200, label: '-$500 to -$200' },
    { min: -200, max: 0, label: '-$200 to $0' },
    { min: 0, max: 200, label: '$0 to $200' },
    { min: 200, max: 500, label: '$200 to $500' },
    { min: 500, max: Infinity, label: '> $500' }
  ];
  
  const counts = profitRanges.map(range => {
    return trades.filter(t => t.profit > range.min && t.profit <= range.max).length;
  });
  
  if (profitDistributionChartInstance) profitDistributionChartInstance.destroy();
  
  const isDarkMode = document.body.classList.contains('dark');
  const bgColors = [
    'rgba(220, 38, 38, 0.7)', 
    'rgba(220, 38, 38, 0.5)',
    'rgba(220, 38, 38, 0.3)',
    'rgba(22, 163, 74, 0.3)',  
    'rgba(22, 163, 74, 0.5)',
    'rgba(22, 163, 74, 0.7)'
  ];
  
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
  const tickColor = isDarkMode ? '#9ca3af' : '#6b7280';
  
  profitDistributionChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: profitRanges.map(r => r.label),
      datasets: [{
        label: 'Number of Trades',
        data: counts,
        backgroundColor: bgColors,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          titleColor: isDarkMode ? '#e5e7eb' : '#111827',
          bodyColor: isDarkMode ? '#d1d5db' : '#4b5563',
          borderColor: isDarkMode ? '#374151' : '#e5e7eb',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Trades',
            color: tickColor
          },
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor,
            stepSize: 1
          }
        }
      }
    }
  });
}

function initTimeOfDayChart() {
  const ctx = document.getElementById('timeOfDayChart').getContext('2d');
  
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const hourLabels = hours.map(h => `${h}:00`);
  const profitsByHour = hours.map(hour => {
    const hourTrades = trades.filter(t => {
      const tradeDate = new Date(t.date);
      return tradeDate.getHours() === hour;
    });
    return hourTrades.reduce((sum, t) => sum + t.profit, 0);
  });
  
  if (timeOfDayChartInstance) timeOfDayChartInstance.destroy();
  
  const isDarkMode = document.body.classList.contains('dark');
  const bgColor = isDarkMode ? 'rgba(59, 130, 246, 0.7)' : 'rgba(37, 99, 235, 0.7)';
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
  const tickColor = isDarkMode ? '#9ca3af' : '#6b7280';
  
  timeOfDayChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: hourLabels,
      datasets: [{
        label: 'Profit by Hour',
        data: profitsByHour,
        backgroundColor: profitsByHour.map(p => p >= 0 ? 
          (isDarkMode ? 'rgba(22, 163, 74, 0.7)' : 'rgba(22, 163, 74, 0.7)') : 
          (isDarkMode ? 'rgba(220, 38, 38, 0.7)' : 'rgba(220, 38, 38, 0.7)')),
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          titleColor: isDarkMode ? '#e5e7eb' : '#111827',
          bodyColor: isDarkMode ? '#d1d5db' : '#4b5563',
          borderColor: isDarkMode ? '#374151' : '#e5e7eb',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              return `Profit: $${context.parsed.y.toFixed(2)}`;
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Hour of Day',
            color: tickColor
          },
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor
          }
        },
        y: {
          title: {
            display: true,
            text: 'Profit ($)',
            color: tickColor
          },
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor
          }
        }
      }
    }
  });
}

function initDurationChart() {
  const ctx = document.getElementById('durationChart').getContext('2d');
  
  const durationCategories = [
    { label: '< 1h', min: 0, max: 1 },
    { label: '1h - 4h', min: 1, max: 4 },
    { label: '4h - 8h', min: 4, max: 8 },
    { label: '8h - 1d', min: 8, max: 24 },
    { label: '1d - 3d', min: 24, max: 72 },
    { label: '> 3d', min: 72, max: Infinity }
  ];
  
  const durationData = durationCategories.map(cat => {
    return trades.filter(t => {
      const duration = t.duration;
      let hours = 0;
      
      if (duration.includes('h')) {
        hours = parseFloat(duration);
      } else if (duration.includes('d')) {
        hours = parseFloat(duration) * 24;
      }
      
      return hours > cat.min && hours <= cat.max;
    }).length;
  });
  
  if (durationChartInstance) durationChartInstance.destroy();
  
  const isDarkMode = document.body.classList.contains('dark');
  const bgColor = isDarkMode ? 'rgba(59, 130, 246, 0.7)' : 'rgba(37, 99, 235, 0.7)';
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
  const tickColor = isDarkMode ? '#9ca3af' : '#6b7280';
  
  durationChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: durationCategories.map(c => c.label),
      datasets: [{
        label: 'Number of Trades',
        data: durationData,
        backgroundColor: bgColor,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          titleColor: isDarkMode ? '#e5e7eb' : '#111827',
          bodyColor: isDarkMode ? '#d1d5db' : '#4b5563',
          borderColor: isDarkMode ? '#374151' : '#e5e7eb',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Trade Duration',
            color: tickColor
          },
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Trades',
            color: tickColor
          },
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor,
            stepSize: 1
          }
        }
      }
    }
  });
}

function initCandlestickChart() {
  const ctx = document.getElementById('candlestickChart').getContext('2d');
  
  const activeSymbol = document.querySelector('.market-tab.active').dataset.symbol;
  const activeTimeframe = document.querySelector('.timeframe-btn.active').dataset.tf;
  
  const marketData = generateMarketData(activeSymbol, activeTimeframe);
  
  const latestData = marketData[marketData.length - 1];
  const prevClose = marketData.length > 1 ? marketData[marketData.length - 2].close : latestData.open;
  const changePercent = ((latestData.close - prevClose) / prevClose * 100).toFixed(2);
  
  currentPriceEl.textContent = `$${latestData.close.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  dailyChangeEl.textContent = `${changePercent >= 0 ? '+' : ''}${changePercent}%`;
  dailyChangeEl.style.color = changePercent >= 0 ? '#16a34a' : '#dc2626';
  dailyHighEl.textContent = `$${latestData.high.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  dailyLowEl.textContent = `$${latestData.low.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  dailyVolumeEl.textContent = latestData.volume.toLocaleString();
  
  const chartData = marketData.map(d => ({
    x: d.date,
    o: d.open,
    h: d.high,
    l: d.low,
    c: d.close
  }));
  
  if (candlestickChartInstance) candlestickChartInstance.destroy();
  
  const isDarkMode = document.body.classList.contains('dark');
  const upColor = '#16a34a';
  const downColor = '#dc2626';
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
  const tickColor = isDarkMode ? '#9ca3af' : '#6b7280';
  
  candlestickChartInstance = new Chart(ctx, {
    type: 'candlestick',
    data: {
      datasets: [{
        label: activeSymbol,
        data: chartData,
        color: {
          up: upColor,
          down: downColor,
          unchanged: '#9ca3af',
        },
        borderColor: isDarkMode ? '#374151' : '#e5e7eb',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          titleColor: isDarkMode ? '#e5e7eb' : '#111827',
          bodyColor: isDarkMode ? '#d1d5db' : '#4b5563',
          borderColor: isDarkMode ? '#374151' : '#e5e7eb',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              const data = context.raw;
              return [
                `Open: $${data.o.toFixed(2)}`,
                `High: $${data.h.toFixed(2)}`,
                `Low: $${data.l.toFixed(2)}`,
                `Close: $${data.c.toFixed(2)}`
              ];
            }
          }
        }
      },
      scales: {
        x: {
          type: 'time',
          time: {
            unit: activeTimeframe === '1d' ? 'day' : 
                  activeTimeframe === '1w' ? 'week' : 
                  activeTimeframe === '1m' ? 'month' : 'month',
            displayFormats: {
              day: 'MMM d',
              week: 'MMM d',
              month: 'MMM yyyy'
            }
          },
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor
          }
        },
        y: {
          title: {
            display: true,
            text: 'Price ($)',
            color: tickColor
          },
          grid: {
            color: gridColor
          },
          ticks: {
            color: tickColor,
            callback: function(value) {
              return '$' + value.toLocaleString();
            }
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    }
  });
}

marketTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    marketTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    initCandlestickChart();
  });
});

timeframeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    timeframeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    initCandlestickChart();
  });
});

tradesChartRange.addEventListener('change', initBarChart);
equityChartRange.addEventListener('change', initLineChart);

function addNotification(title, message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  
  const icon = {
    'info': 'info',
    'success': 'check_circle',
    'warning': 'warning',
    'error': 'error',
    'add': 'add_circle',
    'edit': 'edit',
    'delete': 'remove_circle'
  }[type] || 'info';
  
  notification.innerHTML = `
    <span class="material-icons notification-icon">${icon}</span>
    <div class="notification-content">
      <h4>${title}</h4>
      <p>${message}</p>
    </div>
    <span class="material-icons notification-close">close</span>
  `;
  
  notificationsList.insertBefore(notification, notificationsList.firstChild);
  
  const badge = document.querySelector('.notification-badge');
  badge.textContent = parseInt(badge.textContent) + 1;
  
  setTimeout(() => {
    if (notification.parentNode) {
      notification.classList.add('fade-out');
      setTimeout(() => {
        notification.remove();
        updateNotificationBadge();
      }, 300);
    }
  }, 5000);
  
  notification.querySelector('.notification-close').addEventListener('click', () => {
    notification.remove();
    updateNotificationBadge();
  });
}

function updateNotificationBadge() {
  const count = document.querySelectorAll('.notification').length;
  const badge = document.querySelector('.notification-badge');
  badge.textContent = count;
  if (count === 0) {
    badge.style.display = 'none';
  } else {
    badge.style.display = 'flex';
  }
}

notificationsBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  notificationsPanel.classList.toggle('show');
});

clearNotificationsBtn.addEventListener('click', () => {
  notificationsList.innerHTML = '';
  updateNotificationBadge();
});

document.addEventListener('click', (e) => {
  if (!notificationsBtn.contains(e.target) && !notificationsPanel.contains(e.target)) {
    notificationsPanel.classList.remove('show');
  }
});

addNotification('Welcome to TradePulse Pro', 'Your dashboard is ready to use. Start by adding your first trade!', 'success');
addNotification('New feature added', 'Market data charts are now available in the Market section.', 'info');
addNotification('Weekly report', 'Your weekly performance report is now available.', 'warning');

populateFilterSymbols();
applyFilters();
mainContentMarginFix();
setActiveSection('dashboard');

if (!localStorage.getItem('tradesInitialized')) {
  localStorage.setItem('trades', JSON.stringify(trades));
  localStorage.setItem('tradesInitialized', 'true');
}  
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  if (email === TEST_EMAIL && password === TEST_PASSWORD) {
    // Successful login
    localStorage.setItem('isAuthenticated', 'true');
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid credentials. Use:\nEmail: trader@example.com\nPassword: TradePulse123');
  }
});
