const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    category: "movie",
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    year: 2010, country: "USA", language: "English", duration: "2h 28min",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. A mind-bending thriller from Christopher Nolan that blurs the line between dreams and reality."
  },
  {
    id: 2,
    title: "Attack on Titan",
    genre: "Action",
    category: "anime",
    image: "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    year: 2013, country: "Japan", language: "Japanese", duration: "24 min/ep",
    description: "Humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans. A young boy vows to exterminate them after a Titan breaks through the wall and devours his mother."
  },
  {
    id: 3,
    title: "Breaking Bad",
    genre: "Drama",
    category: "series",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    year: 2008, country: "USA", language: "English", duration: "49 min/ep",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future. A masterpiece study of transformation and moral decay."
  },
  {
    id: 4,
    title: "Interstellar",
    genre: "Sci-Fi",
    category: "movie",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    year: 2014, country: "USA", language: "English", duration: "2h 49min",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. An epic journey through time, space, and the bonds of love that transcend dimensions."
  },
  {
    id: 5,
    title: "Death Note",
    genre: "Thriller",
    category: "anime",
    image: "https://tv8.egydead.live/wp-content/uploads/2021/03/%D8%AC%D9%85%D9%8A%D8%B9-%D8%AD%D9%84%D9%82%D8%A7%D8%AA-%D8%A7%D9%86%D9%85%D9%8A-Death-Note-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D9%83%D8%A7%D9%85%D9%84.jpg",
    year: 2006, country: "Japan", language: "Japanese", duration: "23 min/ep",
    description: "A high school student discovers a supernatural notebook that allows him to kill anyone whose name he writes in it. A psychological cat-and-mouse game between a genius student and a brilliant detective."
  },
  {
    id: 6,
    title: "Stranger Things",
    genre: "Horror",
    category: "series",
    image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    year: 2016, country: "USA", language: "English", duration: "51 min/ep",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl. A love letter to 80s sci-fi and horror culture."
  },
  {
    id: 7,
    title: "The Dark Knight",
    genre: "Action",
    category: "movie",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    year: 2008, country: "USA", language: "English", duration: "2h 32min",
    description: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, he sets out to dismantle the remaining criminal organizations that plague the streets. The Joker arrives to plunge Gotham into anarchy."
  },
  {
    id: 8,
    title: "Demon Slayer",
    genre: "Action",
    category: "anime",
    image: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    year: 2019, country: "Japan", language: "Japanese", duration: "24 min/ep",
    description: "A visually stunning journey of a young boy who becomes a demon slayer to avenge his family and save his sister who was turned into a demon."
  },
  {
    id: 9,
    title: "Parasite",
    genre: "Drama",
    category: "movie",
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    year: 2019, country: "South Korea", language: "Korean", duration: "2h 12min",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. Winner of the Palme d'Or and four Academy Awards."
  },
  {
    id: 10,
    title: "The Witcher",
    genre: "Fantasy",
    category: "series",
    image: "https://tv8.egydead.live/wp-content/uploads/2025/10/%D9%85%D8%B3%D9%84%D8%B3%D9%84-The-Witcher-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D9%83%D8%A7%D9%85%D9%84.jpg",
    year: 2019, country: "USA", language: "English", duration: "1h/ep",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts. His path crosses with a powerful sorceress and a young princess with a dangerous secret."
  },
  {
    id: 11,
    title: "The Shawshank Redemption",
    genre: "Drama",
    category: "movie",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    year: 1994, country: "USA", language: "English", duration: "2h 22min",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. One of the greatest films ever made about hope and the resilience of the human spirit."
  },
  {
    id: 12,
    title: "One Piece",
    genre: "Adventure",
    category: "anime",
    image: "https://tv8.egydead.live/wp-content/uploads/2026/04/%D8%A7%D9%86%D9%85%D9%8A-%D9%88%D9%86-%D8%A8%D9%8A%D8%B3-%D8%A7%D8%B1%D9%83-%D8%A7%D9%84%D8%A8%D8%A7%D9%81-%D9%85%D8%AA%D8%B1%D8%AC%D9%85.jpg",
    year: 1999, country: "Japan", language: "Japanese", duration: "24 min/ep",
    description: "Monkey D. Luffy sets off on an adventure with his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. A legendary adventure across seas, islands, and epic battles."
  },
  {
    id: 13,
    title: "Get Out",
    genre: "Horror",
    category: "movie",
    image: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    year: 2017, country: "USA", language: "English", duration: "1h 44min",
    description: "A young African-American visits his white girlfriend's parents for the weekend, where his uncomfortable realization that her family is more sinister than they appear escalates to a terrifying boiling point."
  },
  {
    id: 14,
    title: "Money Heist",
    genre: "Crime",
    category: "series",
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    year: 2017, country: "Spain", language: "Spanish", duration: "40 min/ep",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history — stealing 2.4 billion euros from the Royal Mint of Spain. A global sensation that redefined heist storytelling."
  },
  {
    id: 15,
    title: "Spirited Away",
    genre: "Fantasy",
    category: "anime",
    image: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    year: 2001, country: "Japan", language: "Japanese", duration: "2h 5min",
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits. A timeless masterpiece from Studio Ghibli and director Hayao Miyazaki."
  }
];
function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes("movie_log"))  return "login";
  if (path.includes("movie_page")) return "home";
  if (path.includes("movie_desc")) return "detail";
  if (path.includes("movie_pay"))  return "payment";
  return "home";
}

