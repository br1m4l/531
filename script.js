function calculate() {
    const oneRepMax = document.getElementById('oneRepMax').value;
    const trainingMax = oneRepMax * 0.9;

    const percentages = [
        [0.65, 0.75, 0.85],
        [0.70, 0.80, 0.90],
        [0.75, 0.85, 0.95]
    ];

    for (let week = 1; week <= 3; week++) {
        for (let set = 1; set <= 3; set++) {
            const weight = Math.round(trainingMax * percentages[week-1][set-1] / 2.5) * 2.5;
            document.getElementById(`w${week}s${set}`).textContent = `${weight} kg`;
        }
    }

    document.getElementById('results').style.display = 'table';
}