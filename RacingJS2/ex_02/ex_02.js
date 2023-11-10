window.onload = () => {
    let count = 0;
    const DivCount = document.getElementsByTagName('div')[2];

    DivCount.addEventListener('click', function() {
        count++;
        this.textContent = `Total clicks: ${count}`;
    });
}