function getMovieById(id) {
  return movies.find(m => m.id === parseInt(id));
}
document.addEventListener("DOMContentLoaded", () => {
  const page = getCurrentPage();
  if (page === "login")   initLogin();
  if (page === "home")    initHome();
  if (page === "detail")  initDetail();
  if (page === "payment") initPayment();
});
function initLogin() {
  const btn = document.getElementById("logbt");
  if (!btn) return;
  btn.addEventListener("click", handleLogin);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleLogin();
  });
}

function handleLogin() {
  const username = document.getElementById("UserN").value.trim();
  const password = document.getElementById("passU").value.trim();
  const errorEl  = document.getElementById("loginError");

  if (!username || !password) {
    errorEl.style.display = "block";
    document.getElementById("UserN").style.borderColor = username ? "rgba(255,255,255,0.1)" : "#E50914";
    document.getElementById("passU").style.borderColor = password ? "rgba(255,255,255,0.1)" : "#E50914";
    return;
  }

  errorEl.style.display = "none";
  localStorage.setItem("mv_username", username);

  const btn = document.getElementById("logbt");
  btn.textContent = "Signing in...";
  btn.style.opacity = "0.7";

  setTimeout(() => { window.location.href = "movie_page.html"; }, 600);
}
let currentFilter = "all";
let currentSearch = "";

