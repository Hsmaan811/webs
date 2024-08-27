// script.js

document.getElementById('calculate').addEventListener('click', function() {
  // Get form values
  const distance = parseFloat(document.getElementById('distance').value);
  const food = parseFloat(document.getElementById('food').value);
  const flights = parseFloat(document.getElementById('flights').value);
  const transport = document.getElementById('transport').value;

  // Simplified carbon footprint calculation (factors are placeholders)
  const distanceFactor = 0.0002; // CO2 emission per km
  const foodFactor = 0.05; // CO2 emission per kg of food
  const flightFactor = 0.25; // CO2 emission per flight
  const transportFactors = {
      car: 0.2, // CO2 emission per km by car
      train: 0.05, // CO2 emission per km by train
      bus: 0.1 // CO2 emission per km by bus
  };

  const transportFactor = transportFactors[transport] || 0;

  const carbonFootprint = (distance * transportFactor) +
                          (food * foodFactor) +
                          (flights * flightFactor);

  // Display the result
  document.getElementById('footprint-result').innerText = `${carbonFootprint.toFixed(2)} tons`;
});
