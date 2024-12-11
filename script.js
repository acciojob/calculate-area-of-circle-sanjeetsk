let para = document.getElementsByClassName('para');

function calculateArea() {
    // Get the radius from the user using the prompt() function
    let radius = prompt("Enter the radius of the circle:");

    // Calculate the area
    radius = Number(radius); // Convert radius to a number
    const area = 3.14 * radius * radius;

    // Display the result
    if (para.length > 0) {
        para[0].innerText = `The area of the circle with radius ${radius} is ${area}`;
    } else {
        console.error("No element with the class 'para' found.");
    }
}

calculateArea();
