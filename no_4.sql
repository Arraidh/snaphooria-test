SELECT Ponsel.Merek, COUNT(Ponsel.Model)
FROM Ponsel
WHERE Ponsel.DualSim = TRUE
GROUP BY Ponsel.Merek;
