document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculatorForm').addEventListener('submit', function(e) {
        e.preventDefault();
        calculate();
    });
});

function calculate() {
    const oneRepMax = parseFloat(document.getElementById('oneRepMax').value);
    const trainingMax = oneRepMax * 0.9;
    const schemaType = document.getElementById('schemaType').value;

    let percentages;
    let weekNames;

    if (schemaType === '531') {
        percentages = [
            [0.65, 0.75, 0.85],
            [0.70, 0.80, 0.90],
            [0.75, 0.85, 0.95]
        ];
        weekNames = ['Semaine 1 (5)', 'Semaine 2 (3)', 'Semaine 3 (1)'];
    } else if (schemaType === '351') {
        percentages = [
            [0.70, 0.80, 0.90],
            [0.65, 0.75, 0.85],
            [0.75, 0.85, 0.95]
        ];
        weekNames = ['Semaine 1 (3)', 'Semaine 2 (5)', 'Semaine 3 (1)'];
    } else if (schemaType === '5sPRO') {
        percentages = [
            [0.65, 0.75, 0.85],
            [0.70, 0.80, 0.90],
            [0.75, 0.85, 0.95]
        ];
        weekNames = ['Semaine 1', 'Semaine 2', 'Semaine 3'];
    }

    let resultsHTML = '';

    for (let week = 0; week < 3; week++) {
        resultsHTML += '<tr>';
        resultsHTML += `<td>${weekNames[week]}</td>`;
        for (let set = 0; set < 3; set++) {
            const weight = Math.round(trainingMax * percentages[week][set] / 2.5) * 2.5;
            let reps;
            if (schemaType === '5sPRO') {
                reps = '5';
            } else if (schemaType === '531' || schemaType === '351') {
                reps = (set === 2) ? (weekNames[week].includes('5') ? '5+' : weekNames[week].includes('3') ? '3+' : '1+') : '5';
            }
            resultsHTML += `<td>${weight} kg x ${reps}</td>`;
        }
        resultsHTML += '</tr>';
    }

    document.getElementById('resultsBody').innerHTML = resultsHTML;
    document.getElementById('results').style.display = 'block';
}