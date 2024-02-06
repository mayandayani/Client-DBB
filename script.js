// document.addEventListener("DOMContentLoaded", function () {

//   // Hover effect functionality
//   const imgContainers = document.querySelectorAll(".imgContainer");

//   imgContainers.forEach((imgContainer) => {
//       const productDetails = imgContainer.querySelector(".productDetails");

//       imgContainer.addEventListener("mouseover", function () {
//           productDetails.style.opacity = "1";
//       });

//       imgContainer.addEventListener("mouseout", function () {
//           productDetails.style.opacity = "0";
//       });
//   });

// });

  // Function to close the sidebar
  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
    document.getElementById("check").checked = false; // Uncheck the checkbox
}

document.addEventListener("DOMContentLoaded", function () {
  const sidebarCheckbox = document.getElementById("check");
  const sidebarLinks = document.querySelectorAll("#navbar ul li a");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");

  // Event listener for sidebar links
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeSidebar(); // Close the sidebar when a link is clicked
      const targetSectionId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetSectionId);

      // Scroll to the target section smoothly
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Event listener for the checkbox (toggle sidebar)
  sidebarCheckbox.addEventListener("change", function () {
    if (sidebarCheckbox.checked) {
      document.body.classList.add("sidebar-open");
      closeSidebarBtn.style.display = "block"; // Show the "Close Sidebar" button
    } else {
      closeSidebarBtn.style.display = "none"; // Hide the "Close Sidebar" button
    }
  });
});