// Command processing and help functions
function processCommand(command, output) {
  const args = command.split(" ");
  const cmd = args[0].toLowerCase();
  
  switch (cmd) {
    case "help":
      displayHelp(output, args[1]);
      break;
    case "clear":
      output.innerHTML = "";
      break;
    case "theme":
      changeTheme(args[1], output);
      break;
    case "matrix":
      toggleMatrix(output);
      break;
    case "shake":
      applyEffect("shake", output);
      break;
    case "spin":
      applyEffect("spin", output);
      break;
    case "glitch":
      applyEffect("glitch", output);
      break;
    case "hacker":
      applyEffect("hacker", output);
      break;
    case "random":
      handleMathCommand("random", args, output);
      break;
    case "add":
      handleMathCommand("add", args, output);
      break;
    case "subtract":
      handleMathCommand("subtract", args, output);
      break;
    case "multiply":
      handleMathCommand("multiply", args, output);
      break;
    case "divide":
      handleMathCommand("divide", args, output);
      break;
    case "sqrt":
      handleMathCommand("sqrt", args, output);
      break;
    case "power":
      handleMathCommand("power", args, output);
      break;
    case "fact":
      showRandomFact(output);
      break;
    case "joke":
      showRandomJoke(output);
      break;
    case "projects":
      showProjects(output);
      break;
    case "run":
      runProject(args[1], output);
      break;
    case "ls":
      listDirectory(args[1], output);
      break;
    case "cd":
      changeDirectory(args[1], output);
      break;
    case "cat":
      viewFile(args[1], output);
      break;
    case "echo":
      echo(args.slice(1).join(" "), output);
      break;
    case "neofetch":
      showSystemInfo(output);
      break;
    case "date":
      showDate(output);
      break;
    case "whoami":
      output.innerHTML += `\n${username}`;
      break;
    case "weather":
      showWeather(args[1], output);
      break;
    case "ascii":
      showAsciiArt(args[1], output);
      break;
    case "banner":
      createBanner(args.slice(1).join(" "), output);
      break;
    case "history":
      showCommandHistory(output);
      break;
    case "about":
      showAbout(output);
      break;
    default:
      output.innerHTML += `\nCommand not found: ${cmd}. Type 'help' for a list of commands.`;
  }
}

