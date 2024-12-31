const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Mango",
    "Orange",
    "Papaya",
    "Raspberry",
  ];
  const searchInput = document.getElementById("searchInput");
  const dropdownList = document.getElementById("dropdownList");
  const arrow = document.querySelector(".arrow");

  function filterItems(searchText){
    return items.filter((item)=>
        item.toLowercase().includes(searchText.toLowercase())
)
  }

  unction 
  updateDropdownList(filteredItems) 
  {
    dropdownList.innerHTML = "";
  
    if (filteredItems.length === 0) {
      dropdownList.innerHTML = '<div class="no-results">Aucun résultat</div>';
      return;
    }
  
    filteredItems.forEach((item) => {
      const div = document.createElement("div");
      div.className = "dropdown-item";
      div.textContent = item;
  
      div.addEventListener("click", () => {
        searchInput.value = item;
        dropdownList.classList.remove("show");
        arrow.classList.remove("open");
      });
  
      dropdownList.appendChild(div);
    });
  }
  function toggleDropdown() {
    dropdownList.classList.toggle("show");
    arrow.classList.toggle("open");
  }
  
  function filterItems(searchText) {
    return items.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  
  function updateDropdownList(filteredItems) {
    dropdownList.innerHTML = "";
  
    if (filteredItems.length === 0) {
      dropdownList.innerHTML = '<div class="no-results">Aucun résultat</div>';
      return;
    }
  
    filteredItems.forEach((item) => {
      const div = document.createElement("div");
      div.className = "dropdown-item";
      div.textContent = item;
  
      div.addEventListener("click", () => {
        searchInput.value = item;
        dropdownList.classList.remove("show");
        arrow.classList.remove("open");
      });
  
      dropdownList.appendChild(div);
    });
  }
  
  // Event Listeners
  searchInput.addEventListener("focus", () => {
    updateDropdownList(filterItems(searchInput.value));
    dropdownList.classList.add("show");
    arrow.classList.add("open");
  });
  
  searchInput.addEventListener("input", (e) => {
    updateDropdownList(filterItems(e.target.value));
    dropdownList.classList.add("show");
    arrow.classList.add("open");
  });
  
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !dropdownList.contains(e.target)) {
      dropdownList.classList.remove("show");
      arrow.classList.remove("open");
    }
  });