function initHome() {
  setupNavbarScroll();
  renderHeroScroll();
  setupHeroArrows();
  renderMovies(movies);
  setupFilter();
  setupSearch();
  setupSubscribe();
  setupContact();
  showGreeting();
}
function setupNavbarScroll() {
  const nav = document.getElementById("navb");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });
}
function showGreeting() {
  const username = localStorage.getItem("mv_username");
  if (username) {
    const brand = document.querySelector(".navbar-brand");
    if (brand) brand.title = `Welcome, ${username}!`;
  }
}
function renderHeroScroll() {
  const strip = document.getElementById("heroScroll");
  if (!strip) return;

  strip.innerHTML = "";

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "hero-card";

    const badgeClass = movie.category === "anime"  ? "anime"
                     : movie.category === "series" ? "series" : "";

    card.innerHTML = `
      <img class="hero-card-img" src="${movie.image}" alt="${movie.title}" loading="lazy"
           onerror="this.src='https://via.placeholder.com/160x240/141414/E50914?text=No+Image'"/>
      <span class="hero-card-badge ${badgeClass}">${movie.category}</span>
      <div class="hero-card-overlay">
        <div class="hero-card-title">${movie.title}</div>
        <div class="hero-card-genre">${movie.genre} · ${movie.year}</div>
      </div>
    `;

    card.addEventListener("click", () => goToDetail(movie.id));
    strip.appendChild(card);
  });
}
function setupHeroArrows() {
  const strip = document.getElementById("heroScroll");
  const btnL  = document.getElementById("heroLeft");
  const btnR  = document.getElementById("heroRight");
  if (!strip || !btnL || !btnR) return;

  const scrollAmount = 500;

  btnL.addEventListener("click", () => {
    strip.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
  btnR.addEventListener("click", () => {
    strip.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}
function renderMovies(list) {
  const grid      = document.getElementById("grid");
  const noResults = document.getElementById("noResults");
  if (!grid) return;

  grid.innerHTML = "";

  if (list.length === 0) {
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";

  list.forEach((movie, idx) => {
    const card = createMovieCard(movie, idx);
    grid.appendChild(card);
  });
}

function createMovieCard(movie, idx) {
  const div = document.createElement("div");
  div.className = "card";
  div.style.animationDelay = `${idx * 0.05}s`;

  const badgeClass = movie.category === "anime"  ? "anime"
                   : movie.category === "series" ? "series" : "";

  div.innerHTML = `
    <div class="card-img-wrap">
      <img src="${movie.image}" alt="${movie.title}" loading="lazy"
           onerror="this.src='https://via.placeholder.com/300x450/141414/E50914?text=No+Image'"/>
      <span class="card-badge ${badgeClass}">${movie.category}</span>
      <div class="card-overlay">
        <button class="overlay-btn" data-id="${movie.id}">View Details</button>
      </div>
    </div>
    <div class="card-body">
      <div class="card-title-text">${movie.title}</div>
      <div class="card-meta">${movie.year} · ${movie.duration}</div>
      <div class="card-genre">${movie.genre}</div>
    </div>
  `;

  div.querySelector(".overlay-btn").addEventListener("click", () => goToDetail(movie.id));
  div.addEventListener("click", (e) => {
    if (!e.target.classList.contains("overlay-btn")) goToDetail(movie.id);
  });

  return div;
}

function goToDetail(id) {
  localStorage.setItem("mv_selectedMovie", id);
  window.location.href = `movie_desc.html?id=${id}`;
}
function setupFilter() {
  const container = document.getElementById("filter");
  if (!container) return;

  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      applyFilters();
    });
  });
}
function setupSearch() {
  const input = document.getElementById("search");
  if (!input) return;
  input.addEventListener("input", () => {
    currentSearch = input.value.trim().toLowerCase();
    applyFilters();
  });
}

function applyFilters() {
  let filtered = movies;
  if (currentFilter !== "all") {
    filtered = filtered.filter(m => m.category === currentFilter);
  }
  if (currentSearch !== "") {
    filtered = filtered.filter(m => m.title.toLowerCase().includes(currentSearch));
  }
  renderMovies(filtered);
}
function setupSubscribe() {
  const btn = document.getElementById("subBt");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const emailInput = document.getElementById("subEmail");
    const msg   = document.getElementById("subMsg");
    const email = emailInput.value.trim();

    if (!email || !email.includes("@")) {
      msg.textContent = "⚠ Please enter a valid email address.";
      msg.style.color = "#E50914";
      return;
    }

    let emails = JSON.parse(localStorage.getItem("mv_subscribers") || "[]");
    if (!emails.includes(email)) {
      emails.push(email);
      localStorage.setItem("mv_subscribers", JSON.stringify(emails));
      msg.textContent = "✓ You're subscribed! Stay tuned for new releases.";
      msg.style.color = "#F5C518";
    } else {
      msg.textContent = "You're already subscribed!";
      msg.style.color = "rgba(255,255,255,0.4)";
    }
    emailInput.value = "";
  });
}
function setupContact() {
  const btn = document.getElementById("contactbt");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const name    = document.getElementById("contactN").value.trim();
    const email   = document.getElementById("contactE").value.trim();
    const message = document.getElementById("contactM").value.trim();
    const msg     = document.getElementById("contactMsg");

    if (!name || !email || !message) {
      msg.textContent = "⚠ Please fill in all fields.";
      msg.style.color = "#E50914";
      return;
    }

    msg.textContent = `✓ Thanks, ${name}! Your message has been received.`;
    msg.style.color = "#F5C518";

    document.getElementById("contactN").value = "";
    document.getElementById("contactE").value = "";
    document.getElementById("contactM").value = "";
  });
}
function initDetail() {
  const params = new URLSearchParams(window.location.search);
  let id = params.get("id") || localStorage.getItem("mv_selectedMovie");
  const movie = getMovieById(id);

  if (!movie) {
    document.getElementById("detailTitle").textContent = "Movie not found.";
    return;
  }

  const backdrop = document.getElementById("backdropImg");
  if (backdrop) { backdrop.src = movie.image; backdrop.alt = movie.title; }

  document.getElementById("detailPoster").src = movie.image;
  document.getElementById("detailPoster").alt = movie.title;

  const badge = document.getElementById("detailBadge");
  badge.textContent = movie.category.charAt(0).toUpperCase() + movie.category.slice(1);
  if (movie.category === "anime")  badge.classList.add("anime");
  if (movie.category === "series") badge.classList.add("series");

  document.getElementById("detailTitle").textContent    = movie.title;
  document.getElementById("detailYear").textContent     = movie.year;
  document.getElementById("detailDuration").textContent = movie.duration;
  document.getElementById("detailCountry").textContent  = movie.country;
  document.getElementById("detailLanguage").textContent = movie.language;
  document.getElementById("detailGenre").textContent    = movie.genre;
  document.getElementById("detailDesc").textContent     = movie.description;

  const ratings = ["★★★★★", "★★★★☆", "★★★★☆", "★★★☆☆"];
  document.getElementById("detailStars").textContent = ratings[movie.id % ratings.length];

  document.getElementById("specYear").textContent    = movie.year;
  document.getElementById("specGenre").textContent   = movie.genre;
  document.getElementById("specCat").textContent     = movie.category;
  document.getElementById("specCountry").textContent = movie.country;
  document.getElementById("specLang").textContent    = movie.language;
  document.getElementById("specDur").textContent     = movie.duration;

  document.title = `META VISION — ${movie.title}`;

  document.getElementById("watchbt").addEventListener("click", () => {
    localStorage.setItem("mv_action", "watch");
    window.location.href = "movie_pay.html";
  });
  document.getElementById("downbt").addEventListener("click", () => {
    localStorage.setItem("mv_action", "download");
    window.location.href = "movie_pay.html";
  });
}
function initPayment() {
  const action = localStorage.getItem("mv_action") || "watch";
  const btn = document.getElementById("paybt");
  if (!btn) return;

  if (action === "download") btn.textContent = "⬇ Complete Download";
  const cardInput = document.getElementById("payC");
  if (cardInput) {
    cardInput.addEventListener("input", () => {
      let val = cardInput.value.replace(/\D/g, "").substring(0, 16);
      val = val.replace(/(.{4})/g, "$1 ").trim();
      cardInput.value = val;
    });
  }
  const expiryInput = document.getElementById("payE");
  if (expiryInput) {
    expiryInput.addEventListener("input", () => {
      let val = expiryInput.value.replace(/\D/g, "").substring(0, 4);
      if (val.length > 2) val = val.substring(0, 2) + " / " + val.substring(2);
      expiryInput.value = val;
    });
  }
  const cvvInput = document.getElementById("payCvv");
  if (cvvInput) {
    cvvInput.addEventListener("input", () => {
      cvvInput.value = cvvInput.value.replace(/\D/g, "").substring(0, 3);
    });
  }

  btn.addEventListener("click", handlePayment);
}

function handlePayment() {
  const name   = document.getElementById("payN").value.trim();
  const card   = document.getElementById("payC").value.trim();
  const expiry = document.getElementById("payE").value.trim();
  const cvv    = document.getElementById("payCvv").value.trim();
  const msg    = document.getElementById("payMsg");

  if (!name || !card || !expiry || !cvv) {
    msg.textContent = "⚠ Complete your information to proceed.";
    msg.className   = "pay-msg error";
    msg.style.display = "block";
    return;
  }

  if (card.replace(/\s/g, "").length < 16) {
    msg.textContent = "⚠ Please enter a valid 16-digit card number.";
    msg.className   = "pay-msg error";
    msg.style.display = "block";
    return;
  }

  if (cvv.length < 3) {
    msg.textContent = "⚠ CVV must be 3 digits.";
    msg.className   = "pay-msg error";
    msg.style.display = "block";
    return;
  }

  const btn = document.getElementById("paybt");
  btn.textContent   = "Processing...";
  btn.style.opacity = "0.7";
  btn.disabled      = true;
  msg.style.display = "none";

  setTimeout(() => {
    msg.textContent = "✓ Access granted 🎬 Enjoy your movie";
    msg.className   = "pay-msg success";
    msg.style.display = "block";

    const overlay = document.getElementById("successOverlay");
    if (overlay) setTimeout(() => overlay.classList.add("show"), 300);

    localStorage.removeItem("mv_action");
  }, 1800);
}
function displayDateTime() {
  const el = document.getElementById("mvDateTime");
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
}
displayDateTime();