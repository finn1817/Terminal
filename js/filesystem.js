// File system and directory structure
let directoryStructure = {
  "~": {
    type: "directory",
    content: {
      "documents": {
        type: "directory",
        content: {
          "resume.txt": {
            type: "file",
            content: "# Daniel Finn - Resume\n\nSOFTWARE DEVELOPER\n\nEXPERIENCE:\n- Web Development (HTML, CSS, JavaScript)\n- Python Programming\n- Database Design & Management\n- Git Version Control\n\nPROJECTS:\n- Terminal Portfolio (dfinn.me)\n- Calculator Application\n- Tic-Tac-Toe Game\n- Unit Conversion Tool\n- Finance Checker\n- Resume Builder\n- Flappy Bird Clone\n- NATracker Journal App\n- Zillow Database Project\n\nSKILLS:\n- Frontend: HTML, CSS, JavaScript\n- Backend: Python, SQL\n- Tools: Git, VS Code, Chrome DevTools\n- Algorithms & Data Structures\n\nCONTACT:\nWebsite: dfinn.me\nGitHub: github.com/finn1817"
          },
          "notes.txt": {
            type: "file",
            content: "# Personal Notes\n\n- Remember to update the portfolio with the latest projects\n- Add more features to the terminal (autocomplete is working!)\n- Consider adding a dark/light mode toggle\n- Test all commands thoroughly\n- Add more ASCII art options\n- Create better file system navigation"
          },
          "todo.txt": {
            type: "file",
            content: "# TODO List\n\n[ ] Fix file path navigation bug\n[ ] Add more virtual files to filesystem\n[ ] Implement better autocomplete\n[ ] Add syntax highlighting for code files\n[ ] Create a 'vim' or 'nano' text editor command\n[ ] Add networking simulation (ping, ssh, etc)\n[ ] Create more mini-games\n[x] Add Matrix effect\n[x] Add multiple themes\n[x] Create project showcase"
          }
        }
      },
      "projects": {
        type: "directory",
        content: {
          "README.md": {
            type: "file",
            content: "# Projects Directory\n\nThis directory contains information about all my projects.\n\nWEB APPLICATIONS:\n- Calculator (finn1817.github.io/My-Calculator)\n- Tic-Tac-Toe (finn1817.github.io/TikTakToeGame)\n- Unit Conversion (finn1817.github.io/Unit-Conversion)\n- Finance Checker (finn1817.github.io/Future-Finance)\n- Resume Builder (finn1817.github.io/Resume-Builder)\n- Flappy Bird (finn1817.github.io/my-flappy-bird)\n\nOTHER PROJECTS:\n- NATracker: Journal & Habit Tracking Application\n- Zillow Database: Real Estate Data Management System\n\nUse 'run [project-name]' to launch any web application."
          },
          "web-apps.txt": {
            type: "file",
            content: "# Web Applications\n\nCalculator\n- A fully functional calculator with history\n- Features: Basic operations, square root, power, clear\n- URL: https://finn1817.github.io/My-Calculator/\n\nTic-Tac-Toe\n- Classic game with AI opponent\n- Two-player mode available\n- URL: https://finn1817.github.io/TikTakToeGame/\n\nUnit Conversion\n- Convert between various units\n- Categories: Length, Weight, Temperature, Volume\n- URL: https://finn1817.github.io/Unit-Conversion/\n\nFinance Checker\n- Track and analyze financial metrics\n- Budget planning and expense tracking\n- URL: https://finn1817.github.io/Future-Finance/\n\nResume Builder\n- Create professional resumes\n- Multiple templates and export options\n- URL: https://finn1817.github.io/Resume-Builder/\n\nFlappy Bird\n- Classic Flappy Bird game recreation\n- High score tracking\n- URL: https://finn1817.github.io/my-flappy-bird/"
          },
          "links.txt": {
            type: "file",
            content: "# Project Links\n\nGitHub Repositories:\n- NATracker: https://github.com/finn1817/NATracker\n- Terminal Portfolio: https://github.com/finn1817/Terminal\n\nGoogle Drive:\n- Zillow Database Project: https://drive.google.com/drive/folders/1Sq4B32br7vLmy4TPaHv9eJboiZ0ie2Eo?usp=sharing\n\nLive Web Apps:\n- Calculator: https://finn1817.github.io/My-Calculator/\n- Tic-Tac-Toe: https://finn1817.github.io/TikTakToeGame/\n- Unit Conversion: https://finn1817.github.io/Unit-Conversion/\n- Finance: https://finn1817.github.io/Future-Finance/\n- Resume: https://finn1817.github.io/Resume-Builder/\n- Flappy Bird: https://finn1817.github.io/my-flappy-bird/"
          }
        }
      },
      "welcome.txt": {
        type: "file",
        content: "╔════════════════════════════════════════════╗\n║   Welcome to dfinn.me Terminal v2.0!      ║\n╚════════════════════════════════════════════╝\n\nHello! I'm Daniel Finn, a software developer passionate about\nweb development, algorithms, and creating interactive experiences.\n\nThis terminal is a showcase of my projects and skills.\n\nQUICK START:\n• Type 'help' to see all available commands\n• Type 'projects' to see my work\n• Type 'neofetch' for system information\n• Type 'ls' to list files in current directory\n• Type 'cat welcome.txt' to see this message again\n\nFUN COMMANDS:\n• 'matrix' - Toggle Matrix rain effect\n• 'theme [name]' - Change color scheme\n• 'joke' - Hear a programming joke\n• 'ascii [art]' - Display ASCII art\n• 'weather [city]' - Check the weather\n\nEnjoy exploring!"
      },
      "about.txt": {
        type: "file",
        content: "# About dfinn.me Terminal\n\nVersion: 2.0\nCreated: October 2025\nAuthor: Daniel Finn\n\nThis is a web-based terminal emulator built with vanilla JavaScript,\nHTML, and CSS. It features:\n\n✓ Virtual file system with navigation\n✓ Multiple color themes\n✓ Visual effects (Matrix, shake, spin, glitch)\n✓ Project showcase and quick launch\n✓ Math utilities and calculators\n✓ Command history and autocomplete\n✓ ASCII art and banners\n✓ Weather display\n✓ System information display\n\nTECHNOLOGY STACK:\n- Pure JavaScript (no frameworks)\n- CSS3 animations and effects\n- HTML5 Canvas (Matrix effect)\n- Responsive design\n- Local storage for preferences\n\nINSPIRATION:\nTerminal emulators, retro computing, and the desire to create\nan interactive portfolio that stands out.\n\nType 'help' to explore all features!"
      },
      "skills.txt": {
        type: "file",
        content: "# Technical Skills\n\nPROGRAMMING LANGUAGES:\n• JavaScript (ES6+)\n• Python\n• HTML5\n• CSS3\n• SQL\n\nWEB DEVELOPMENT:\n• Frontend Development\n• Responsive Design\n• DOM Manipulation\n• Canvas API\n• Local Storage\n• RESTful APIs\n\nTOOLS & TECHNOLOGIES:\n• Git & GitHub\n• VS Code\n• Chrome DevTools\n• Command Line\n\nCONCEPTS:\n• Algorithms & Data Structures\n• Object-Oriented Programming\n• Functional Programming\n• Database Design\n• UI/UX Design\n• Version Control\n\nCURRENTLY LEARNING:\n• Advanced JavaScript patterns\n• React.js\n• Node.js\n• TypeScript"
      }
    }
  }
};

