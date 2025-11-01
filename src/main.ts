// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let c = 0;

// These constants are for button IDs and heading text
const inc = "increment",
  decrement = "dec",
  count = "counter",
  reset = "reset",
  header = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${header}</h1>
    <p>Counter: <span id="${count}">0</span></p>
    <button id="increment">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;
  //gets increment, decrement, reset, counter elements from doc
  const buttonIncrement = document.getElementById(inc);
  const buttonDecrement = document.getElementById(decrement);
  const buttonReset = document.getElementById(reset);
  const ctr = document.getElementById(count);

  // updates counter total, title total, and changes background color
  function updateCounter(ctr: HTMLElement) {
    ctr.innerHTML = `${c}`;
    document.title = "Clicked " + c;
    document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
  }
  // Check if any element is missing, then exit the function
  if (!buttonIncrement || !buttonDecrement || !buttonReset || !ctr) return;

  // Add click event to the increment button, increment counter +1
  buttonIncrement.addEventListener("click", () => {
    c++;
    updateCounter(ctr);
  });

  // Add click event to the decrement button, decrement counter -1
  buttonDecrement.addEventListener("click", () => {
    c--;
    updateCounter(ctr);
  });

  // Add click event to the reset button, on click resets counter to 0
  buttonReset.addEventListener("click", () => {
    c = 0;
    updateCounter(ctr);
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
