document.addEventListener("DOMContentLoaded", function (event) {
    let carList = [];

    fetch('https://private-anon-0b6991f36b-carsapi1.apiary-mock.com/cars')
        .then(response => response.json())
        .then(data => carList = data);

    setTimeout(function () {
        const carTemplate = document.querySelector('#carPill');
        carList.slice(10, 12).forEach(function (car) {
            let node = carTemplate.cloneNode(true)
            node.id = car.id;
            let id = node.content.querySelector('.id');
            id.innerHTML = car.id;
            let name = node.content.querySelector('.name');
            name.innerHTML = car.make + ' ' + car.model;
            let price = node.content.querySelector('.price');
            price.innerHTML = car.price;
            let hp = node.content.querySelector('.hp');
            hp.innerHTML = car.horsepower;
            let img = node.content.querySelector('.img');
            img.src = car.img_url;

            document.querySelector('#carPillList').appendChild(node.content);
        })
        document.querySelectorAll('.pill').forEach(function (element) {
            element.addEventListener('click', function (event) {
                putInCompetition(event.currentTarget);
            })
        });
        document.addEventListener('winner', function (event) {
            console.log("El ganador es: " + event.detail.winner)
        });
    }, 1000)
});

function putInCompetition(element) {
    if (document.querySelector('#firstContendant').firstChild === null) {
        setInPosition(element, '#firstContendant');
    } else if (document.querySelector('#secondContendant').firstChild === null) {
        setInPosition(element, '#secondContendant');
        const contendants = document.querySelectorAll('.contendant');
        window.scroll(0, 1000)
        contendants.forEach(function (contendant) {
            move(contendant, "right", contendant.dataset.acceleration);
        })
    }
}

function setInPosition(element, positionId) {
    const imgElement = element.querySelector('.img');
    let position = document.querySelector(positionId);
    const imgNode = document.createElement('img');
    imgNode.setAttribute('src', imgElement.getAttribute('src'));
    imgNode.dataset.name = element.querySelector('.name').textContent;
    imgNode.dataset.acceleration = element.querySelector('.hp').textContent;
    position.appendChild(imgNode);
}