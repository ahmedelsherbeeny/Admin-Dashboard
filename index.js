
const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeToggler = document.querySelector('.theme-toggler');
const toggleSpans = themeToggler.querySelectorAll('span');
const linkElement = document.querySelector('link[href="./scss/styles.css"]');

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block"
})
closeBtn.addEventListener("click", () => {


  sideMenu.style.display = "none"
})





toggleSpans.forEach((span) => {
  span.addEventListener('click', function () {
    if (!span.classList.contains('active')) {
      // Toggle the active class
      toggleSpans.forEach((s) => s.classList.toggle('active'));

      // Disable checking of the other span
      toggleSpans.forEach((s) => {
        if (s !== span) {
          s.setAttribute('disabled', 'disabled');
        }
      });

      // Add styles based on the class
      if (span.classList.contains('light-mode')) {
        // Add styles for light mode
        linkElement.href = './scss/styles.css';
      } else if (span.classList.contains('dark-mode')) {
        // Add styles for dark mode
        linkElement.href = './scss/styles-dark.css';
      }
    }
  });
});

orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `

  <td>${order.productName}</td>
  <td>${order.productNumber}</td>
  <td>${order.paymentStatus}</td>
  <td class="${order.shipping === 'declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'} " >${order.shipping}</td>
  <td class="primary">details</td>
  
  
  `
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
})