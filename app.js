const theButton = document.getElementById("frogButton");
const frogSpan = document.getElementById("frogSpan");
const fpsSpan = document.getElementById("fpsSpan");
const tankButton = document.getElementById("tankButton");
const vivButton = document.getElementById("vivButton");
const pondButton = document.getElementById("pondButton");
const lakeButton = document.getElementById("lakeButton");
const farmButton = document.getElementById("farmButton");



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
  stats.frogCount -= 500;
  updatePage();
  updateStorage();
}
function buyPond() {
  stats.fps += 100;
  stats.frogCount -= 1000;
  updatePage();
  updateStorage();
}
function buyLake() {
  stats.fps += 1000;
  stats.frogCount -= 10000;
  updatePage();
  updateStorage();
}
function buyFarm() {
  stats.fps += 10000;
  stats.frogCount -= 100000;
  updatePage();
  updateStorage();
}

function updatePage() {
  frogSpan.textContent = stats.frogCount;
  fpsSpan.textContent = stats.fps;
  if (stats.frogCount < 10) tankButton.setAttribute("disabled","")
  if (stats.frogCount >= 10 ) tankButton.removeAttribute("disabled")
  if (stats.frogCount < 500) vivButton.setAttribute("disabled","")
  if (stats.frogCount >= 500 ) vivButton.removeAttribute("disabled")
  if (stats.frogCount < 1000) pondButton.setAttribute("disabled","")
  if (stats.frogCount >= 1000 ) pondButton.removeAttribute("disabled")
  if (stats.frogCount < 10000) lakeButton.setAttribute("disabled","")
  if (stats.frogCount >= 10000 ) lakeButton.removeAttribute("disabled")
  if (stats.frogCount < 100000) farmButton.setAttribute("disabled","")
  if (stats.frogCount >= 100000 ) farmButton.removeAttribute("disabled")
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
pondButton.addEventListener("click", buyPond);
lakeButton.addEventListener("click", buyLake);
farmButton.addEventListener("click", buyFarm);

resetButton.addEventListener("click", reset);

setInterval(function () {
  stats.frogCount += stats.fps;
  updatePage();
  updateStorage();
}, 1000);
  
