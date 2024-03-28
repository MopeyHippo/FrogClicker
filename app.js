const theButton = document.getElementById("frogButton");
const frogSpan = document.getElementById("frogSpan");
const fpsSpan = document.getElementById("fpsSpan");
const tankButton = document.getElementById("tankButton");
const vivButton = document.getElementById("vivButton");
const stats = {
  frogCount: 0,
  fps: 0,
};

const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
  stats.frogCount = storageStats.frogCount;
  stats.fps = storageStats.fps;
}

function buyFrogs() {
  stats.frogCount++;
  updatePage();
  updateStorage();
}
function buyTank() {
  stats.fps += 1;
  stats.frogCount -= 10;
  updatePage();
  updateStorage();
}
function buyViv() {
  stats.fps += 10;
  stats.frogCount -= 100;
  updatePage();
  updateStorage();
}

function updatePage() {
  frogSpan.textContent = stats.frogCount;
  fpsSpan.textContent = stats.fps;
}

function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}

function reset() {
  stats.fps = 0;
  stats.frogCount = 0;
}

frogButton.addEventListener("click", buyFrogs);
tankButton.addEventListener("click", buyTank);
vivButton.addEventListener("click", buyViv);
resetButton.addEventListener("click", reset);

setInterval(function () {
  stats.frogCount += stats.fps;
  updatePage();
  updateStorage();
}, 1000);
