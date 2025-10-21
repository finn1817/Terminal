// Main application state and initialization
let commandHistory = [];
let historyIndex = -1;
let themes = ["default", "matrix", "dracula", "nord", "monokai", "cyberpunk"];
let currentTheme = "default";
let username = "visitor";
let currentDir = "~";

// Initialize terminal
document.addEventListener("DOMContentLoaded", () => {
  updateDateTime();
  setInterval(updateDateTime, 1000);
  
  const outputDiv = document.getElementById("output");
  typeMessage(asciiArt.logo, outputDiv, 5, () => {
    typeMessage("\nWelcome to dfinn.me - Terminal v2.0", outputDiv, 30, () => {
      typeMessage("\nType 'help' to see available commands.\n", outputDiv, 30, () => {
        document.getElementById("commandInput").focus();
      });
    });
  });
  
  // Set up event listeners
  setupEventListeners();
});

function setupEventListeners() {
  // Command input handling
  document.getElementById("commandInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      handleCommand();
    } else if (event.key === "ArrowUp") {
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        historyIndex++;
        this.value = commandHistory[commandHistory.length - 1 - historyIndex];
      }
    } else if (event.key === "ArrowDown") {
      if (historyIndex > 0) {
        historyIndex--;
        this.value = commandHistory[commandHistory.length - 1 - historyIndex];
      } else if (historyIndex === 0) {
        historyIndex = -1;
        this.value = "";
      }
    } else if (event.key === "Tab") {
      event.preventDefault();
      autoCompleteCommand(this.value);
    }
  });
  
  // Terminal control buttons
  document.querySelector(".button-minimize").addEventListener("click", function() {
    const terminal = document.getElementById("terminal-window");
    if (terminal.style.display === "none") {
      terminal.style.display = "flex";
    } else {
      terminal.style.display = "none";
    }
  });

  document.querySelector(".button-expand").addEventListener("click", function() {
    document.documentElement.requestFullscreen().catch(err => {
      console.log("Fullscreen request failed: ", err);
    });
  });

  document.querySelector(".button-close").addEventListener("click", function() {
    document.getElementById("output").innerHTML += "\nUse 'clear' to reset the terminal.";
    scrollToBottom();
  });
}

function handleCommand() {
  const inputField = document.getElementById("commandInput");
  const output = document.getElementById("output");
  const command = inputField.value.trim();
  
  if (!command) return;
  
  commandHistory.push(command);
  if (commandHistory.length > 50) commandHistory.shift();
  historyIndex = -1;
  
  output.innerHTML += `\n${document.getElementById("prompt").textContent} ${command}`;
  
  processCommand(command, output);
  
  inputField.value = "";
  scrollToBottom();
}

function autoCompleteCommand(partial) {
  const commands = [
    "help", "clear", "theme", "matrix", "shake", "spin", "glitch", "hacker",
    "random", "add", "subtract", "multiply", "divide", "sqrt", "power",
    "fact", "joke", "projects", "run", "ls", "cd", "cat", "echo", "neofetch",
    "date", "whoami", "weather", "ascii", "banner", "history", "about"
  ];
  
  const matchingCommands = commands.filter(cmd => cmd.startsWith(partial.split(" ")[0]));
  
  if (matchingCommands.length === 1) {
    document.getElementById("commandInput").value = matchingCommands[0];
  } else if (matchingCommands.length > 1) {
    const output = document.getElementById("output");
    output.innerHTML += `\n\nPossible commands:`;
    output.innerHTML += `\n${matchingCommands.join(', ')}`;
    output.innerHTML += `\n\n${document.getElementById("prompt").textContent} `;
    document.getElementById("commandInput").value = partial;
    scrollToBottom();
  }
}