const menu = {
  antipasti: [
    ["Bombette", "Spiedino da 3 pezzi. Gusti: gorgonzola, pere e noci; gorgonzola e speck; chiedi le altre disponibilità.", "4€"],
    ["Bombette al piatto", "Bombette di vitello speziate avvolte in pancetta, cheddar e patatine.", "5€"],
    ["Carpaccio", "Carpaccio di scottona.", "8€"]
  ],
  panini: [
    ["Classic", "Scottona 180 g, lattuga, pomodoro e salse a scelta.", "7,50€"],
    ["Cheeseburger", "Scottona 180 g, lattuga, pomodoro, cheddar, bacon, cipolla caramellata e salse.", "9€"],
    ["Calabria", "Scottona 180 g, provola affumicata, cipolla caramellata e maionese alla ’nduja.", "9€"],
    ["Hiroshima", "Bombette di vitello speziato in pancetta, salsa BBQ, cheddar, cipolla caramellata, bacon, salsa cheddar e granella di bacon.", "10€"],
    ["Los Pollos Hermanos", "Pollo fritto, cheddar, insalata e salsa Alabama.", "7,50€"],
    ["Pulled", "Pulled pork 150 g e maionese al basilico.", "8,50€"],
    ["George", "Porchetta, scamorza, lattuga e maionese.", "7,50€"],
    ["Baby", "Scottona 90 g, patatine e salse a scelta.", "6€"],
    ["Hamburger al piatto", "Scottona 180 g con patatine.", "6€"],
    ["Pulled pork al piatto", "Pulled pork 150 g con patatine.", "6€"]
  ],
  special: [
    ["Saw", "Carpaccio di scottona, salsa Alabama, rucola, grana e glassa di aceto balsamico.", "13€"],
    ["Double Cheeseburger", "Doppia scottona 180 g, lattuga, pomodoro, cheddar, bacon, cipolla caramellata e salse.", "14€"],
    ["Bacon Crispy", "Angus irlandese reale 200 g, cheddar, bacon e salsa crispy.", "11€"],
    ["BeerBQ", "Hamburger, pulled pork, formaggio e salsa Alabama.", "12€"],
    ["Bacon Crispy 2.0", "Wagyu lucano 200 g, cheddar, bacon e salsa crispy.", "14€"],
    ["Toro Seduto", "Bistecca di Angus 180 g frollata 30 giorni, maionese al basilico, rucola, grana e glassa di balsamico IGP.", "13€"],
    ["Bacon Beef", "Pulled pork, insalata, bacon di scottona homemade, provola affumicata e salsa bacon.", "10€"]
  ],
  fritti: [
    ["Crocchette speck e brie", "Croccanti fuori e cremose dentro.", "5€"],
    ["Jalapeño cheese", "", "5€"],
    ["Fried pulled", "Crocchette homemade ripiene di pulled pork.", "5€"],
    ["Verdure pastellate", "", "4,50€"],
    ["Patatine fritte", "Small 2,50€ · Medium 5€ · XL 8€", "da 2,50€"],
    ["Patatine al pepe", "Medium 5€ · XL 9€", "da 5€"],
    ["Patatine cheddar & bacon", "Medium 7€ · XL 12€", "da 7€"],
    ["Patatine pulled pork", "Con salsa BBQ. Medium 7€ · XL 10€", "da 7€"],
    ["Stick di pollo", "Homemade. Small 3,50€ · Medium 7€ · XL 12€", "da 3,50€"],
    ["Onion rings", "", "5€"],
    ["Peperoni cruschi", "Small 3€ · Medium 6€ · XL 10€", "da 3€"],
    ["Melanzane alla griglia", "", "3,50€"],
    ["Patate al forno", "", "4€"]
  ],
  dessert: [
    ["Birramisù", "Tiramisù homemade alla stout con mascarpone, savoiardi, panna e cacao.", "5€"],
    ["Pangocciolo Kinder Bueno", "Homemade con crema alla nocciola e Kinder Bueno.", "6€"],
    ["Pangocciolo Kinder Maxi", "Homemade con Nutella e Kinder Maxi.", "6€"],
    ["Cheesecake", "Homemade ai frutti di bosco oppure alla Nutella.", "5€"]
  ],
  bevande: [
    ["Krombacher bionda", "Piccola 3€ · Grande 5€", "da 3€"],
    ["Mo' Sì IPA artigianale", "Piccola 3,50€ · Grande 6€", "da 3,50€"],
    ["Vodka", "Red Bull, tonic o lemon.", "6€"],
    ["Gin", "Tonic o lemon.", "6€"],
    ["Aperol / Campari Spritz", "", "6€"],
    ["Negroni", "", "6€"],
    ["Bibite in lattina", "Coca-Cola, Coca-Cola Zero, Fanta, Estathé pesca o limone.", "2,50€"],
    ["Campari", "", "3€"]
  ]
};

