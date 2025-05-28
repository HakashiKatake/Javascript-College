const number = document.getElementById('number');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

function updateDisplay() {
    number.textContent = count;
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});




// 1. Why store the counter value in a variable?
// Storing the counter in a variable (count) separates the data (state) from its presentation (DOM). This separation provides a single source of truth, making it easier to manipulate the value before displaying it, add validation logic, and maintain the code.

// 2. How does addEventListener() work for button clicks?
// addEventListener() registers a function to be executed when a specific event occurs. It takes the event type ('click') and a callback function. When a user clicks the button, the browser triggers the event and executes the registered function. Unlike inline onclick attributes, addEventListener allows attaching multiple handlers to the same element.

// 3. What if we didn't update the display?
// If we didn't call updateDisplay() after changing count, the internal state would change but the user would see nothing on screen. DOM manipulation creates the connection between our JavaScript data model and what users actually see, keeping the UI in sync with the application state.

// 4. Why prevent negative values?
// Preventing negative values makes sense for quantities that can't be negative in real life. Examples include:

// Shopping cart item quantities
// Event attendance counters
// Inventory tracking systems
// Time tracking applications
// Rating systems (0-5 stars)
// 5. How do we reset the counter?
// We reset by setting count = 0 and then calling updateDisplay(). This is essentially the same code as initializing it - we're setting the value and updating the display. The same operation works for both initialization and reset.

// 6. Difference between innerText, textContent, and innerHTML
// textContent gets/sets the text content, ignoring HTML markup
// innerText is similar but respects CSS styling and won't return text from hidden elements
// innerHTML parses and renders HTML tags (potential security risk with user input)
// For a simple counter, textContent is appropriate and safe.

// 7. Benefits of separating logic into functions
// Separating logic into functions improves:

// Code organization and readability
// Reusability (call the same function from different places)
// Testability and debugging
// Maintenance (changing logic in one place affects all calls)
// Following the Single Responsibility Principle
// 8. Visual feedback when values change
// Best practices:

// Use JavaScript to add/remove CSS classes based on state changes
// Define visual styles in CSS
// Use CSS transitions for smooth effects
// For example, add a "highlight" class when the value changes, then remove it after a brief timeout.

// 9. Multiple users clicking simultaneously
// 

// Frontend: local state in each user's browser
// Backend: shared state that requires server communication, synchronization, and handling of race conditions
// 10. Storing the count permanently
// Options include:

// localStorage: Simple client-side persistence (same device only)
// Backend database: True persistence across users and devices
// sessionStorage: Temporary storage for a single session
// Cookies: Small data storage that's sent with requests
// The choice depends on whether the counter is personal or shared, and across which contexts.