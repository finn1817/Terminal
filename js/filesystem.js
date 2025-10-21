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
            content: "# Resume\n\nA professional software developer with experience in web development, algorithms, and data structures."
          },
          "notes.txt": {
            type: "file",
            content: "Remember to update the portfolio with the latest projects."
          }
        }
      },
      "projects": {
        type: "directory",
        content: {
          "README.md": {
            type: "file",
            content: "# Projects Directory\n\nThis directory contains links to all my project websites and repositories."
          }
        }
      },
      "welcome.txt": {
        type: "file",
        content: "Welcome to dfinn.me terminal!\nType 'help' to see available commands."
      }
    }
  }
};

function getCurrentPath() {
  if (currentDir === "~") {
    return directoryStructure["~"];
  }
  
  return navigatePath(currentDir);
}

function navigatePath(path) {
  if (path === "~") {
    return directoryStructure["~"];
  }
  
  const parts = path.replace(/^~\//, "").split("/").filter(Boolean);
  let current = directoryStructure["~"];
  
  for (const part of parts) {
    if (part === "..") {
      continue;
    }
    
    if (!current.content || !current.content[part]) {
      return null;
    }
    
    current = current.content[part];
  }
  
  return current;
}

function listDirectory(dirPath, output) {
  let currentPath = getCurrentPath();
  let targetDir = currentPath;
  
  if (dirPath) {
    if (dirPath.startsWith("/")) {
      targetDir = navigatePath(dirPath);
    } else {
      targetDir = navigatePath(currentPath + "/" + dirPath);
    }
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
  
  let newPath;
  if (dirPath === "..") {
    const parts = currentDir.split("/");
    if (parts.length <= 1) {
      newPath = "~";
    } else {
      parts.pop();
      newPath = parts.join("/");
    }
  } else if (dirPath.startsWith("/")) {
    newPath = dirPath;
  } else {
    newPath = currentDir === "~" ? "~/" + dirPath : currentDir + "/" + dirPath;
  }
  
  newPath = newPath.replace(/\/+/g, "/");
  if (newPath.endsWith("/") && newPath !== "/") {
    newPath = newPath.slice(0, -1);
  }
  
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
  
  let currentPath = getCurrentPath();
  let targetFile;
  
  if (filePath.startsWith("/")) {
    targetFile = navigatePath(filePath);
  } else {
    targetFile = navigatePath(currentPath + "/" + filePath);
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