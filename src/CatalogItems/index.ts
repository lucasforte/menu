export interface CatalogItem {
  name: string;
  description: string;
  category: Category;
  url: string;
  img: string;
}

export enum Category {
  Appetizers = "Aperitivos",
  Entrees = "Entradas",
  MainCourse = "Pratos",
  Desserts = "Sobremesas",
  Beverages = "Bebidas",
}

export const items: CatalogItem[] = [
  {
    name: "Bolo de Banana",
    description: "Bolo de banana com passas e manteiga",
    category: Category.Desserts,
    url: "/bolo-de-banana",
    img: "pizza-margherita.jpg",
  },
  {
    name: "Brusqueta",
    description:
      "Pão torrado no forno com azeita, queijo muzzarella, tomate cereja e orégano.",
    category: Category.Appetizers,
    url: "/brusqueta",
    img: "pizza-margherita.jpg",
  },
  {
    name: "Espaguete à Carbonara",
    description:
      "Massa fresca com ovos, preparada ao estilo carbonara porém com cogumelos ao alho no lugar de bacon",
    category: Category.MainCourse,
    url: "/espaguete-a-carbonara",
    img: "pizza-margherita.jpg",
  },
  {
    name: "Strogonoff de frango",
    description:
      "Cubos de frango preparados ao molho com creme de leite. Acompanha arroz branco e batata palha",
    category: Category.MainCourse,
    url: "/strogonoff-de-frango",
    img: "pizza-margherita.jpg",
  },
  {
    name: "Pizza - Consultar sabores",
    description: "Massa caseira, super macia. Sabores diversos.",
    category: Category.MainCourse,
    url: "/pizza",
    img: "pizza-margherita.jpg",
  },
  {
    name: "Foccaccia",
    description:
      "Massa caseira, parecida com pizza mas mais densa. Disponibilidade de sabores variada, consultar.",
    category: Category.MainCourse,
    url: "/foccaccia",
    img: "pizza-margherita.jpg",
  },
  {
    name: "Hamburguer",
    description:
      "Hamburguer simples com bife bovino, queijo cheddar, rúcula ou alface, maionese, tiras de bacon e cebola caramelizada.",
    category: Category.MainCourse,
    url: "/hamburguer",
    img: "pizza-margherita.jpg",
  },
  {
    name: "Creme de cabotiá e cenoura",
    description:
      "Creme de refogado de abóbora cabotiá, cenoura, cebola e alho. Finalizado com creme de leite e acompanha pão torrado na chapa com manteiga e queijo parmesão.",
    category: Category.Entrees,
    url: "/creme-de-cabotia-e-cenoura",
    img: "pizza-margherita.jpg",
  },
  {
    name: "Foccaccia",
    description:
      "Massa caseira, parecida com pizza mas mais densa. Disponibilidade de sabores variada, consultar.",
    category: Category.MainCourse,
    url: "/foccaccia",
    img: "pizza-margherita.jpg",
  },
  {
    name: "Cerveja",
    description:
      "Temos na casa uma seleção de cervejas premmium. Consultar disponibilidade.",
    category: Category.Beverages,
    url: "/cerveja",
    img: "pizza-margherita.jpg",
  },
  {
    name: "Vinho",
    description:
      "Temos na casa uma seleção de vinhos premmium. Consultar disponibilidade.",
    category: Category.Beverages,
    url: "/vinho",
    img: "pizza-margherita.jpg",
  },
  {
    name: "Suco natural",
    description: "Suco natural feito na casa. Consultar disponibilidade.",
    category: Category.Beverages,
    url: "/suco-natural",
    img: "pizza-margherita.jpg",
  },
  {
    name: "Affogato",
    description: "Soverte de creme servido com café expresso.",
    category: Category.Desserts,
    url: "/affogato",
    img: "pizza-margherita.jpg",
  },
  {
    name: "Chocotorta argentina",
    description:
      "Torta tipo pavê, com biscoitos banhados em café, camadas de doce de leite com cream cheese e coberta por uma ganache de chocolate amargo.",
    category: Category.Desserts,
    url: "/chocotorta-argentina",
    img: "pizza-margherita.jpg",
  },
];
