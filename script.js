const elraenn = document.getElementById("elrn");
const rraenee = document.getElementById("rrn");
const holmes = document.getElementById("hlms");
const baboli = document.getElementById("bbli");
const cordiseps = document.getElementById("crdsps");
const nemesis = document.getElementById("nmss");
const ahmtgzms = document.getElementById("ahmt");
const gicaas = document.getElementById("gcss");
const frame = document.getElementById("frame");
const small = document.getElementById("smaller");
const elements = document.getElementsByClassName("channelinfo");
const elements0 = document.getElementsByClassName("status");
const ico = document.getElementById("close");
const takip = document.getElementById("takiph1");
const side = document.getElementById("side");
const sidehead = document.getElementById("side1");
const mediaQuery = window.matchMedia('(max-width: 540px)')

if (mediaQuery.matches) {
    side.style.width = "50px";
    delayed();
    sidehead.style.display = "none";
}

function delayed() {
  Array.from(elements).forEach(function (element) {
    if (element.style.display === "none") {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });

  Array.from(elements0).forEach(function (element) {
    if (element.style.display === "none") {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });

  if (ico.classList.contains("fa-angle-left")) {
    ico.classList.remove("fa-angle-left");
    ico.classList.add("fa-angle-right");
  } else {
    ico.classList.remove("fa-angle-right");
    ico.classList.add("fa-angle-left");
  }

  if (takip.style.display === "none") {
    takip.style.display = "block";
  } else {
    takip.style.display = "none";
  }
}

small.addEventListener("click", function () {
  if (side.offsetWidth === 240) {
    side.style.width = "50px";
    delayed();
  } else {
    side.style.width = "240px";
    setTimeout(function () {
        delayed();
      }, 500);
  }
});

elraenn.addEventListener("click", function () {
  let website = "https://elraenn.com/";
  frame.innerHTML = `<iframe src="${website}" frameborder="0"></iframe>`;
});

rraenee.addEventListener("click", function () {
  let website =
    "https://mansurberk.github.io/Team-Elraen/RRaenee.com/index.html";
  frame.innerHTML = `<iframe src="${website}" frameborder="0"></iframe>`;
});

holmes.addEventListener("click", function () {
  let website =
    "https://mansurberk.github.io/Team-Elraen/Holmes.com/index.html";
  frame.innerHTML = `<iframe src="${website}" frameborder="0"></iframe>`;
});

baboli.addEventListener("click", function () {
  let website =
    "https://mansurberk.github.io/Team-Elraen/Baboli.com/index.html";
  frame.innerHTML = `<iframe src="${website}" frameborder="0"></iframe>`;
});

cordiseps.addEventListener("click", function () {
  let website =
    "https://mansurberk.github.io/Team-Elraen/cordiseps.com/index.html";
  frame.innerHTML = `<iframe src="${website}" frameborder="0"></iframe>`;
});

nemesis.addEventListener("click", function () {
  let website =
    "https://mansurberk.github.io/Team-Elraen/Nemesis.com/index.html";
  frame.innerHTML = `<iframe src="${website}" frameborder="0"></iframe>`;
});

ahmtgzms.addEventListener("click", function () {
  let website =
    "https://mansurberk.github.io/Team-Elraen/Ahmetgzms.com/index.html";
  frame.innerHTML = `<iframe src="${website}" frameborder="0"></iframe>`;
});

gicaas.addEventListener("click", function () {
  let website = "https://gicaas.com/";
  frame.innerHTML = `<iframe src="${website}" frameborder="0"></iframe>`;
});
