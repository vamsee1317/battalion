// Movie data (use Picsum random IDs for demo)
const movies = {
  popular: [101, 102, 103, 104, 105, 106],
  trending: [201, 202, 203, 204, 205, 206],
  topRated: [301, 302, 303, 304, 305, 306],
};

// Render movies dynamically
function renderMovies(rowId, ids) {
  const row = document.getElementById(rowId);
  row.innerHTML = ""; // clear before render
  ids.forEach(id => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="https://picsum.photos/200/300?random=${id}" alt="Movie Poster">`;
    row.appendChild(card);
  });
}

renderMovies("popularRow", movies.popular);
renderMovies("trendingRow", movies.trending);
renderMovies("topRatedRow", movies.topRated);

// Theme toggle with localStorage
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

function applyTheme(theme) {
  if (theme === "light") {
    body.classList.add("light");
    themeToggle.textContent = "☀️ Light";
  } else {
    body.classList.remove("light");
    themeToggle.textContent = "🌙 Dark";
  }
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

// Toggle theme
themeToggle.addEventListener("click", () => {
  const newTheme = body.classList.contains("light") ? "dark" : "light";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
