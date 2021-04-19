let winner = null;
function move(element, direction, distance = 1500, duration = 1000) {

    var topOrLeft = (direction === "left" || direction === "right") ? "left" : "top";
    var isNegated = (direction === "up" || direction === "left");
    if (isNegated) {
        distance *= -1;
    }
    var elStyle = window.getComputedStyle(element);
    var value = elStyle.getPropertyValue(topOrLeft).replace("px", "");
    var destination = Number(value) + distance;
    var frameDistance = distance / (duration / 10);

    function moveAFrame() {
        elStyle = window.getComputedStyle(element);
        value = elStyle.getPropertyValue(topOrLeft).replace("px", "");
        var newLocation = Number(value) + frameDistance;
        var beyondDestination = ((!isNegated && newLocation >= destination) || (isNegated && newLocation <= destination));
        if (beyondDestination) {
            let runner = element.querySelector('img');
            if (winner === null) {
                winner = runner.dataset.name;
                document.dispatchEvent(new CustomEvent('winner', {
                    detail:{
                        winner: winner
                    }
                }))
            }
            element.style[topOrLeft] = destination + "px";
            clearInterval(movingFrames);
        } else {
            element.style[topOrLeft] = newLocation + "px";
        }
    }

    var movingFrames = setInterval(moveAFrame, 10);
}

function buildPillCar(id, model, price, horsePower, imgUrl) {
    const carTemplate = document.querySelector('#carPill');

    let node = carTemplate.cloneNode(true)
    let idNode = node.content.querySelector('.id');
    idNode.innerHTML = id;
    let nameNode = node.content.querySelector('.name');
    nameNode.innerHTML = model;
    let priceNode = node.content.querySelector('.price');
    priceNode.innerHTML = price;
    let hpNode = node.content.querySelector('.hp');
    hpNode.innerHTML = horsePower;
    let imgNode = node.content.querySelector('.img');
    imgNode.src = imgUrl;

    document.querySelector('#carPillList').appendChild(node.content);
}