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
