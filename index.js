let readySetGo = false;
document.addEventListener("DOMContentLoaded", function (event) {

    buildPillCar("f3ea3d75-d393-4be9-bf7c-0d7b46b5ba2d", "Audi A3", "23000", "100",
        "https://www.coches.com/fotos_historicas/audi/A3-Sportback/high_178fdb140c96f1c22145cff06ac91d78.jpg");

    buildPillCar("d5f701ab-356f-4307-976d-d64e62d78e93", "Lada 2107", "2000", "60",
        "https://www.coches.com/fotos_historicas/lada/2107-1992/lada_2107-1992_r10.jpg");

    //Capturar customEvent lanzado por move: en detail.winner el string del ganador
    document.addEventListener('winner', function (event) {
        alert("El ganador es: " + event.detail.winner)
    });

});

function startCompetition() {
    if (readySetGo) {
        window.scroll(0, 1000)
        const contestants = document.querySelectorAll('.contestant');
        contestants.forEach(function (contestant) {
            move(contestant, "XXX", "right", 0);
        })
    } else {
        alert('No están listos los participantes..');
    }
}