function displayHelp(output, topic) {
  if (!topic) {
    output.innerHTML += `
\nAvailable commands:

SYSTEM:
  help [command]  - Show help for all commands or specific command
  clear           - Clear terminal output
  theme [name]    - Change terminal theme (default, matrix, dracula, nord, monokai, cyberpunk)
  neofetch        - Display system information
  about           - About this terminal
  history         - Show command history

NAVIGATION:
  ls [dir]        - List directory contents
  cd [dir]        - Change directory
  cat [file]      - View file contents
  echo [text]     - Print text to terminal

VISUAL EFFECTS:
  matrix          - Toggle Matrix effect
  shake           - Shake the screen
  spin            - Spin the screen
  glitch          - Trigger a glitch effect
  hacker          - Trigger hacker effect
  ascii [art]     - Display ASCII art (logo, computer, ghost, heart)
  banner [text]   - Create ASCII text banner

MATH & UTILITIES:
  random [min] [max]    - Generate a random number
  add [x] [y]           - Add two numbers
  subtract [x] [y]      - Subtract second number from first
  multiply [x] [y]      - Multiply two numbers
  divide [x] [y]        - Divide first number by second
  sqrt [x]              - Square root of a number
  power [x] [y]         - x raised to the power of y

FUN & INFO:
  fact            - Show a random programming fact
  joke            - Tell a programming joke
  date            - Show current date and time
  whoami          - Show current user
  weather [city]  - Show weather for a city

PROJECTS:
  projects        - Show my projects & links
  run [project]   - Run a project (calculator, tictactoe, etc.)

Type 'help [command]' for more information on a specific command.`;
  } else {
    const helpText = {
      help: "help [command] - Show help for all commands or specific command.",
      clear: "clear - Clear the terminal output.",
      theme: "theme [name] - Change terminal theme. Available themes: default, matrix, dracula, nord, monokai, cyberpunk.",
      matrix: "matrix - Toggle Matrix rain effect in the background.",
      shake: "shake - Apply a shake effect to the screen.",
      spin: "spin - Apply a spin effect to the screen.",
      glitch: "glitch - Apply a glitch effect to the screen.",
      hacker: "hacker - Apply a hacker effect to the screen (flashing green).",
      random: "random [min] [max] - Generate a random integer between min and max inclusive.",
      add: "add [x] [y] - Add two numbers together.",
      subtract: "subtract [x] [y] - Subtract the second number from the first.",
      multiply: "multiply [x] [y] - Multiply two numbers together.",
      divide: "divide [x] [y] - Divide the first number by the second.",
      sqrt: "sqrt [x] - Calculate the square root of a number.",
      power: "power [x] [y] - Calculate x raised to the power of y.",
      fact: "fact - Show a random programming or computer science fact.",
      joke: "joke - Tell a random programming joke.",
      projects: "projects - Show a list of my projects and links.",
      run: "run [project] - Open a project in a new tab. Available projects: calculator, tictactoe, conversion, finance, resume, flappy.",
      ls: "ls [dir] - List contents of the current directory or specified directory.",
      cd: "cd [dir] - Change to the specified directory. Use 'cd ..' to go up one level.",
      cat: "cat [file] - View the contents of a file.",
      echo: "echo [text] - Display text on the terminal.",
      neofetch: "neofetch - Display system information in a fancy format.",
      date: "date - Show the current date and time.",
      whoami: "whoami - Show the current username.",
      weather: "weather [city] - Show current weather for the specified city.",
      ascii: "ascii [art] - Display ASCII art. Available options: logo, computer, ghost, heart.",
      banner: "banner [text] - Create an ASCII art banner from text.",
      history: "history - Show command history.",
      about: "about - Display information about this terminal."
    };
    
    if (helpText[topic]) {
      output.innerHTML += `\n${helpText[topic]}`;
    } else {
      output.innerHTML += `\nNo help available for '${topic}'.`;
    }
  }
}

function changeTheme(themeName, output) {
  if (!themeName) {
    output.innerHTML += `\nAvailable themes: ${themes.join(", ")}`;
    output.innerHTML += `\nCurrent theme: ${currentTheme}`;
    return;
  }
  
  themeName = themeName.toLowerCase();
  if (!themes.includes(themeName)) {
    output.innerHTML += `\nTheme '${themeName}' not found. Available themes: ${themes.join(", ")}`;
    return;
  }
  
  document.body.classList.remove(`theme-${currentTheme}`);
  
  currentTheme = themeName;
  if (themeName !== "default") {
    document.body.classList.add(`theme-${themeName}`);
  }
  
  output.innerHTML += `\nTheme changed to '${themeName}'.`;
}

function handleMathCommand(cmd, args, output) {
  switch (cmd) {
    case "random":
      if (args.length === 3) {
        const min = parseInt(args[1]);
        const max = parseInt(args[2]);
        if (!isNaN(min) && !isNaN(max) && min <= max) {
          const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
          output.innerHTML += `\nRandom Number: ${randNum}`;
        } else {
          output.innerHTML += "\nUsage: random [min] [max] (min <= max)";
        }
      } else {
        output.innerHTML += "\nUsage: random [min] [max]";
      }
      break;
    case "add":
    case "subtract":
    case "multiply":
    case "divide":
    case "power":
      if (args.length === 3) {
        const num1 = parseFloat(args[1]);
        const num2 = parseFloat(args[2]);
        if (!isNaN(num1) && !isNaN(num2)) {
          let result;
          switch (cmd) {
            case "add":
              result = num1 + num2;
              break;
            case "subtract":
              result = num1 - num2;
              break;
            case "multiply":
              result = num1 * num2;
              break;
            case "divide":
              result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
              break;
            case "power":
              result = Math.pow(num1, num2);
              break;
          }
          output.innerHTML += `\nResult: ${result}`;
        } else {
          output.innerHTML += "\nInvalid numbers.";
        }
      } else {
        output.innerHTML += `\nUsage: ${cmd} [x] [y]`;
      }
      break;
    case "sqrt":
      if (args.length === 2) {
        const num = parseFloat(args[1]);
        if (!isNaN(num)) {
          if (num >= 0) {
            output.innerHTML += `\nResult: ${Math.sqrt(num)}`;
          } else {
            output.innerHTML += "\nError: Cannot calculate square root of a negative number.";
          }
        } else {
          output.innerHTML += "\nInvalid number.";
        }
      } else {
        output.innerHTML += "\nUsage: sqrt [x]";
      }
      break;
  }
}

