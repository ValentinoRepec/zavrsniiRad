document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.kviz2');
    const submitButton = form.querySelector('input[type="submit"]');
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const radioGroups = form.querySelectorAll('input[type="radio"]');
        
        let userSelections = {};
        let correctAnswers = {
            'pozicija': 'Playmaker',
            'datum_rodenja': 'Travanj 1, 1979', 
            'olimpijska_zlata': '2',
            'nacionalnost': 'Hrvat',
            'prvi_klub': 'RK Zagreb',
            'ehf_euro': '4',
            'znacajna_osobina': 'Izvanredne asistencije',
            'zadnji_klub': 'Paris Saint-Germain',
        };
        
        
        radioGroups.forEach(function(radio) {
            if (radio.checked) {
                userSelections[radio.name] = radio.value;
            }
        });
        
        let score = 0;
        for (let question in correctAnswers) {
            if (userSelections[question] === correctAnswers[question]) {
                score++;
            }
        }
        
        if (score === 8) {
            Swal.fire({
                title: 'Bravo!',
                html: 'Čestitamo, dobili ste 100% na kvizu! 🎉',
                icon: 'success',
                confirmButtonText: 'OK',
                showCancelButton: false,
                animation: true,
                customClass: {
                    popup: 'animated tada'
                }
            });
        } else {
            Swal.fire({
                title: 'Rezultat kviza',
                text: 'Vaš rezultat je: ' + score + '/8',
                icon: 'info',
                confirmButtonText: 'OK',
                showCancelButton: false
            });
        }
        
        radioGroups.forEach(function(radio) {
            radio.checked = false;
        });
    });
});

