var allSizeBoxes = document.querySelectorAll('.size-box');

for (var i = 0; i < allSizeBoxes.length; i++) {
  var currentBox = allSizeBoxes[i];
  
  if (!currentBox.classList.contains('disabled')) {
    currentBox.addEventListener('click', function() {
      
      for (var j = 0; j < allSizeBoxes.length; j++) {
        allSizeBoxes[j].classList.remove('selected');
      }
      
      this.classList.add('selected');
      console.log("Selected size:", this.textContent);
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var selectedSize = null;
  
  var sizeBoxes = document.querySelectorAll(".size-box"); //shoes sizes seclection 
  
  // Add click handlers to size boxes
  for (var i = 0; i < sizeBoxes.length; i++) {
    if (!sizeBoxes[i].classList.contains("disabled")) {
      sizeBoxes[i].addEventListener("click", function() {
        // Remove all selections
        for (var j = 0; j < sizeBoxes.length; j++) {
          sizeBoxes[j].classList.remove("selected");
        }
        // Select current
        this.classList.add("selected");
        selectedSize = this.textContent;
      });
    }
  }

  var addToCartBtn = document.querySelector(".add-to-cart-btn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function() {
      if (selectedSize) {
        alert(
          "Size " + selectedSize + " added to cart!\n\nThank you for shopping 😉\nYour product  is on the way as soon as possible!");        
        
        this.textContent = "Added!";
        this.disabled = true;
        this.style.backgroundColor = "#28a745";
        
        // Reset button after 2 seconds
        var btn = this;
        setTimeout(function() {
          btn.textContent = "Add to Cart";
          btn.disabled = false;
          btn.style.backgroundColor = "#007bff";
        }, 2000);
      } else {
        alert("⚠️ Please select a size before adding to cart.");
      }
    });
  }
});

function toggleDetails() {
  var content = document.getElementById('details-content');
  var icon = document.getElementById('toggle-icon');

  if (content.classList.contains('show')) {
    content.classList.remove('show');
    icon.innerHTML = '+';
  } else {
    content.classList.add('show');
    icon.innerHTML = '−';
  }
}


function togglerating() {
  var content = document.getElementById('rating-content');
  var icon = document.getElementById('rating-toggle-icon');

  if (content.classList.contains('show')) {
    content.classList.remove('show');
    icon.innerHTML = '+';
  } else {
    content.classList.add('show');
    icon.innerHTML = '−';
  }
}


