JavaScript MCQs: DOM, Events, Math.random(), Variables, Functions

---

## DOM (Document Object Model)

1. What does DOM stand for?

    * a) Document Object Model
    * b) Data Object Model
    * c) Digital Object Mapper
    * d) Display Output Model
    
     Answer: 
     a) Document Object Model
     
     Reference: 
     [https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

2. Which method is used to select an element by its ID?

    * a) getElement()
    * b) getElementByClass()
    * c) getElementById()
    * d) selectById()
    
     Answer: 
     c) getElementById()
     
     Reference: 
     [https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

3. What does document.querySelector(".box") select?

    * a) All elements with class "box"
    * b) The first element with class "box"
    * c) An element with ID "box"
    * d) None of the above
    
     Answer: 
     b) The first element with class "box"
     
     Reference: 
     [https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

4. How do you change the text of an element with ID "message"?

    * a) document.getElementById("message").text = "Hello"
    * b) document.message.innerHTML = "Hello"
    * c) message.innerText = "Hello"
    * d) document.getElementById("message").innerText = "Hello"
    
     Answer: 
     d) document.getElementById("message").innerText = "Hello"
     
     Reference: 
     [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)

5. What is the purpose of innerHTML?

    * a) To store data in the browser
    * b) To add CSS to elements
    * c) To get or set the HTML content of an element
    * d) To delete an element
    
     Answer: 
     c) To get or set the HTML content of an element
     
     Reference: 
     [https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

---

## Events

1. What is an event in JavaScript?

    * a) A built-in method
    * b) A user or browser action
    * c) A CSS property
    * d) A JavaScript object
    
     Answer: 
     b) A user or browser action
     
     Reference: 
     [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

2. Which event occurs when a user clicks on an HTML element?

    * a) onmouseover
    * b) onload
    * c) onclick
    * d) onchange
    
     Answer: 
     c) onclick
     
     Reference: 
     [https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)

3. How can you add a click event to a button in JavaScript?

    * a) button.onClick = function()
    * b) addEventListener("click")
    * c) button.click = handleClick()
    * d) button.onclickEvent = clickHandler
    
     Answer: 
     b) addEventListener("click")
     
     Reference: 
     [https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

4. What does event.preventDefault() do?

    * a) Prevents default CSS
    * b) Stops default action like form submission
    * c) Prevents HTML rendering
    * d) Deletes the event
    
     Answer: 
     b) Stops default action like form submission
     
     Reference: 
     [https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

5. Which method is used to attach an event handler?

    * a) attachEvent()
    * b) setEvent()
    * c) addEventListener()
    * d) handleEvent()
    
     Answer: 
     c) addEventListener()
     
     Reference: 
     [https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

---

## Math.random()

1. What does Math.random() return?

    * a) A random integer
    * b) A number between 1 and 100
    * c) A number between 0 and 1
    * d) A boolean value
    
     Answer: 
     c) A number between 0 and 1
     
     Reference: 
     [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

2. How do you get a random integer from 1 to 10?

    * a) Math.random(1,10)
    * b) Math.floor(Math.random() * 10)
    * c) Math.floor(Math.random() * 10) + 1
    * d) Math.randomInt(1,4)

    Answer: d) All of the above

    Reference: 
    [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations)

2. Which variable type allows reassignment?

    * a) const
    * b) let
    * c) function
    * d) string

    Answer: b) let

    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

3. Which keyword declares a block-scoped variable?

    * a) var
    * b) global
    * c) let
    * d) static

    Answer: c) let
      
    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

4. What will happen if you use a variable without declaring it?

    * a) Error
    * b) It becomes a global variable
    * c) It becomes undefined
    * d) It is ignored
      
    Answer: b) It becomes a global variable
      
    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Undeclared_var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Undeclared_var)

5. Which keyword creates a constant in JavaScript?

    * a) let
    * b) var
    * c) const
    * d) define
      
    Answer: c) const
      
    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

