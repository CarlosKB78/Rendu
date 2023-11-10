window.onload = () => {
    const HelloDiv = document.getElementsByTagName('div')[2];

    HelloDiv.addEventListener('click', function() {
        let name;
        do {
            name = prompt("What is your name?");
        } while (!name);

        const isConfirmed = confirm(`Are you sure ${name} is your name?`);
        if (isConfirmed) {
            const greeting = `Hello ${name}!`;
            this.textContent = greeting;
            alert(greeting);
        }
    });
}