const itemImages = {
  "Bombette": "assets/images/bombette.jpg",
  "Bombette al piatto": "assets/images/bombette-piatto.jpg",
  "Carpaccio": "assets/images/carpaccio.jpg",
  "Classic": "assets/images/classic.jpg",
  "Cheeseburger": "assets/images/cheeseburger.jpg",
  "Calabria": "assets/images/calabria.jpg",
  "Hiroshima": "assets/images/hiroshima.jpg",
  "Los Pollos Hermanos": "assets/images/los-pollos.jpg",
  "Pulled": "assets/images/pulled.jpg",
  "George": "assets/images/george.png",
  "Baby": "assets/images/baby.jpg",
  "Hamburger al piatto": "assets/images/hamburger-piatto.jpg",
  "Pulled pork al piatto": "assets/images/pulled-piatto.jpg",
  "Saw": "assets/images/saw.jpg",
  "Double Cheeseburger": "assets/images/cheeseburger.jpg",
  "Bacon Crispy": "assets/images/bacon-crispy.jpg",
  "BeerBQ": "assets/images/beerbq.jpg",
  "Bacon Crispy 2.0": "assets/images/bacon-crispy-2.jpg",
  "Toro Seduto": "assets/images/toro-seduto.jpg",
  "Bacon Beef": "assets/images/bacon-beef.jpg",
  "Crocchette speck e brie": "assets/images/crocchette-speck-brie.jpg",
  "Jalapeño cheese": "assets/images/jalapeno-cheese.jpg",
  "Fried pulled": "assets/images/fried-pulled.jpg",
  "Verdure pastellate": "assets/images/verdure-pastellate.jpg",
  "Patatine fritte": "assets/images/patatine.jpg",
  "Patatine al pepe": "assets/images/patatine-pepe.jpg",
  "Patatine cheddar & bacon": "assets/images/patatine-bacon.jpg",
  "Patatine pulled pork": "assets/images/patatine-pulled.jpg",
  "Stick di pollo": "assets/images/stick-pollo.jpg",
  "Onion rings": "assets/images/onion-rings.jpg",
  "Peperoni cruschi": "assets/images/peperoni-cruschi.jpg",
  "Melanzane alla griglia": "assets/images/melanzane.jpg",
  "Patate al forno": "assets/images/patate-forno.jpg",
  "Birramisù": "assets/images/birramisu.jpg",
  "Pangocciolo Kinder Bueno": "assets/images/pangocciolo-kinder-bueno.jpg",
  "Pangocciolo Kinder Maxi": "assets/images/pangocciolo-kinder-maxi.jpg"
};

function render(section) {
  const node = document.querySelector(`#${section}-list`);
  if (!node) return;
  node.innerHTML = menu[section].map(([name, description, price]) => {
    const image = itemImages[name];
    const showPlaceholder = !image && section !== "bevande";
    return `
    <article class="menu-item${image ? " has-image" : ""}${showPlaceholder ? " missing-image" : ""}">
      ${image ? `<img src="${image}" alt="${name} BeerBQ" loading="lazy">` : ""}
      ${showPlaceholder ? `<span class="photo-placeholder" aria-hidden="true">Foto<br>in arrivo</span>` : ""}
      <h3>${name}</h3><span class="dots"></span><strong>${price}</strong>
      ${description ? `<p>${description}</p>` : ""}
    </article>`;
  }).join("");
}
Object.keys(menu).forEach(render);

const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("p");
const lightboxClose = lightbox.querySelector(".lightbox-close");

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}

function openLightbox(image) {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = image.alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
}

document.querySelectorAll(".food-showcase img, .section-photo img, .ribs-board img, .menu-item img").forEach(image => {
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", `Apri anteprima: ${image.alt}`);
  image.addEventListener("click", () => openLightbox(image));
  image.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(image);
    }
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
});