// Normalize and resolve paths to an absolute form starting from '~'
function normalizePath(pathStr) {
  if (!pathStr) return "~";
  // Treat leading '/' as root '~'
  if (pathStr.startsWith("/")) {
    pathStr = "~" + pathStr;
  }
  // Ensure it starts with '~' for our virtual FS
  if (!pathStr.startsWith("~")) {
    pathStr = "~/" + pathStr;
  }
  // Replace multiple slashes globally
  pathStr = pathStr.replace(/\/+/, "/").replace(/\/+/, "/");
  // Split and handle '.' and '..'
  const parts = pathStr.replace(/^~\/?/, "").split("/");
  const stack = [];
  for (const p of parts) {
    if (p === "" || p === ".") continue;
    if (p === "..") {
      if (stack.length > 0) stack.pop();
    } else {
      stack.push(p);
    }
  }
  return stack.length ? `~/${stack.join("/")}` : "~";
}

function resolveToAbsolute(inputPath) {
  // inputPath can be absolute (starting with '~' or '/') or relative
  if (!inputPath) return currentDir;
  if (inputPath.startsWith("~") || inputPath.startsWith("/")) {
    return normalizePath(inputPath);
  }
  // Relative to currentDir
  const base = currentDir;
  const combined = base === "~" ? `~/${inputPath}` : `${base}/${inputPath}`;
  return normalizePath(combined);
}

