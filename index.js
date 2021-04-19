//boton de iniciar carrera cuando los contendant esten listos
document.addEventListener("DOMContentLoaded", function (event) {

    buildPillCar("f3ea3d75-d393-4be9-bf7c-0d7b46b5ba2d", "Audi A3", "23000", "100",
        "https://www.coches.com/fotos_historicas/audi/A3-Sportback/high_178fdb140c96f1c22145cff06ac91d78.jpg");

    buildPillCar("d5f701ab-356f-4307-976d-d64e62d78e93", "Lada 2107", "2000", "60",
        "https://www.coches.com/fotos_historicas/lada/2107-1992/lada_2107-1992_r10.jpg");

    document.querySelectorAll('.pill').forEach(function (element) {
        element.addEventListener('click', function (event) {
            putInCompetition(event.currentTarget);
        })
    });

    document.addEventListener('winner', function (event) {
        alert("El ganador es: " + event.detail.winner)
    });
});

function putInCompetition(element) {
    if (document.querySelector('#firstContendant').firstChild === null) {
        setInPosition(element, '#firstContendant');
    } else if (document.querySelector('#secondContendant').firstChild === null) {
        setInPosition(element, '#secondContendant');
        const contendants = document.querySelectorAll('.contendant');
        window.scroll(0, 1000)
        contendants.forEach(function (contendant) {
            const imgElement = contendant.querySelector('img');
            move(contendant, imgElement.dataset.name, "right", imgElement.dataset.acceleration);
        })
    }
}

function setInPosition(element, positionId) {
    const imgElement = element.querySelector('.img');
    let position = document.querySelector(positionId);
    const imgNode = document.createElement('img');
    imgNode.classList.add('img');
    imgNode.setAttribute('src', imgElement.getAttribute('src'));
    imgNode.dataset.name = element.querySelector('.name').textContent;
    imgNode.dataset.acceleration = element.querySelector('.hp').textContent;
    position.appendChild(imgNode);
}