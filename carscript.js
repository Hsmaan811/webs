const calculatorForm = document.getElementById('calculator-form');
const distanceInput = document.getElementById('distance');
const modeSelect = document.getElementById('mode');
const energyInput = document.getElementById('energy');
const meatInput = document.getElementById('meat');
const recycleCheckbox = document.getElementById('recycle');
const calculateButton = document.getElementById('calculate');
const resultsDiv = document.getElementById('results');

calculateButton.addEventListener('click', calculateCarbonFootprint);

function calculateCarbonFootprint() {
  const distance = parseFloat(distanceInput.value);
  const mode = modeSelect.value;
  const energy = parseFloat(energyInput.value);
  const meat = parseFloat(meatInput.value);
  const recycle = recycleCheckbox.checked;

  let carbonFootprint = 0;

  // Calculate carbon footprint based on distance and mode of transportation
  if (mode === 'car') {
    carbonFootprint += distance * 0.41; // 0.41 kg CO2 per mile
  } else if (mode === 'plane') {
    carbonFootprint += distance * 0.24; // 0.24 kg CO2 per mile
  } else if (mode === 'train') {
    carbonFootprint += distance * 0.14; // 0.14 kg CO2
  }
}