function getCurrentPath() {
  if (currentDir === "~") {
    return directoryStructure["~"];
  }
  
  return navigatePath(currentDir);
}

function navigatePath(path) {
  if (!path) return null;
  const abs = resolveToAbsolute(path);
  if (abs === "~") {
    return directoryStructure["~"];
  }
  const parts = abs.replace(/^~\//, "").split("/").filter(Boolean);
  let current = directoryStructure["~"];
  for (const part of parts) {
    if (!current.content || !current.content[part]) {
      return null;
    }
    current = current.content[part];
  }
  return current;
}

function listDirectory(dirPath, output) {
  let targetDir;
  if (!dirPath) {
    targetDir = getCurrentPath();
  } else {
    const absPath = resolveToAbsolute(dirPath);
    targetDir = navigatePath(absPath);
  }
  
  if (!targetDir) {
    output.innerHTML += `\nDirectory not found.`;
    return;
  }
  
  if (targetDir.type !== "directory") {
    output.innerHTML += `\n${dirPath} is not a directory.`;
    return;
  }
  
  output.innerHTML += "\n";
  const items = Object.keys(targetDir.content);
  items.sort();
  
  const directories = items.filter(item => targetDir.content[item].type === "directory");
  const files = items.filter(item => targetDir.content[item].type === "file");
  
  if (directories.length === 0 && files.length === 0) {
    output.innerHTML += "<empty directory>";
    return;
  }
  
  directories.forEach(dir => {
    output.innerHTML += `<span style="color: var(--terminal-prompt);">${dir}/</span>    `;
  });
  
  if (directories.length > 0 && files.length > 0) {
    output.innerHTML += "\n";
  }
  
  files.forEach(file => {
    output.innerHTML += `${file}    `;
  });
}

function changeDirectory(dirPath, output) {
  if (!dirPath) {
    currentDir = "~";
    updatePrompt();
    return;
  }
  
  const newPath = resolveToAbsolute(dirPath);
  const targetDir = navigatePath(newPath);
  if (!targetDir) {
    output.innerHTML += `\nDirectory not found: ${dirPath}`;
    return;
  }
  
  if (targetDir.type !== "directory") {
    output.innerHTML += `\n${dirPath} is not a directory.`;
    return;
  }
  
  currentDir = newPath;
  updatePrompt();
}

function viewFile(filePath, output) {
  if (!filePath) {
    output.innerHTML += "\nUsage: cat [file]";
    return;
  }
  
  const absPath = resolveToAbsolute(filePath);
  let targetFile = navigatePath(absPath);
  
  // Fallback: if not found, try current directory direct lookup (handles edge joins)
  if (!targetFile) {
    const dirObj = getCurrentPath();
    if (dirObj && dirObj.content) {
      // Exact match first
      if (dirObj.content[filePath]) {
        targetFile = dirObj.content[filePath];
      } else {
        // Case-insensitive lookup
        const lower = filePath.toLowerCase();
        const matchKey = Object.keys(dirObj.content).find(k => k.toLowerCase() === lower);
        if (matchKey) targetFile = dirObj.content[matchKey];
      }
    }
  }
  
  if (!targetFile) {
    output.innerHTML += `\nFile not found: ${filePath}`;
    return;
  }
  
  if (targetFile.type !== "file") {
    output.innerHTML += `\n${filePath} is not a file.`;
    return;
  }
  
  output.innerHTML += `\n${targetFile.content}`;
}