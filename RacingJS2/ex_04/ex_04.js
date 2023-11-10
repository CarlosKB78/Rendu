window.onload = () => {
    let last42Chars = '';
    const CaractDiv = document.getElementsByTagName('div')[2];

    document.addEventListener('keydown', function(event) {
        last42Chars += event.key;
        if (last42Chars.length > 42) {
            last42Chars = last42Chars.slice(-42);
        }
        CaractDiv.textContent = last42Chars;
    });
}