---

## Functions

1. What is a function?

    * a) A loop
    * b) A reusable block of code
    * c) A data type
    * d) A condition
      
    Answer: b) A reusable block of code
      
    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

2. How do you define a function named sayHello?

    * a) function sayHello() {}
    * b) def sayHello() {}
    * c) let sayHello = {}
    * d) function: sayHello {}
    
    Answer: a) function sayHello() {}
      
    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

3. How do you call a function in JavaScript?

    * a) call sayHello
    * b) sayHello
    * c) sayHello()
    * d) call(sayHello)
      
    Answer: c) sayHello()
      
    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

4. What is the keyword to return a value from a function?

    * a) send
    * b) yield
    * c) return
    * d) output
      
    Answer: c) return
      
    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

5. What is a parameter in a function?

    * a) A return value
    * b) A variable passed into a function
    * c) A built-in variable
    * d) A type of function

    Answer: b) A variable passed into a function

    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

---

Mixed Concepts

1. What will `typeof "hello"` return?

    * a) string
    * b) text
    * c) object
    * d) char

    Answer: a) string

    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

2. What does `console.log()` do?

    * a) Displays content on the webpage
    * b) Logs errors only
    * c) Outputs messages to the browser console
    * d) Saves data

    Answer: c) Outputs messages to the browser console

    Reference: [https://www.w3schools.com/jsref/met_console_log.asp](https://www.w3schools.com/jsref/met_console_log.asp)

3. How do you write a comment in JavaScript?

    * a)
    * b) // comment
    * c) ## comment
    * d) ** comment **

    Answer: b) // comment

    Reference: [https://www.w3schools.com/js/js_comments.asp](https://www.w3schools.com/js/js_comments.asp)

4. Which of these is a valid function expression?

    * a) function = () {}
    * b) let add = function(x, y) { return x + y; }
    * c) add = (x, y) return x + y;
    * d) func(x, y) => x + y

    Answer: b) let add = function(x, y) { return x + y; }

    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)

5. What does NaN mean?

    * a) Not a Number
    * b) Null and None
    * c) New and Null
    * d) No active Node

    Answer: a) Not a Number

    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

6. Which method is used to convert a string to a number?

    * a) parseInt()
    * b) toNumber()
    * c) convertNumber()
    * d) parse()

    Answer: a) parseInt()

    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

---

Mixed Concepts (Continued)

6. Which method is used to convert a string to a number?

    * a) parseInt()
    * b) toNumber()
    * c) convertNumber()
    * d) parse()

    Answer: a) parseInt()

    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

---

Bonus Conceptual Questions: Mandatory

1. Why is using let safer than var?

    Answer: let is block-scoped, meaning it is only accessible within the block it is defined. This reduces the risk of variable collisions and unintended behavior compared to var, which is function-scoped and can lead to issues like variable hoisting.

    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

2. What is the main benefit of separating JavaScript from HTML?

    Answer: Separating JavaScript from HTML enhances code maintainability, readability, and reusability. It allows for a clear separation of concerns, making it easier to manage and debug code.

    Reference: [https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_JavaScript_within_a_webpage](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_JavaScript_within_a_webpage)

3. Why is Math.random() useful in games or UI effects?

    Answer: Math.random() generates pseudo-random numbers, which are essential for creating unpredictable behaviors in games (like random enemy movements) or dynamic UI effects (like random animations), enhancing user experience.

    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

4. What happens if two event listeners are attached to the same element?

    Answer: Both event listeners will be triggered in the order they were added when the event occurs, unless one of them calls event.stopPropagation() or event.preventDefault() to alter the default behavior.

    Reference: [https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

5. Why should we use functions to organize code?

    Answer: Functions allow for code modularity, reusability, and better organization. They enable developers to encapsulate logic, making code easier to read, test, and maintain.

    Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

---
