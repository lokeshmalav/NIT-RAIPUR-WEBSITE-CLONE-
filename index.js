var scrollingLinks = document.querySelector('.scrolling-links');
var isHovered = false;
var scrollInterval;

function scrollLinks() {
  if (!isHovered) {
    scrollingLinks.scrollTop += 1; // Adjust scrolling speed as needed
    if (scrollingLinks.scrollTop >= scrollingLinks.scrollHeight - scrollingLinks.clientHeight) {
      scrollingLinks.scrollTop = 0;
    }
  }
}

function startScroll() {
  isHovered = false;
  scrollInterval = setInterval(scrollLinks, 50); // Adjust scroll speed as needed
}

function stopScroll() {
  isHovered = true;
  clearInterval(scrollInterval);
}

startScroll(); // Start scrolling automatically

scrollingLinks.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    scrollingLinks.scrollTop += 10; // Scroll down
  } else {
    scrollingLinks.scrollTop -= 10; // Scroll up
  }
});

document.getElementById