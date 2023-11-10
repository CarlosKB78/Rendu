window.onload = () => {
    const plusButton = document.getElementsByTagName('button')[0];
    const minusButton = document.getElementsByTagName('button')[1];
    const selectElement = document.getElementsByTagName('select')[0];
    let fontSize = 16;

    plusButton.addEventListener('click', function() {
        fontSize++;
        document.body.style.fontSize = fontSize + 'px';
    });

    minusButton.addEventListener('click', function() {
        fontSize--;
        document.body.style.fontSize = fontSize + 'px';
    });

    selectElement.addEventListener('change', function() {
        document.body.style.backgroundColor = this.value;
    });
}