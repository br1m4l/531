document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calculate();
});

function calculate() {
    const oneRepMax = parseFloat(document.getElementById('oneRepMax').value);
    const trainingMax = oneRepMax * 0.9;

    const percentages = [
        [0.65, 0.75, 0.85],
        [0.70, 0.80, 0.90],
        [0.75, 0.85, 0.95]
    ];

    let resultsHTML = '';

    for (let week = 1; week <= 3; week++) {
        resultsHTML += '<tr>';
        resultsHTML += `<td>Semaine ${week}</td>`;
        for (let set = 0; set < 3; set++) {
            const weight = Math.round(trainingMax * percentages[week-1][set] / 2.5) * 2.5;
            resultsHTML += `<td>${weight} kg</td>`;
        }
        resultsHTML += '</tr>';
    }

    document.getElementById('resultsBody').innerHTML = resultsHTML;
    document.getElementById('results').style.display = 'block';
}