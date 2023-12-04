import images from "./images";

const wines = [
  {
    title: "Bruschetta al Pomodoro",
    price: "₹ 785",
    tags: "Nostalgic | creamed",
  },
  {
    title: "Spaghetti Bolognese",
    price: "₹ 1325",
    tags: "Coconut | fish",
  },
  {
    title: "Penne alla Vodka",
    price: "₹ 935",
    tags: "Pasta | Sausage",
  },
  {
    title: "Chicken Parmigiana",
    price: "₹ 885",
    tags: "Chicken | Mozzarella",
  },
  {
    title: "Linguine alle Vongole",
    price: "₹ 935",
    tags: "White Wine | Mariana",
  },
];

const cocktails = [
  {
    title: "Tiramisu",
    price: "₹ 1195",
    tags: "Layers of coffee | cheese | dusted with cocoa",
  },
  {
    title: "Torta della Nonna",
    price: "₹ 1025",
    tags: "Grandmother's cake | custard or ricotta filling ",
  },
  {
    title: "Sfogliatella",
    price: "₹ 995",
    tags: "Pastry | ricotta cheese, sugar, and citron | Sugar",
  },
  {
    title: "Affogato",
    price: "₹ 1125",
    tags: "scoop of vanilla gelato | Brown sugar | Angostura Bitters",
  },
  {
    title: "Granita",
    price: "₹ 965",
    tags: "semi-frozen dessert | lemon | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };
