document.addEventListener("DOMContentLoaded", function() {
  // Set up "See More" buttons for each category
  ["men", "women", "children"].forEach(function(category) {
    const button = document.getElementById("see-more-" + category);
    if (button) {
      button.addEventListener("click", function() {
        showMoreProducts(category);
      });
    }
  });

  // Set up product sorting
  const sortSelector = document.getElementById("sorts-selection");
  if (sortSelector) {
    sortSelector.addEventListener("change", handleSortChange);
  }

  document.querySelectorAll(".product-size.out-of-stock").forEach(function(size) {
    size.addEventListener("click", function(event) {
      event.preventDefault();
      alert("This size is out of stock!");
    });
  });
});

//  SORTING FUNCTIONS 
function handleSortChange() {
  const selectedValue = this.value;
  const categoryList = ["mens-shoes", "womens-shoes", "children-shoes"];

  if (categoryList.includes(selectedValue)) {
    showSelectedCategory(selectedValue);
  } else {
    sortProducts(selectedValue);
  }
}

function showSelectedCategory(categoryId) {
  // Hide all categories
  document.querySelectorAll(".product-section").forEach(function(section) {
    section.style.display = "none";
  });

  // Show selected category
  const selectedCategory = document.getElementById(categoryId);
  if (selectedCategory) {
    selectedCategory.style.display = "block";
    showAllProductsInCategory(selectedCategory);
    hideCategoryButton(categoryId);
  }
}

function showAllProductsInCategory(categorySection) {
  categorySection.parentElement.querySelectorAll(".product-1-card").forEach(function(product) {
    product.style.display = "block";
    product.classList.remove("hidden");
  });
}

function hideCategoryButton(categoryId) {
  const buttonName = categoryId.split("-")[0];
  const categoryButton = document.getElementById("see-more-" + buttonName);
  if (categoryButton) categoryButton.style.display = "none";
}

// PRODUCT SORTING
function sortProducts(sortOrder) {
  document.querySelectorAll(".product-1-grid").forEach(function(productGrid) {
    const products = Array.from(productGrid.children);
    
    products.sort(function(productA, productB) {
      const priceA = getProductPrice(productA);
      const priceB = getProductPrice(productB);
      return sortOrder === "high-low" ? priceB - priceA : priceA - priceB;
    });

    productGrid.innerHTML = "";
    products.forEach(function(product) {
      productGrid.appendChild(product);
    });
  });
}

function getProductPrice(productElement) {
  const priceText = productElement.querySelector(".current-price").textContent;
  return parseFloat(priceText.replace("$", "")) || 0;
}

//  SHOW MORE PRODUCTS
function showMoreProducts(category) {
  const categoryMap = {
    men: "mens-shoes",
    women: "womens-shoes",
    children: "children-shoes"
  };

  const categorySection = document.getElementById(categoryMap[category]);
  if (!categorySection) return;

  // Find the product grid for this category
  let productGrid = categorySection.nextElementSibling;
  while (productGrid && !productGrid.classList.contains("product-1-grid")) {
    productGrid = productGrid.nextElementSibling;
  }

  if (!productGrid) return;

  // Show hidden products
  const hiddenProducts = productGrid.querySelectorAll(".product-1-card.hidden");
  hiddenProducts.forEach(function(product) {
    product.classList.remove("hidden");
  });

  // Hide button if no more products
  const showMoreButton = document.getElementById("see-more-" + category);
  if (showMoreButton && hiddenProducts.length === 0) {
    showMoreButton.style.display = "none";
  }
}

// DEVICE CHECK
if (window.innerWidth <= 768) {
} else {
}