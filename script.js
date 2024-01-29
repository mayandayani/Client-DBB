document.addEventListener("DOMContentLoaded", function () {

  // Hover effect functionality
  const imgContainers = document.querySelectorAll(".imgContainer");

  imgContainers.forEach((imgContainer) => {
      const productDetails = imgContainer.querySelector(".productDetails");

      imgContainer.addEventListener("mouseover", function () {
          productDetails.style.opacity = "1";
      });

      imgContainer.addEventListener("mouseout", function () {
          productDetails.style.opacity = "0";
      });
  });

});
