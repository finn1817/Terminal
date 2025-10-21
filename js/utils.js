// Utility functions and constants
const asciiArt = {
  logo: `
 _____  ______ _____ _   _ _   _ 
|  __ \\|  ____|_   _| \\ | | \\ | |
| |  | | |__    | | |  \\| |  \\| |
| |  | |  __|   | | | . \` | . \` |
| |__| | |     _| |_| |\\  | |\\  |
|_____/|_|    |_____|_| \\_|_| \\_|
`,
  computer: `
   .-----------------.
  |   ___________    |
  |  |           |   |
  |  |  SCREEN   |   |
  |  |___________|   |
  |  ___     ___     |
  | |   |   |   |    |
  | |___|   |___|    |
  '-----------------'
`,
  ghost: `
    .-.
   (o o)
    |=|
   __|__
  /_____\\
`,
  heart: `
   .:::.   .:::.
  :::::::.:::::::
  :::::::::::::::
   ':::::::::::'
     ':::::::'
       ':::'
         '
`
};

const facts = [
  "C++ was created by Bjarne Stroustrup in 1983.",
  "Python is named after Monty Python, not the snake.",
  "The first computer bug was an actual moth found in a Harvard Mark II computer in 1947.",
  "JavaScript was created in just 10 days by Brendan Eich in 1995.",
  "The world's first website is still online: http://info.cern.ch/",
  "The original name for Java was 'Oak'.",
  "The term 'debugging' existed before computer programming.",
  "Linux was created by Linus Torvalds in 1991 while he was a student.",
  "The QWERTY keyboard layout was designed to slow down typing to prevent jamming on mechanical typewriters.",
  "The first programming language was called Fortran (Formula Translation).",
  "Ada Lovelace is considered the first computer programmer, writing an algorithm for the Analytical Engine in the 1840s.",
  "Alan Turing cracked the Nazi Enigma code during WWII, shortening the war by an estimated 2-4 years.",
  "Grace Hopper discovered the first computer 'bug' and coined the term 'debugging'."
];

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "A programmer's wife tells him: 'Go to the store and get a loaf of bread. If they have eggs, get a dozen.' He comes home with 12 loaves.",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
  "Why do Java developers wear glasses? Because they can't C#!",
  "There are 10 types of people in this world: those who understand binary and those who don't.",
  "A programmer had a problem and decided to use regex to solve it. Now they have two problems.",
  "Why was the JavaScript developer sad? Because they didn't Node how to Express themselves.",
  "What's a computer's favorite snack? Microchips!",
  "Why did the developer go broke? Because they lost their domain in the cloud.",
  "Why don't programmers like nature? It has too many bugs and no debugging tool."
];

function scrollToBottom() {
  const output = document.getElementById("output");
  output.scrollTop = output.scrollHeight;
}

function updateDateTime() {
  const datetimeDisplay = document.getElementById("datetime");
  const now = new Date();
  datetimeDisplay.textContent = now.toLocaleTimeString();
}

function updatePrompt() {
  const prompt = document.getElementById("prompt");
  prompt.textContent = `${username}@dfinn.me:${currentDir}$ `;
  
  const currentDirDisplay = document.getElementById("current-dir");
  currentDirDisplay.textContent = currentDir;
}

function typeMessage(message, element, speed, callback) {
  let i = 0;
  function typeChar() {
    if (i < message.length) {
      element.innerHTML += message.charAt(i);
      i++;
      scrollToBottom();
      setTimeout(typeChar, speed);
    } else if (callback) {
      callback();
    }
  }
  typeChar();
}

function getCommandCount() {
  return 30; // Approximate count of all commands
}