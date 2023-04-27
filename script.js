// Add an active class to the current navigation link
const currentLocation = location.href;
const links = document.querySelectorAll('nav ul li a');
const menuLength = links.length;
for (let i = 0; i < menuLength; i++) {
  if (links[i].href === currentLocation) {
    links[i].classList.add('active');
  }
}

