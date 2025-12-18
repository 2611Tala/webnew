const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

if (menuIcon && navLinks) {
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
window.addEventListener('load', function () {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    if (loader) loader.classList.add('hidden');
    if (content) content.classList.remove('hidden');

    document.body.style.overflowY = "auto";
  }, 2000);
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("productModal");
  const modalImg = document.getElementById("modalImg");
  const modalName = document.getElementById("modalName");
  const modalDesc = document.getElementById("modalDesc");
  const modalPrice = document.getElementById("modalPrice");
  const modalQty = document.getElementById("modalQty");
  const closeBtn = document.querySelector(".closeBtn");

  const cards = document.querySelectorAll(".cards .card");

  cards.forEach(card => {
    if (card.dataset.type === "custom") return;
    card.addEventListener("click", () => {
      modalImg.src = card.querySelector("img").src;
      modalName.textContent = card.querySelector("h3")?.textContent || "";
      modalDesc.textContent = card.querySelector("p")?.textContent || "";
      modalPrice.textContent = card.querySelector("span")?.textContent || "";
      modalQty.value = 1;

      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const homeIcon = document.querySelector('.icons img[alt="home"]');
  const cartIcon = document.querySelector('.icons img[alt="shopping"]');
  const favIcon = document.querySelector('.icons img[alt="fav"]');
  const personIcon = document.querySelector('.icons img[alt="person"]');

  if (homeIcon) homeIcon.onclick = () => window.location.href = "sweet.html";
  if (cartIcon) cartIcon.onclick = () => window.location.href = "cart.html";
  if (favIcon) favIcon.onclick = () => window.location.href = "favorite.html";
  if (personIcon) personIcon.onclick = () => window.location.href = "profile.html";
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".cards .card");
  cards.forEach((card, index) => {
    setTimeout(() => card.classList.add("show"), index * 150);
  });
});
document.addEventListener("DOMContentLoaded", () => {

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const saveFav = () => localStorage.setItem("favorites", JSON.stringify(favorites));
  const saveCart = () => localStorage.setItem("cart", JSON.stringify(cart));

  const favBtn = document.getElementById("favBtn");
  const addCartBtn = document.getElementById("addCartBtn");
  const modalName = document.getElementById("modalName");
  const modalImg = document.getElementById("modalImg");
  const modalPrice = document.getElementById("modalPrice");
  const modalQty = document.getElementById("modalQty");

  if (favBtn) {
    favBtn.addEventListener("click", () => {
      const item = {
        name: modalName.textContent,
        img: modalImg.src,
        price: modalPrice.textContent
      };

      const exists = favorites.find(f => f.name === item.name);

      if (exists) {
        favorites = favorites.filter(f => f.name !== item.name);
        favBtn.textContent = "♡";
      } else {
        favorites.push(item);
        favBtn.textContent = "❤️";
      }

      saveFav();
    });
  }
  if (addCartBtn) {
    addCartBtn.addEventListener("click", () => {
      const name = modalName.textContent;
      const img = modalImg.src;
      const price = modalPrice.textContent;
      const qty = Number(modalQty.value) || 1;

      const existing = cart.find(i => i.name === name);
      if (existing) existing.qty += qty;
      else cart.push({ name, img, price, qty });

      saveCart();

      let originalText = addCartBtn.innerHTML;
      addCartBtn.innerHTML = "Added ✓";
      addCartBtn.disabled = true;
      addCartBtn.style.backgroundColor = "#b34770";

      setTimeout(() => {
        addCartBtn.innerHTML = originalText;
        addCartBtn.disabled = false;
        addCartBtn.style.backgroundColor = "";
      }, 2000);
    });
  }

  window.openCakeModal = function (title, imgSrc, price) {
  const modal = document.getElementById("cakeModal");

  document.getElementById("cakeTitle").innerText = title;
  document.getElementById("cakeImg").src = imgSrc;
  document.getElementById("cakePrice").innerText = price;

  modal.style.display = "flex";
  document.body.style.overflow = "auto";
};


  window.closeCakeModal = function () {
    document.getElementById("cakeModal").style.display = "none";
  };

  window.updateCakePrice = function () {
    let sizeSelect = document.getElementById("cakeSize");
    let price = sizeSelect.options[sizeSelect.selectedIndex].dataset.price;
    document.getElementById("cakePrice").innerText = price;
  };

  window.addCakeToCart = function () {
    let size = document.getElementById("cakeSize").value;
    let price = document.getElementById("cakePrice").innerText;
    let title = document.getElementById("cakeTitle").innerText;
    let img = document.getElementById("cakeImg").src;

    let item = {
      name: title,
      img: img,
      size: size,
      price: price + "₪",
      qty: 1
    };

    cart.push(item);
    saveCart();
    closeCakeModal();
    alert("Added to cart!");
  };
  if (favBtn) {
  favBtn.addEventListener("click", () => {
    const item = {
      name: document.getElementById("cakeTitle").innerText,
      img: document.getElementById("cakeImg").src,
      price: document.getElementById("cakePrice").innerText + "₪"
    };

    const exists = favorites.find(f => f.name === item.name);

    if (exists) {
      favorites = favorites.filter(f => f.name !== item.name);
      favBtn.textContent = "♡";
    } else {
      favorites.push(item);
      favBtn.textContent = "❤️";
    }

    saveFav();
  });
}
if (addCartBtn) {
  addCartBtn.addEventListener("click", () => {

    const item = {
      name: document.getElementById("cakeTitle").innerText,
      img: document.getElementById("cakeImg").src,
      price: document.getElementById("cakePrice").innerText + "₪",
      qty: 1
    };

    const existing = cart.find(i => i.name === item.name);
    if (existing) existing.qty++;
    else cart.push(item);

    saveCart();

    let original = addCartBtn.innerHTML;
    addCartBtn.innerHTML = "Added ✓";
    addCartBtn.disabled = true;

    setTimeout(() => {
      addCartBtn.innerHTML = original;
      addCartBtn.disabled = false;
    }, 2000);
  });
}
  window.openCustomModal = () => document.getElementById("customModal").style.display = "flex";
  window.closeCustomModal = () => document.getElementById("customModal").style.display = "none";

  document.getElementById("customImages")?.addEventListener("change", function () {
    const preview = document.getElementById("previewContainer");
    preview.innerHTML = "";

    document.getElementById("uploadIcon").style.display = "none";
    document.querySelector(".upload-box p").style.display = "none";

    [...this.files].forEach(file => {
      let img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      preview.appendChild(img);
    });
  });

  document.getElementById("addCustomBtn")?.addEventListener("click", () => {
    const images = [...document.getElementById("customImages").files];
    if (images.length === 0) return alert("Please upload at least one image!");

    const sizeEl = document.getElementById("customSize");
    const size = sizeEl.value;
    const price = sizeEl.options[sizeEl.selectedIndex].dataset.price;

    let flavor = document.getElementById("customFlavor").value;
    if (flavor === "other") {
      flavor = document.getElementById("customFlavorOther").value;
    }

    const description = document.getElementById("customDescription").value;
    const imageURLs = images.map(file => URL.createObjectURL(file));

    const item = {
      name: `Custom Cake (${size}, ${flavor})`,
      size,
      flavor,
      description,
      price: price + "₪",
      qty: 1,
      img: imageURLs[0],
      images: imageURLs
    };

    cart.push(item);
    saveCart();
    closeCustomModal();
    alert("Custom Cake Added ✓");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});
const searchInput = document.getElementById("searchInput");
const suggestionBox = document.getElementById("suggestions");

const items = [
  { name: "Cookies", link: "cookies.html" },
  { name: "Donuts", link: "donuts.html" },
  { name: "Kunafa", link: "kunafa.html" },
  { name: "Baklawa", link: "Baklawa.html" },
  { name: "Gateau", link: "Gateau.html" },
  { name: "Croissant", link: "croissant.html" },
  { name: "Candy", link: "Candy.html" },
  { name: "Sweet Gifts", link: "Sweet Gifts.html" }
];

if (searchInput) {
  searchInput.addEventListener("input", () => {
    let text = searchInput.value.toLowerCase();
    suggestionBox.innerHTML = "";

    if (text.length < 2) {
      suggestionBox.style.display = "none";
      return;
    }

    let matches = items.filter(item => item.name.toLowerCase().includes(text));

    matches.forEach(item => {
      let li = document.createElement("li");
      li.textContent = item.name;
      li.onclick = () => window.location.href = item.link;
      suggestionBox.appendChild(li);
    });

    suggestionBox.style.display = matches.length ? "block" : "none";
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-box")) {
      suggestionBox.style.display = "none";
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const menuList = document.getElementById("menuList");

  if (!menuBtn || !menuList) return;

  function closeMenu() {
    menuList.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    menuList.classList.add("show");
    menuBtn.setAttribute("aria-expanded", "true");
  }

  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    if (expanded) closeMenu();
    else openMenu();
  });

  window.addEventListener("click", (e) => {
    if (!e.target.closest("#menuDropdown")) {
      closeMenu();
    }
  });

  menuList.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
      menuBtn.focus();
    }
  });
});
document.getElementById("checkoutBtn")?.addEventListener("click", () => {
  let cartData = localStorage.getItem("cart");
  
  if (!cartData || JSON.parse(cartData).length === 0) {
    alert("Your cart is empty!");
    return;
  }

  document.getElementById("cartDataInput").value = cartData;
  document.getElementById("checkoutModal").style.display = "flex";
  document.body.style.overflow = "hidden";
});

window.closeCheckout = function () {
  document.getElementById("checkoutModal").style.display = "none";
  document.body.style.overflow = "auto";
};