function showRandomFact(output) {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  output.innerHTML += `\n${randomFact}`;
}

function showRandomJoke(output) {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  output.innerHTML += `\n${randomJoke}`;
}

function showProjects(output) {
  output.innerHTML += `
\nMy Projects:

WEB APPS:
  - Calculator       - A fully functional calculator with history (run calculator)
  - Tic-Tac-Toe      - Classic game of Tic-Tac-Toe (run tictactoe)
  - Unit Conversion  - Convert between various units (run conversion)
  - Finance Checker  - Check financial metrics (run finance)
  - Resume Builder   - Create professional resumes (run resume)
  - Flappy Bird      - Classic Flappy Bird game (run flappy)

OTHER PROJECTS:
  - NATracker        - Journal & Habit Tracker (GitHub)
  - Zillow Database  - Real Estate Database Project (Google Drive)

Use 'run [project]' to open any web app project in a new tab.`;
}

function runProject(project, output) {
  if (!project) {
    output.innerHTML += "\nUsage: run [project]";
    output.innerHTML += "\nAvailable projects: calculator, tictactoe, conversion, finance, resume, flappy";
    return;
  }
  
  const projectLinks = {
    "calculator": "https://finn1817.github.io/My-Calculator/",
    "tictactoe": "https://finn1817.github.io/TikTakToeGame/",
    "conversion": "https://finn1817.github.io/Unit-Conversion/",
    "finance": "https://finn1817.github.io/Future-Finance/",
    "resume": "https://finn1817.github.io/Resume-Builder/",
    "flappy": "https://finn1817.github.io/my-flappy-bird/",
    "github": "https://github.com/finn1817/NATracker",
    "drive": "https://drive.google.com/drive/folders/1Sq4B32br7vLmy4TPaHv9eJboiZ0ie2Eo?usp=sharing"
  };
  
  project = project.toLowerCase();
  if (projectLinks[project]) {
    window.open(projectLinks[project], "_blank");
    output.innerHTML += `\nLaunching ${project}...`;
  } else {
    output.innerHTML += `\nProject '${project}' not found.`;
    output.innerHTML += "\nAvailable projects: calculator, tictactoe, conversion, finance, resume, flappy";
  }
}

function echo(text, output) {
  output.innerHTML += `\n${text}`;
}

function showSystemInfo(output) {
  const userAgent = navigator.userAgent;
  let os = "Unknown OS";
  let browser = "Unknown Browser";
  
  if (userAgent.indexOf("Win") !== -1) os = "Windows";
  else if (userAgent.indexOf("Mac") !== -1) os = "MacOS";
  else if (userAgent.indexOf("Linux") !== -1) os = "Linux";
  else if (userAgent.indexOf("Android") !== -1) os = "Android";
  else if (userAgent.indexOf("iOS") !== -1) os = "iOS";
  
  if (userAgent.indexOf("Chrome") !== -1) browser = "Chrome";
  else if (userAgent.indexOf("Safari") !== -1) browser = "Safari";
  else if (userAgent.indexOf("Firefox") !== -1) browser = "Firefox";
  else if (userAgent.indexOf("Edge") !== -1) browser = "Edge";
  else if (userAgent.indexOf("Opera") !== -1) browser = "Opera";
  
  const screenRes = `${window.screen.width}x${window.screen.height}`;
  const date = new Date().toLocaleString();
  
  output.innerHTML += `
\n<span class="ascii-art">${asciiArt.logo}</span>
\n<span style="color: var(--terminal-header);">System Information</span>
\n-------------------------
\n<span style="color: var(--terminal-prompt);">User:</span> ${username}@dfinn.me
\n<span style="color: var(--terminal-prompt);">OS:</span> ${os}
\n<span style="color: var(--terminal-prompt);">Browser:</span> ${browser}
\n<span style="color: var(--terminal-prompt);">Resolution:</span> ${screenRes}
\n<span style="color: var(--terminal-prompt);">Terminal:</span> dfinn.me v2.0
\n<span style="color: var(--terminal-prompt);">Theme:</span> ${currentTheme}
\n<span style="color: var(--terminal-prompt);">Date:</span> ${date}
\n-------------------------
\n<span style="color: var(--terminal-prompt);">Projects:</span> Calculator, TicTacToe, Unit Conversion, Finance, Resume Builder
\n<span style="color: var(--terminal-prompt);">Effects:</span> Matrix, Shake, Spin, Glitch, Hacker
\n<span style="color: var(--terminal-prompt);">Commands:</span> ${getCommandCount()} available commands
`;
}

