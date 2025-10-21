// Visual effects
let matrixActive = false;

function toggleMatrix(output) {
  const canvas = document.getElementById("matrix-canvas");
  
  if (matrixActive) {
    canvas.style.display = "none";
    matrixActive = false;
    output.innerHTML += "\nMatrix effect deactivated.";
  } else {
    canvas.style.display = "block";
    matrixActive = true;
    output.innerHTML += "\nMatrix effect activated.";
    startMatrixEffect();
  }
}

function applyEffect(effect, output) {
  const container = document.getElementById("terminal-container");
  
  switch (effect) {
    case "shake":
      container.style.animation = "shake 0.5s";
      setTimeout(() => container.style.animation = "", 500);
      output.innerHTML += "\nShake effect applied.";
      break;
    case "spin":
      container.style.animation = "spin 2s linear";
      setTimeout(() => container.style.animation = "", 2000);
      output.innerHTML += "\nSpin effect applied.";
      break;
    case "glitch":
      const glitchOverlay = document.createElement("div");
      glitchOverlay.className = "glitch-effect";
      document.body.appendChild(glitchOverlay);
      setTimeout(() => glitchOverlay.remove(), 2000);
      output.innerHTML += "\nGlitch effect applied.";
      break;
    case "hacker":
      document.body.style.animation = "hacker 3s";
      setTimeout(() => document.body.style.animation = "", 3000);
      output.innerHTML += "\nHacker effect applied.";
      break;
  }
}

function startMatrixEffect() {
  if (!matrixActive) return;
  
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * -100);
  }
  
  function draw() {
    if (!matrixActive) return;
    
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";
    
    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      drops[i]++;
    }
    
    requestAnimationFrame(draw);
  }
  
  draw();
}

// Handle window resize for matrix effect
window.addEventListener("resize", function() {
  if (matrixActive) {
    const canvas = document.getElementById("matrix-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});