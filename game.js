const secretNumber = 7;

let buttons = document.querySelectorAll('button');
let message = document.querySelector('.message');
let header = document.querySelector('header');
let numberOfTries = 0;


function handleClick(event) {
  numberOfTries++;
  header.textContent = `tries ${numberOfTries}`;

  let guess = Number(event.target.textContent);
  event.target.disabled = true;

  if (guess === secretNumber) {
    message.textContent = 'correct';
    const buttons = document.querySelectorAll('.options button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
} else {
    message.textContent = 'wrong. keep trying';
}
}

buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
  buttons.forEach(button => {
    button.disabled = false;
  });
  numberOfTries = 0;
  header.textContent = `tries ${numberOfTries}`;
  message.textContent = "info message";
});

