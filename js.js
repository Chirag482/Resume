var navMenuAnchorTags = document.querySelectorAll(".navbar a");

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();

    var targetSectionId = this.textContent.trim().toLowerCase();

    var targetSection = document.getElementById(targetSectionId);

    var count = 0;
    var interval = setInterval(function () {
      var targetSectionOffset = targetSection.offsetTop;
      if (count >= targetSectionOffset) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 10);
      count += 10;
    }, 5);
  });
}

//auto fill skills section
var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementsByClassName("skills-display");
window.addEventListener("scroll", checkScroll);
var animationDone = false;
console.log(skillsContainer);
function intialiseBars() {
  for (let bar of progressBars) {
    bar.style.width = 0 + "%";
  }
}
intialiseBars();
function checkScroll() {
  var coordinates = skillsContainer[0].getBoundingClientRect();
  if (coordinates.top < window.innerHeight) {
    if (!animationDone) {
      animationDone = true;
      fillBars();
    }
  }
}

function fillBars() {
  for (let bar of progressBars) {
    let targetWidth = bar.getAttribute("data-bar-width");
    let currentWidth = 0;
    let interval = setInterval(function () {
      if (currentWidth > targetWidth) {
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + "%";
    }, 10);
  }
}