function showDate(output) {
  const now = new Date();
  output.innerHTML += `\n${now.toLocaleString()}`;
}

function showWeather(city, output) {
  if (!city) {
    output.innerHTML += "\nUsage: weather [city]";
    return;
  }
  
  output.innerHTML += `\nFetching weather for ${city}...`;
  
  setTimeout(() => {
    const weatherWidget = document.getElementById("weather-widget");
    const weatherContent = document.getElementById("weather-content");
    
    const temp = Math.floor(Math.random() * 35) + 5;
    const conditions = ["Sunny", "Partly Cloudy", "Cloudy", "Rainy", "Thunderstorms", "Snowy"][Math.floor(Math.random() * 6)];
    const humidity = Math.floor(Math.random() * 50) + 30;
    const wind = Math.floor(Math.random() * 20) + 1;
    
    weatherContent.innerHTML = `
      <p><strong>${city}</strong></p>
      <p>Temperature: ${temp}°C</p>
      <p>Conditions: ${conditions}</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind: ${wind} mph</p>
    `;
    
    weatherWidget.style.display = "block";
    
    output.innerHTML += `\n
Current Weather for ${city}:
Temperature: ${temp}°C
Conditions: ${conditions}
Humidity: ${humidity}%
Wind: ${wind} mph
    `;
    
    setTimeout(() => {
      weatherWidget.style.display = "none";
    }, 10000);
  }, 1000);
}

function showAsciiArt(artName, output) {
  if (!artName || !asciiArt[artName]) {
    output.innerHTML += "\nAvailable ASCII art: " + Object.keys(asciiArt).join(", ");
    return;
  }
  
  output.innerHTML += `\n<span class="ascii-art">${asciiArt[artName]}</span>`;
}

function createBanner(text, output) {
  if (!text) {
    output.innerHTML += "\nUsage: banner [text]";
    return;
  }
  
  output.innerHTML += "\n";
  output.innerHTML += "\n+" + "-".repeat(text.length + 6) + "+";
  output.innerHTML += "\n|   " + text + "   |";
  output.innerHTML += "\n+" + "-".repeat(text.length + 6) + "+";
}

function showCommandHistory(output) {
  if (commandHistory.length === 0) {
    output.innerHTML += "\nNo command history.";
    return;
  }
  
  output.innerHTML += "\nCommand History:";
  
  const startIndex = Math.max(0, commandHistory.length - 20);
  for (let i = startIndex; i < commandHistory.length; i++) {
    output.innerHTML += `\n${i - startIndex + 1}: ${commandHistory[i]}`;
  }
}

function showAbout(output) {
  output.innerHTML += `
\n<span class="ascii-art">${asciiArt.logo}</span>
\n<span style="color: var(--terminal-header);">dfinn.me Terminal v2.0</span>
\n
\nA terminal-style portfolio interface designed to showcase projects and programming skills.
\n
\nFeatures:
\n- File system navigation
\n- Visual effects and themes
\n- Project showcase and quick access
\n- Math utilities and fun commands
\n- Weather display and system information
\n
\nType 'help' to see available commands.
\n
\nCreated by D. Finn
\nLast updated: October 2025
`;
}