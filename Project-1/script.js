

const btn = document.getElementById('toggle');
const colorCode = document.getElementById('color-code');

function changeColor() {
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color; //changes the bg color
    colorCode.textContent = `Current Color: ${color}`;
    colorCode.innerHTML = `Current Color: <span style="color:${color}">${color}</span>`;
    colorCode.innerText = `Current Color: ${color}`; // Sets the text content of the color code element
}

btn.addEventListener('click', changeColor);

console.log(Math.random()); // Generates a random number between 0 and 1
console.log(Math.floor(Math.random())) // rounds down to the nearest integer (0 or 1)
console.log(Math.floor(Math.random() * 16777215)); // Generates a random integer between 0 and 16777215
console.log(Math.floor(Math.random() * 16777215).toString(16)); // Converts the random integer to a hexadecimal string


padStart(6,'0'); // Ensures the hex color code is always 6 characters long


// Answers to the questions:

// 1. Why do we need a function instead of writing code directly inside HTML?
// Using JavaScript event listeners separates behavior from structure (HTML), 
// following best practices for code organization and maintainability.

// 2. What does Math.random() do?
// It generates a random floating-point number between 0 (inclusive) and 1 (exclusive),
// which we use as the basis for creating random colors.

// 3. Why is 16777215 used for random color generation?
// 16777215 equals FFFFFF in hexadecimal, representing the maximum value for a hex color.
// This gives us the full range of colors from #000000 to #FFFFFF.

// 4. Purpose of toString(16)?
// It converts a decimal number to hexadecimal (base-16) string format,
// which is required for CSS hex color codes.

// 5. Why use document.body.style.backgroundColor?
// We need to access the DOM and specifically modify the style property
// of the body element to change the page background.

// 6. What does document.getElementById() do?
// It retrieves a reference to an HTML element using its unique ID,
// allowing us to manipulate that specific element.

// 7. About padding hex colors:
// While not used in this code, padding with padStart(6, '0') would ensure
// all color codes have 6 digits, preventing invalid shorter codes.

// 8. Difference between textContent, innerHTML, innerText:
// textContent (used here) sets plain text safely
// innerHTML would parse HTML tags (potential security risk)
// innerText respects CSS styling/visibility

// 9. RGB implementation:
// Instead of one hex code, generate three 0-255 numbers:
// const r = Math.floor(Math.random() * 256);
// const g = Math.floor(Math.random() * 256);
// const b = Math.floor(Math.random() * 256);
// document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

// 10. Value of small scripts:
// They teach fundamental concepts (DOM manipulation, events) that
// scale to larger applications and build problem-solving skills.
