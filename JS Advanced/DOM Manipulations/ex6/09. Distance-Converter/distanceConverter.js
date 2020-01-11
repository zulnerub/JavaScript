function attachEventsListeners() {
    function convert() {
        const input = Number(document.getElementById('inputDistance').value);
        const fromMetricUnits = document.getElementById('inputUnits').value;
        const toMetricUnits = document.getElementById('outputUnits').value;
        const output = document.getElementById('outputDistance');

        let metric = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        };

        output.value = (input * metric[fromMetricUnits]) / metric[toMetricUnits];
    }

    document.getElementById('convert')
        .addEventListener('click', convert);

}